class PrendaVestir {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento, talla, permitePlanchado) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.cantidadBodega = cantidadBodega;
        this.cantidadMinima = cantidadMinima;
        this.cantidadMaxima = cantidadMaxima;
        this.porcentajeDescuento = porcentajeDescuento;
        this.talla = talla;
        this.permitePlanchado = permitePlanchado;
    }

    solicitarPedido() {
        return this.cantidadBodega < this.cantidadMinima;
    }

    calcularTotalAPagar(cantidadCompra) {
        return cantidadCompra * this.precioCompra * (1 - this.porcentajeDescuento / 100);
    }
}

class Calzado {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento, talla) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.cantidadBodega = cantidadBodega;
        this.cantidadMinima = cantidadMinima;
        this.cantidadMaxima = cantidadMaxima;
        this.porcentajeDescuento = porcentajeDescuento;
        this.talla = talla;
    }

    solicitarPedido() {
        return this.cantidadBodega < this.cantidadMinima;
    }

    calcularTotalAPagar(cantidadCompra) {
        return cantidadCompra * this.precioCompra * (1 - this.porcentajeDescuento / 100);
    }
}

const prendasVestir = [];
const calzados = [];

const numPrendasVestir = parseInt(prompt("Ingrese el número de productos de prendas de vestir a manejar:"));
const numCalzados = parseInt(prompt("Ingrese el número de productos de calzado a manejar:"));

for (let i = 0; i < numPrendasVestir; i++) {
    const codigo = prompt(`Ingrese el código de la prenda de vestir #${i + 1}:`);
    const descripcion = prompt(`Ingrese la descripción de la prenda de vestir #${i + 1}:`);
    const precioCompra = parseFloat(prompt(`Ingrese el precio de compra de la prenda de vestir #${i + 1}:`));
    const precioVenta = parseFloat(prompt(`Ingrese el precio de venta de la prenda de vestir #${i + 1}:`));
    const cantidadBodega = parseInt(prompt(`Ingrese la cantidad en bodega de la prenda de vestir #${i + 1}:`));
    const cantidadMinima = parseInt(prompt(`Ingrese la cantidad mínima requerida en bodega de la prenda de vestir #${i + 1}:`));
    const cantidadMaxima = parseInt(prompt(`Ingrese la cantidad máxima de inventario permitida de la prenda de vestir #${i + 1}:`));
    const porcentajeDescuento = parseFloat(prompt(`Ingrese el porcentaje de descuento de la prenda de vestir #${i + 1}:`));
    const talla = prompt(`Ingrese la talla de la prenda de vestir #${i + 1}:`);
    const permitePlanchado = prompt(`¿La prenda de vestir #${i + 1} permite planchado? (true/false):`).toLowerCase() === 'true';

    const prendaVestir = new PrendaVestir(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento, talla, permitePlanchado);
    prendasVestir.push(prendaVestir);
}

for (let i = 0; i < numCalzados; i++) {
    const codigo = prompt(`Ingrese el código del calzado #${i + 1}:`);
    const descripcion = prompt(`Ingrese la descripción del calzado #${i + 1}:`);
    const precioCompra = parseFloat(prompt(`Ingrese el precio de compra del calzado #${i + 1}:`));
    const precioVenta = parseFloat(prompt(`Ingrese el precio de venta del calzado #${i + 1}:`));
    const cantidadBodega = parseInt(prompt(`Ingrese la cantidad en bodega del calzado #${i + 1}:`));
    const cantidadMinima = parseInt(prompt(`Ingrese la cantidad mínima requerida en bodega del calzado #${i + 1}:`));
    const cantidadMaxima = parseInt(prompt(`Ingrese la cantidad máxima de inventario permitida del calzado #${i + 1}:`));
    const porcentajeDescuento = parseFloat(prompt(`Ingrese el porcentaje de descuento del calzado #${i + 1}:`));
    const talla = parseInt(prompt(`Ingrese la talla del calzado #${i + 1}:`));

    const calzado = new Calzado(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento, talla);
    calzados.push(calzado);
}

console.log("Productos de prendas de vestir:");
console.log(prendasVestir);
console.log("Productos de calzado:");
console.log(calzados);
