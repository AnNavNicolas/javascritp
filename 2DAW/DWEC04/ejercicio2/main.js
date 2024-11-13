const nombre = document.getElementById("nombre")
const salida = document.getElementById("salida")

let nombres = []

nombre.addEventListener("keyup",function(ev){
    if (ev.key == "Enter") {
        salida.textContent = '';
        if(nombre.value.length === 0){
            //imprimir array
            const primerNombre = nombres[0]
            const ultimoNombre = nombres[nombres.length - 1]

            nombres.sort((a,b) => {
                if (a.trim().length <= b.trim().length) return -1
                else return 1
            })

            let sumaNombres = 0;
            for (let i = 0; i < nombres.length; i++) {
                sumaNombres += nombres[i].trim().length  
            }

            const media = Math.ceil(sumaNombres / nombres.length)

            salida.innerHTML += `Primer Nombre: ${primerNombre}<br>`
            salida.innerHTML += `Ultimo Nombre: ${ultimoNombre}<br>`
            salida.innerHTML += `Nombre más corto: ${nombres[0]}<br>`
            salida.innerHTML += `Nombre más largo: ${nombres[nombres.length - 1]}<br>`
            salida.innerHTML += `Media: ${media}<br>`

        } else {
            if(!/^[A-ZÑ][a-zñ]+ [A-ZÑ][a-zñ]+$/.test(nombre.value)){
                salida.textContent = 'El formato es incorrecto. El formato correcto es Nombre Apellido'
            } else {
                nombres.push(nombre.value.trim())
            }
            nombre.value = ''
        }
    }
})