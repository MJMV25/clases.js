class ProductoSubasta {
    constructor(id, nombre, fecha, precioInicial) {
        this.id = id;
        this.nombre = nombre;
        this.fecha = fecha;
        this.precioInicial = precioInicial;
        this.ofertas = [];
    }

    agregarOferta(oferta) {
        this.ofertas.push(oferta);
    }

    obtenerOfertas() {
        return this.ofertas;
    }
}

class Oferta {
    constructor(fecha, producto, valor) {
        this.fecha = fecha;
        this.producto = producto;
        this.valor = valor;
    }
}

class Subasta {
    constructor() {
        this.productos = [];
    }

    registrarProducto(id, nombre, fecha, precioInicial) {
        const producto = new ProductoSubasta(id, nombre, fecha, precioInicial);
        this.productos.push(producto);
    }

    realizarOferta(fecha, idProducto, valor) {
        const producto = this.productos.find(producto => producto.id === idProducto);
        if (producto) {
            if (valor > producto.precioInicial) {
                const oferta = new Oferta(fecha, producto, valor);
                producto.agregarOferta(oferta);
            } else {
                console.log("El valor de la oferta debe ser mayor que el precio inicial.");
            }
        } else {
            console.log("Producto no encontrado.");
        }
    }

    listarProductos() {
        console.log("Lista de productos registrados:");
        this.productos.forEach(producto => {
            console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio Inicial: ${producto.precioInicial}`);
        });
    }

    mostrarOfertasPorProducto(idProducto) {
        const producto = this.productos.find(producto => producto.id === idProducto);
        if (producto) {
            console.log(`Ofertas para el producto "${producto.nombre}":`);
            const ofertas = producto.obtenerOfertas();
            if (ofertas.length > 0) {
                ofertas.forEach(oferta => {
                    console.log(`Fecha: ${oferta.fecha}, Valor: ${oferta.valor}`);
                });
            } else {
                console.log("No hay ofertas para este producto.");
            }
        } else {
            console.log("Producto no encontrado.");
        }
    }

    seleccionarOfertaGanadora(idProducto) {
        const producto = this.productos.find(producto => producto.id === idProducto);
        if (producto) {
            const ofertas = producto.obtenerOfertas();
            if (ofertas.length > 0) {
                const ofertaGanadora = ofertas.reduce((anterior, actual) => (actual.valor > anterior.valor) ? actual : anterior);
                console.log(`La oferta ganadora para el producto "${producto.nombre}" es de ${ofertaGanadora.valor} realizada en la fecha ${ofertaGanadora.fecha}.`);
            } else {
                console.log("No hay ofertas para este producto.");
            }
        } else {
            console.log("Producto no encontrado.");
        }
    }
}

const subasta = new Subasta();

subasta.registrarProducto(1, "Libro", "2024-05-20", 20);
subasta.registrarProducto(2, "Reloj", "2024-05-20", 50);

subasta.realizarOferta("2024-05-21", 1, 25);
subasta.realizarOferta("2024-05-22", 1, 30);
subasta.realizarOferta("2024-05-23", 2, 60);

subasta.listarProductos();

subasta.mostrarOfertasPorProducto(1);
subasta.mostrarOfertasPorProducto(2);

subasta.seleccionarOfertaGanadora(1);
subasta.seleccionarOfertaGanadora(2);
