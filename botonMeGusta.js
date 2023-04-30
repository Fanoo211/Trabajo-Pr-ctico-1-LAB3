// Obtener los elementos HTML del botón y el contador
const botonMeGusta = document.getElementById("boton-me-gusta");
const contadorMeGusta = document.getElementById("contador-me-gusta");

// Inicializar el estado del botón y el contador
let meGustaApretado = false;
let contadorMeGustaValor = 200;


// Agregar un evento clic al botón
botonMeGusta.addEventListener("click", function() {
  if (meGustaApretado) {
    // Si ya está apretado, desapretarlo y restar 1 al contador
    meGustaApretado = false;
    contadorMeGustaValor--;
  } else {
    // Si no está apretado, apretarlo y sumar 1 al contador
    meGustaApretado = true;
    contadorMeGustaValor++;
  }

  // Actualizar la clase CSS del botón para reflejar el estado actual
  if (meGustaApretado) {
    botonMeGusta.classList.add("apretado");
  } else {
    botonMeGusta.classList.remove("apretado");
  }

  // Actualizar el texto del contador con el valor actual
  contadorMeGusta.innerText = contadorMeGustaValor + " Likes";
});