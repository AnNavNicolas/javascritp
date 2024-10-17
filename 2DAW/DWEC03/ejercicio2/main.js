function comprobar() {
    const matricula = document.getElementById("matricula").value
    const salida = document.getElementById("salida")

    if(/^\d{4}[ -]?[A-Za-z]{3}$/.test(matricula)){
        salida.textContent = "Matrícula correcta"
    } else {
        salida.textContent = "Matrícula incorrecta"
    }
}
document.getElementById("comprobar").addEventListener("click", comprobar)