
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";


    var x = document.getElementById("nav");
    x.className = "";
}


function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

window.onscroll = function() { efectoHabilidades() };

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }

}
function enviarFormulario(){
    var nombre=document.getElementById("nombre");
    var numero=document.getElementById("Numero");
    var correo=document.getElementById("correo");
    var error=document.getElementById("error");
    error.style.color="red";
    console.log('enviando formulario.....');
    var mensajesError=[];
    if(nombre.value === null || nombre.value === ""){
        mensajesError.push("Ingrese El nombre");
    }	
    if(numero.value === null || numero.value === ""){
        mensajesError.push("Ingrese El numero");
    }
    if(correo.value === null || correo.value === ""){
        mensajesError.push("Ingrese El correo");
    }
    error.innerHTML  =  mensajesError.join(',');
    return false;
}


