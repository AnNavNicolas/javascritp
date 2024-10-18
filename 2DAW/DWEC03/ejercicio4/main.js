function changeChar (texto, codificar) {
    texto = texto.toLowerCase()
    if(codificar){
        document.getElementById("codificar").style.display = 'none'
        document.getElementById("decodificar").style.display = 'inline'
        if(/\d/.test(texto)){
            window.alert("Error, no se pueden meter números")
        }
        document.getElementById("input").value = texto.replaceAll("l", "1").replaceAll(/e|é/gi, "3").replaceAll(/o|ó/gi, "0").replaceAll("s", "5")
    } else if(!codificar){
        document.getElementById("codificar").style.display = 'inline'
        document.getElementById("decodificar").style.display = 'none'
        document.getElementById("input").value = texto.replaceAll("1", "l").replaceAll("3", "e").replaceAll("0", "o").replaceAll("5", "s")
    }
}

document.getElementById("codificar").addEventListener("click", function() {
    changeChar(document.getElementById("input").value, true);
});
document.getElementById("decodificar").addEventListener("click", function() {
    changeChar(document.getElementById("input").value, false);
});