import Nodo from "./Nodo.js";

class ArbolBinario {

    private raiz: Nodo

    constructor() {
        this.raiz = null
    }

    public agregar(nodo: Nodo) {
        if (this.raiz == null)
            this.raiz = nodo
        else {
            this.agregate(nodo, this.raiz)
        }
    }

    private agregate(nodo: Nodo, raiz: Nodo) {
        if (nodo.Dato < raiz.Dato) {
            if (raiz.HijoIzquierdo == null)
                raiz.HijoIzquierdo = nodo
            else
                this.agregate(nodo, raiz.HijoIzquierdo)
        }
        else if (nodo.Dato > raiz.Dato) {
            if (raiz.HijoDerecho == null)
                raiz.HijoDerecho = nodo
            else
                this.agregate(nodo, raiz.HijoDerecho)
        }
    }

    public inOrder() {
        if (this.raiz == null) {
            return "No hay raíz"
        }
        else {
            return this.in(this.raiz)
        }
    }

    private in(raiz: Nodo) {
        let cadena: string = ""
        if (raiz.HijoIzquierdo != null) {
            cadena = this.in(raiz.HijoIzquierdo)
        }

        cadena += " " + raiz.Dato + " "

        if (raiz.HijoDerecho != null) {
            cadena += this.in(raiz.HijoDerecho)
        }

        return cadena
    }

    public preOrder() {
        if (this.raiz == null) {
            return "No hay raíz"
        }
        else {
            return this.pre(this.raiz)
        }
    }

    private pre(raiz: Nodo) {
        let cadena: string = ""

        cadena = " " + raiz.Dato + " "

        if (raiz.HijoIzquierdo != null) {
            cadena += this.pre(raiz.HijoIzquierdo)
        }

        if (raiz.HijoDerecho != null) {
            cadena += this.pre(raiz.HijoDerecho)
        }

        return cadena
    }

    public postOrder() {
        if (this.raiz == null) {
            return "No hay raíz"
        }
        else {
            return this.post(this.raiz)
        }
    }

    private post(raiz: Nodo) {
        let cadena: string = ""

        if (raiz.HijoIzquierdo != null) {
            cadena = this.post(raiz.HijoIzquierdo)
        }

        if (raiz.HijoDerecho != null) {
            cadena += this.post(raiz.HijoDerecho)
        }

        cadena += " " + raiz.Dato + " "

        return cadena
    }

    public buscarNodo(Dato: number) {
        if (this.raiz == null) {
            return null
        }
        else {
            return this.buscar(Dato, this.raiz)
        }
    }

    private buscar(Dato: number, raiz: Nodo): any {

        if (this.raiz == null) {
            return false
        }
        else {
            if (Dato == raiz.Dato) {
                return raiz
            }
            else {
                if (Dato < raiz.Dato) {
                    return this.buscar(Dato, raiz.HijoIzquierdo)
                }
                else {
                    return this.buscar(Dato, raiz.HijoDerecho)
                }
            }
        }
    }

}

export default ArbolBinario