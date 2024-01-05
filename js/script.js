//Funcion que me aplica al estilo a la opcion seleccionada en el menu y quita la previamente seleccionada 
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className="";
    opciones[1].className="";
    opciones[2].className="";
    opciones[3].className="";
    opciones[4].className="";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion en el modo responsivo
    var x = document.getElementById("nav");
        x.className = "";
}

//Funcion que muestra el menu responsivo 
function responsiveMenu(){
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}