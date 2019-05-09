class Nodo {
    private dato: number
    private hijoIzquierdo: Nodo
    private hijoDerecho: Nodo

    constructor(dato: number) {
        this.dato = dato
        this.hijoDerecho = null
        this.hijoIzquierdo = null
    }

    set Dato(dato: number) {
        this.dato = dato
    }

    set HijoIzquierdo(hijoIzquierdo: Nodo) {
        this.hijoIzquierdo = hijoIzquierdo
    }

    set HijoDerecho(hijoDerecho: Nodo) {
        this.hijoDerecho = hijoDerecho
    }

    get Dato() {
        return this.dato
    }

    get HijoIzquierdo() {
        return this.hijoIzquierdo
    }

    get HijoDerecho() {
        return this.hijoDerecho
    }
}

export default Nodo