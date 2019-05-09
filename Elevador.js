class Elevador {
    constructor(numPisos) {
        this._pisoActual = 1;
        this._numPisos = numPisos;
        this._edoPuerta = false;
    }
    get pisoActual() {
        return this._pisoActual;
    }
    set pisoActual(piso) {
        this._pisoActual = piso;
    }
    get numPisos() {
        return this._numPisos;
    }
    get edoPuerta() {
        return this._edoPuerta;
    }
    set edoPuerta(edo) {
        this._edoPuerta = edo;
    }
    abrirPuerta() {
        if (!this.edoPuerta) {
            this.edoPuerta = true;
            return true;
        }
        return false;
    }
    cerrarPuerta() {
        if (this.edoPuerta) {
            this.edoPuerta = false;
            return true;
        }
        return false;
    }
    subir() {
        if (!this.edoPuerta && this.pisoActual < this.numPisos) {
            this.pisoActual++;
            return true;
        }
        return false;
    }
    bajar() {
        if (!this.edoPuerta && this.pisoActual > this.numPisos) {
            this.pisoActual--;
            return true;
        }
        return false;
    }
    irAPiso(destino) {
        if (destino > 0 || destino <= this.numPisos) {
            if (this.edoPuerta) {
                this.cerrarPuerta();
                if (destino > this.pisoActual) {
                    let pisosARecorrer = destino - this.pisoActual;
                    for (let i = 1; i <= pisosARecorrer; i++) {
                        this.subir();
                    }
                    return true;
                }
                else if (destino < this.pisoActual) {
                    let pisosARecorrer = this.pisoActual - destino;
                    for (let i = 1; i <= pisosARecorrer; i++) {
                        this.bajar();
                    }
                    return true;
                }
                else {
                    return false;
                }
            }
            return false;
        }
        return false;
    }
}
export default Elevador;
