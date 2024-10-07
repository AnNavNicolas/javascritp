const jugador = document.getElementById("totalCartasJugador")
const banca = document.getElementById("totalCartasBanca")
const pedir = document.getElementsByTagName("button")[0]
const check = document.getElementsByTagName("button")[1]
const salida = document.getElementById("salida")

pedir.addEventListener("click",sumarJugador)
check.addEventListener("click",sumarBanca)

let cartasJugador = 0
let cartasBanca = 0

function sumarJugador() {

    if(cartasJugador>21){
        salida.textContent = "El jugador ha superado 21 y ha perdido"
        return
    }

    cartasJugador += Math.floor(Math.random() * (11 - 1) + 1)
    
    jugador.textContent = cartasJugador
}

function sumarBanca() {

    cartasBanca += Math.floor(Math.random() * (21 - 14) + 14)
    banca.textContent = cartasBanca

    if(cartasBanca>21){
        salida.textContent = "La banca ha superado 21 y ha perdido"
        return
    }

    if(cartasBanca<cartasJugador){
        salida.textContent = "El jugador ha ganado"
    } else {
        salida.textContent = "La banca ha ganado"
    }


}
