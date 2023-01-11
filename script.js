var cuentaHTML = document.getElementById("cuenta");
var contadorHTML = document.getElementById("contador");
var campoHTML = document.getElementById("campoClicks");
var clickHTML = document.getElementById("click");
var counter = 0;

cuentaHTML.innerHTML = counter;

function sumarContador(){
    counter++;
    cuentaHTML.innerHTML = counter;
    campoHTML.value = counter;
    if (counter == 1){
        clickHTML.innerHTML = "Click";
    } else {
        clickHTML.innerHTML = "Clicks";
    }
}

document.onclick = sumarContador;