class Universidad {
    constructor() {
        this.atenciones = {
            terminal: {
                estudiantes: 0,
                docentes: 0
            },
            oficina: {
                estudiantes: 0,
                docentes: 0
            }
        };
        this.transferencias = 0;
    }

    atenderUsuario(modulo, tipo) {
        if (this.atenciones[modulo] && this.atenciones[modulo][tipo] !== undefined) {
            this.atenciones[modulo][tipo]++;
        } else {
            console.error("Módulo o tipo de usuario inválido.");
        }
    }

    transferirUsuario(origen, destino, tipo) {
        if (this.atenciones[origen] && this.atenciones[destino] &&
            this.atenciones[origen][tipo] !== undefined && this.atenciones[destino][tipo] !== undefined &&
            this.atenciones[origen][tipo] > 0) {
            this.atenciones[origen][tipo]--;
            this.atenciones[destino][tipo]++;
            this.transferencias++;
        } else {
            console.error("Transferencia no válida.");
        }
    }

    obtenerEstadisticas() {
        console.log("Estadísticas de atención de la universidad:");
        console.log("Cantidad total de usuarios atendidos: ", this.getTotalAtendidos());
        console.log("Atendidos por día y especificación por segmento:");
        console.log("Terminal:");
        console.log("   Estudiantes:", this.atenciones.terminal.estudiantes);
        console.log("   Docentes:", this.atenciones.terminal.docentes);
        console.log("Oficina:");
        console.log("   Estudiantes:", this.atenciones.oficina.estudiantes);
        console.log("   Docentes:", this.atenciones.oficina.docentes);
        console.log("Total de transferencias realizadas: ", this.transferencias);
    }

    getTotalAtendidos() {
        return (
            this.atenciones.terminal.estudiantes +
            this.atenciones.terminal.docentes +
            this.atenciones.oficina.estudiantes +
            this.atenciones.oficina.docentes
        );
    }
}


const universidad = new Universidad();


universidad.atenderUsuario('terminal', 'estudiantes');
universidad.atenderUsuario('oficina', 'docentes');
universidad.transferirUsuario('terminal', 'oficina', 'estudiantes');
universidad.atenderUsuario('terminal', 'docentes');
universidad.atenderUsuario('oficina', 'estudiantes');


universidad.obtenerEstadisticas();