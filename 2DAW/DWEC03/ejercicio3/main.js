function comprobar() {
    const password = document.getElementById("inputPassword5").value
    const mayuscula = document.getElementById("mayuscula")
    const minuscula = document.getElementById("minuscula")
    const numero = document.getElementById("numero")
    const longitud = document.getElementById("longitud")
    const caracter = document.getElementById("caracter")
    const salida = document.getElementById("salida")

    salida.textContent = ""
    longitud.textContent = ""
    mayuscula.textContent = ""
    minuscula.textContent = ""
    numero.textContent = ""
    caracter.textContent = ""

    const length = password.length >=10

    if(!length){
        longitud.textContent = "La contraseña no tiene la longitud solicitada de más de 10 caracteres"
        salida.textContent = "Contraseña no valida"
    }
    if(length && !/[A-ZÑÁÉÍÓÚ]/.test(password)){
        mayuscula.textContent = "La contraseña no contiene una letra mayúscula"
        salida.textContent = "Contraseña no valida"
    }
    if(length && !/[a-zñáéíóú]/.test(password)){
        minuscula.textContent = "La contraseña no contiene una letra minúscula"
        salida.textContent = "Contraseña no valida"
    }
    if(length && !/\d/.test(password)){
        numero.textContent = "La contraseña no contiene un número"
        salida.textContent = "Contraseña no valida"
    }
    if(length && !/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(password)){
        caracter.textContent = "La contraseña no contiene ningún caracter especial"
        salida.textContent = "Contraseña no valida"
    }
    
    if(salida.textContent.length === 0){
        salida.textContent = "Contraseña valida"
    }

}
document.getElementById("comprobar").addEventListener("click", comprobar)