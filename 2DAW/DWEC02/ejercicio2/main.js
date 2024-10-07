const entrada = document.getElementById("entrada")
const calcular = document.getElementsByTagName("button")[0]
const salida = document.getElementById("salida")

let numeros = []

entrada.addEventListener("keyup",function(ev){
    if (ev.key == "Enter") {
        if(numeros.length === 4){
            salida.value = "Has intoducido 4 valores"
        } else if (entrada.value.trim().length > 0) {
            numeros.push(entrada.value.trim())
        }
        entrada.value = '';
    }
})

calcular.addEventListener("click",calcularDiferencia)


function calcularDiferencia() {
    if(numeros.length < 4) {
        salida.value = "Hay que introducir 4 valores"
    } else {
        numeros.sort(function(a,b){
            return a-b
        })
        let diferencia = numeros[numeros.length-1]-numeros[0]
        salida.value = "El número menor que has introducido es: " + numeros[0]
        salida.value += "\nEl número mayor que has introducido es: " + numeros[numeros.length-1]
        salida.value += "\nLa diferencia entre ellos es: " + diferencia   
    }
}


