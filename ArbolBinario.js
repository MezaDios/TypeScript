class ArbolBinario {
    constructor() {
        this.raiz = null;
    }
    agregar(nodo) {
        if (this.raiz == null)
            this.raiz = nodo;
        else {
            this.agregate(nodo, this.raiz);
        }
    }
    agregate(nodo, raiz) {
        if (nodo.Dato < raiz.Dato) {
            if (raiz.HijoIzquierdo == null)
                raiz.HijoIzquierdo = nodo;
            else
                this.agregate(nodo, raiz.HijoIzquierdo);
        }
        else if (nodo.Dato > raiz.Dato) {
            if (raiz.HijoDerecho == null)
                raiz.HijoDerecho = nodo;
            else
                this.agregate(nodo, raiz.HijoDerecho);
        }
    }
    inOrder() {
        if (this.raiz == null) {
            return "No hay raíz";
        }
        else {
            return this.in(this.raiz);
        }
    }
    in(raiz) {
        let cadena = "";
        if (raiz.HijoIzquierdo != null) {
            cadena = this.in(raiz.HijoIzquierdo);
        }
        cadena += " " + raiz.Dato + " ";
        if (raiz.HijoDerecho != null) {
            cadena += this.in(raiz.HijoDerecho);
        }
        return cadena;
    }
    preOrder() {
        if (this.raiz == null) {
            return "No hay raíz";
        }
        else {
            return this.pre(this.raiz);
        }
    }
    pre(raiz) {
        let cadena = "";
        cadena = " " + raiz.Dato + " ";
        if (raiz.HijoIzquierdo != null) {
            cadena += this.pre(raiz.HijoIzquierdo);
        }
        if (raiz.HijoDerecho != null) {
            cadena += this.pre(raiz.HijoDerecho);
        }
        return cadena;
    }
    postOrder() {
        if (this.raiz == null) {
            return "No hay raíz";
        }
        else {
            return this.post(this.raiz);
        }
    }
    post(raiz) {
        let cadena = "";
        if (raiz.HijoIzquierdo != null) {
            cadena = this.post(raiz.HijoIzquierdo);
        }
        if (raiz.HijoDerecho != null) {
            cadena += this.post(raiz.HijoDerecho);
        }
        cadena += " " + raiz.Dato + " ";
        return cadena;
    }
    buscarNodo(Dato) {
        if (this.raiz == null) {
            return null;
        }
        else {
            return this.buscar(Dato, this.raiz);
        }
    }
    buscar(Dato, raiz) {
        if (this.raiz == null) {
            return false;
        }
        else {
            if (Dato == raiz.Dato) {
                return raiz;
            }
            else {
                if (Dato < raiz.Dato) {
                    return this.buscar(Dato, raiz.HijoIzquierdo);
                }
                else {
                    return this.buscar(Dato, raiz.HijoDerecho);
                }
            }
        }
    }
}
export default ArbolBinario;
