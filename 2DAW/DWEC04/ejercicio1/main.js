
const salida = document.getElementById("salida")
const meses = ["enero","febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

const halving = new Date('2024-04-19')
const date = new Date()

const diferencia = date.getTime() - halving.getTime()
const diasTotales = Math.floor(diferencia/(3600*24*1000))

salida.textContent = "Estamos a " + date.getDate() + " de " + meses[date.getMonth()] + " de " +
    date.getFullYear() + " han pasado " + diasTotales + 
    " días desde el último halving de Bitcoin, que tuvo lugar el 19 de abril de 2024."
