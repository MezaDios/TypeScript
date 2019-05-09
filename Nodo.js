class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.hijoDerecho = null;
        this.hijoIzquierdo = null;
    }
    set Dato(dato) {
        this.dato = dato;
    }
    set HijoIzquierdo(hijoIzquierdo) {
        this.hijoIzquierdo = hijoIzquierdo;
    }
    set HijoDerecho(hijoDerecho) {
        this.hijoDerecho = hijoDerecho;
    }
    get Dato() {
        return this.dato;
    }
    get HijoIzquierdo() {
        return this.hijoIzquierdo;
    }
    get HijoDerecho() {
        return this.hijoDerecho;
    }
}
export default Nodo;
