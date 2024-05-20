class CajeroAutomatico {
    constructor() {
        this.encendido = true;
    }

    cambiarEstado() {
        this.encendido = !this.encendido;
        console.log(`El cajero automático ha sido ${this.encendido ? 'encendido' : 'apagado'}.`);
    }

    realizarTransaccion(cliente) {
        if (!this.encendido) {
            console.log("El cajero automático está apagado. No se pueden realizar transacciones.");
            return;
        }

        console.log("Bienvenido al cajero automático. Por favor, ingrese su documento de identidad y su PIN de 4 dígitos.");

        let intentos = 0;
        let pinValido = false;
        while (intentos < 3 && !pinValido) {
            const pinIngresado = prompt("Ingrese su PIN:");
            if (pinIngresado === null) {
                console.log("Operación cancelada por el usuario.");
                return;
            }
            if (pinIngresado === cliente.pin) {
                pinValido = true;
            } else {
                console.log("PIN incorrecto. Por favor, intente nuevamente.");
                intentos++;
            }
        }

        if (!pinValido) {
            console.log("PIN incorrecto. Ha excedido el número de intentos permitidos. Saliendo del cajero automático.");
            return;
        }

        let continuar = true;
        while (continuar) {
            const opcion = parseInt(prompt("Seleccione la transacción que desea realizar:\n1. Retiro de efectivo\n2. Depósito\n3. Transferencia\n4. Consulta de saldo\n5. Salir"), 10);

            switch (opcion) {
                case 1:
                    this.retirarEfectivo(cliente);
                    break;
                case 2:
                    this.realizarDeposito(cliente);
                    break;
                case 3:
                    this.realizarTransferencia(cliente);
                    break;
                case 4:
                    this.consultarSaldo(cliente);
                    break;
                case 5:
                    console.log("Gracias por utilizar el cajero automático. ¡Hasta luego!");
                    continuar = false;
                    break;
                default:
                    console.log("Opción inválida. Por favor, seleccione una opción válida.");
            }
        }
    }

    retirarEfectivo(cliente) {
        console.log("Transacción de retiro de efectivo realizada con éxito.");
    }

    realizarDeposito(cliente) {
        console.log("Transacción de depósito realizada con éxito.");
    }

    realizarTransferencia(cliente) {
        console.log("Transacción de transferencia realizada con éxito.");
    }

    consultarSaldo(cliente) {
        console.log("Consulta de saldo realizada con éxito.");
    }
}

class Cliente {
    constructor(documentoIdentidad, pin) {
        this.documentoIdentidad = documentoIdentidad;
        this.pin = pin;
    }
}


const cajero = new CajeroAutomatico();
const cliente = new Cliente("123456789", "1234");


cajero.realizarTransaccion(cliente);
