import Nodo from './Nodo.js'
import ArbolBinario from './ArbolBinario.js'


let arbol: ArbolBinario = new ArbolBinario()

console.log(arbol)

document.getElementById("formNodo").onsubmit = e => {
    e.preventDefault()

    let nodo: Nodo = new Nodo(parseInt((<HTMLInputElement>document.getElementById("valor")).value))

    arbol.agregar(nodo)
}

document.getElementById("formInOrder").onsubmit = e => {
    e.preventDefault()

    document.getElementById("inOrder").innerHTML = arbol.inOrder()
}

document.getElementById("formPreOrder").onsubmit = e => {
    e.preventDefault()

    document.getElementById("preOrder").innerHTML = arbol.preOrder()
}

document.getElementById("formPostOrder").onsubmit = e => {
    e.preventDefault()

    document.getElementById("postOrder").innerHTML = arbol.postOrder()
}

document.getElementById("formBuscar").onsubmit = e => {
    e.preventDefault()

    let dato: number = (<HTMLInputElement>document.getElementById("nodo")).valueAsNumber

    let encontrado: Nodo = arbol.buscarNodo(dato)

    if (encontrado != null) {
        document.getElementById("buscar").innerHTML = `Encontrado: ${JSON.stringify(encontrado)}`
    }
    else {
        document.getElementById("buscar").innerHTML = `No encontrado`
    }
}