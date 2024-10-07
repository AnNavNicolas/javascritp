const entrada = document.getElementById("entrada")
const calcular = document.getElementsByTagName("button")[0]
const salida = document.getElementById("salida")
const mutiplicador = 7

calcular.addEventListener("click",calcularMultiplos)

function calcularMultiplos() {

    const numero = entrada.value.trim()
    let resultados = []

    if(isNaN(numero)){
        window.alert("No has introducido un número")
    }
    
    for(var i = 1; i < numero; i++){
        if((mutiplicador*i) < numero){
            if((mutiplicador*i) % mutiplicador === 0) {
                resultados.push(mutiplicador*i)
            }
        } else {
            break
        }
    }
    salida.value = "Múltiplos del 7 entre 1 y " + numero + ": " + resultados
}


