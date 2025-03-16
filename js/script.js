// Función que aplica el estilo a la opción seleccionada en el menú
// y quita la previamente seleccionada
function seleccionar(link) {
    // Seleccionamos todos los enlaces
    var opciones = document.querySelectorAll('#links a');
    
    // Quitamos la clase "seleccionado" a todos los enlaces
    opciones.forEach(opcion => opcion.classList.remove('seleccionado'));
    
    // Agregamos la clase "seleccionado" al enlace clicado
    link.classList.add('seleccionado');

    // Hacemos desaparecer el menú cuando se selecciona una opción en el modo responsivo
    var x = document.getElementById("nav");
    x.classList.remove("responsive");
}


// Función que muestra el menú responsivo
function responsiveMenu() {
    var x = document.getElementById("nav");
    var iconoNav = document.getElementById("icono-nav");
    
    // Toggle para el menú
    x.classList.toggle("responsive");
    
    // Cambiar el atributo aria-expanded para accesibilidad
    if (x.classList.contains("responsive")) {
        iconoNav.setAttribute("aria-expanded", "true");
    } else {
        iconoNav.setAttribute("aria-expanded", "false");
    }
}

