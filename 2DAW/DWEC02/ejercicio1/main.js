function calcular() {
    //recuperar el INPUT y consultar el texto que hay dentro
    const caramelos = document.getElementById("caramelos")
    const repartir = document.getElementById("numero")
    
    const resultado = Math.floor(caramelos.value/repartir.value);
    
    //Si tienes __ caramelos y hay __ personas, tienes que repartir __ caramelos a cada uno y te sobran __ caramelos
    const salida = document.getElementById("salida")
    let caramelosSobrantes = ""
    if(caramelos.value%repartir.value != 0){
        const sobra = caramelos.value - (resultado * repartir.value)
        caramelosSobrantes = " y te sobran " + sobra + " caramelos"
    }
    salida.textContent = "Si tienes " + caramelos.value + " caramelos y hay " + repartir.value + 
    " personas, tienes que repartir " + resultado + caramelosSobrantes
}

const cacularBtn = document.getElementById("calcular")
cacularBtn.addEventListener("click",calcular)