const nombre = document.getElementById("nombre")
const salida = document.getElementById("salida")

let nombres = []

nombre.addEventListener("keyup",function(ev){
    if (ev.key == "Enter") {
        salida.textContent = '';
        if(nombre.value.length === 0){
            //imprimir array
            salida.textContent = nombres;
        } else {
            if(/\d/.test(nombre.value)){
                salida.textContent = 'El formato es incorrecto'
            } else {
                nombres.push(nombre.value.trim())
            }
            nombre.value = ''
        }
    }
})

function checkName (name){
    if(/\d/.test(name)){
        salida.textContent = 'No puede contener numeros'
    } else if(!/^[A-ZÑ]/.test(name)){
        salida.textContent = 'El nombre debe de empezar por mayúscula'
    } else if(!/[a-z]$/.test(name)){
        salida.textContent = 'El apellido debe de terminar por minúscula'
    }
}