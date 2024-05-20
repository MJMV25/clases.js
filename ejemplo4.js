class Cliente {
    constructor(nombre, tipo, cuentaEnBanco) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.cuentaEnBanco = cuentaEnBanco;
    }
}

class Caja {
    constructor(numero, tipoAtencion) {
        this.numero = numero;
        this.tipoAtencion = tipoAtencion;
        this.disponible = true;
    }
}

class Banco {
    constructor() {
        this.clientes = [];
        this.cajas = [
            new Caja(1, "retiros"),
            new Caja(2, "retiros"),
            new Caja(3, "caja"),
            new Caja(4, "caja"),
            new Caja(5, "asesoria")
        ];
        this.turnos = [];
    }

    asignarTurno(cliente) {
        this.turnos.push(cliente);
        console.log(`Se ha asignado un turno a ${cliente.nombre}`);
    }

    atenderClientes() {
        for (let caja of this.cajas) {
            if (caja.disponible) {
                let cliente = this.turnos.shift();
                if (cliente) {
                    console.log(`Atendiendo a ${cliente.nombre} en la caja ${caja.numero} (${caja.tipoAtencion})`);
                    caja.disponible = false;

                    // Simulación de atención al cliente
                    setTimeout(() => {
                        console.log(`Atención a ${cliente.nombre} en la caja ${caja.numero} finalizada`);
                        caja.disponible = true;
                    }, 1000); // Simulando el tiempo de atención
                } else {
                    console.log(`No hay más clientes por atender en la caja ${caja.numero}`);
                }
            }
        }
    }
}

const banco = new Banco();

banco.asignarTurno(new Cliente("Juan", "preferencial", true));
banco.asignarTurno(new Cliente("Maria", "general", false));
banco.asignarTurno(new Cliente("Carlos", "sin cuenta", false));

banco.atenderClientes();