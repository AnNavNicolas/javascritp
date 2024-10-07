const entrada = document.getElementById("entrada")
const salida = document.getElementById("salida")

entrada.addEventListener("keyup",function(ev){
    if (ev.key == "Enter") {
        if(entrada.value.trim().length === 0) {
            salida.textContent = "Tienes que introducir un número"
        } else {
            const numero = entrada.value.trim()
            let calculoFactorial = 1
            let factoriales = []
            for(var i = numero; i > 0; i--){
                calculoFactorial = calculoFactorial*i
                factoriales.push(i)
            }
            salida.textContent = "Los factoriales del número " + numero + " son " + factoriales + "\nEl resultado del factorial del número " + numero + " es " + calculoFactorial
        }
    }
})