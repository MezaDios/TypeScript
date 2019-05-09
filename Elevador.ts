class Elevador {

    private _pisoActual: number
    private _numPisos: number
    private _edoPuerta: boolean

    constructor(numPisos: number) {
        this._pisoActual = 1
        this._numPisos = numPisos
        this._edoPuerta = false
    }

    public get pisoActual(): number {
        return this._pisoActual
    }

    public set pisoActual(piso) {
        this._pisoActual = piso
    }

    public get numPisos(): number {
        return this._numPisos
    }

    private get edoPuerta(): boolean {
        return this._edoPuerta
    }

    private set edoPuerta(edo: boolean) {
        this._edoPuerta = edo
    }

    public abrirPuerta(): boolean {
        if (!this.edoPuerta) {
            this.edoPuerta = true
            return true
        }
        return false
    }

    public cerrarPuerta(): boolean {
        if (this.edoPuerta) {
            this.edoPuerta = false
            return true
        }
        return false
    }

    private subir(): boolean {
        if (!this.edoPuerta && this.pisoActual < this.numPisos) {
            this.pisoActual++
            return true
        }
        return false
    }

    private bajar(): boolean {
        if (!this.edoPuerta && this.pisoActual > this.numPisos) {
            this.pisoActual--
            return true
        }
        return false
    }

    public irAPiso(destino: number): boolean {
        if (destino > 0 || destino <= this.numPisos) {
            if (!this.edoPuerta) {
                if (destino > this.pisoActual) {
                    let pisosARecorrer: number = destino - this.pisoActual

                    for (let i = 1; i <= pisosARecorrer; i++) {
                        this.subir()
                    }
                    return true
                }
                else if (destino < this.pisoActual) {
                    let pisosARecorrer: number = this.pisoActual - destino

                    for (let i = 1; i <= pisosARecorrer; i++) {
                        this.bajar()
                    }
                    return true
                }
                else {
                    return false
                }
            }
            if (this.edoPuerta) {
                this.cerrarPuerta()
                this.irAPiso(destino)
            }
            return false
        }
        return false
    }

}

export default Elevador

