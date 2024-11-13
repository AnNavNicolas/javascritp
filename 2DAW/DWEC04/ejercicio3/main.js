function cuentaAtras(numero, medida) {
    if(medida === "M") {
        numero = numero * 60
    }

    function pintarCuentaAtras(){
        document.write(`Faltan ${numero} segundos<br>`)

        numero--
        if(numero > 0) {
            setTimeout(pintarCuentaAtras, 1000)
        }
    }

    pintarCuentaAtras()
}

cuentaAtras(2, "M");