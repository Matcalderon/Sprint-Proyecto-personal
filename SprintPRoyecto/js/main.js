
// -------------- prueba estacionamiento on/off -----

let offBton = document.getElementById("ocupado");
let onBton = document.getElementById("desocupado");
let imgchange = document.getElementById("imgchange");

offBton.onclick = function () {

    imgchange.src = "./css/imagenes/completo.png"
}
onBton.onclick = function (){

    imgchange.src = "./css/imagenes/vacio.png"
}

