const botonMeGusta = document.getElementById("boton-me-gusta");
const contadorMeGusta = document.getElementById("contador-me-gusta");

let meGustaApretado = false;
let contadorMeGustaValor = 200;

botonMeGusta.addEventListener("click", function() {
  if (meGustaApretado) {
    meGustaApretado = false;
    contadorMeGustaValor--;
  } else {
    meGustaApretado = true;
    contadorMeGustaValor++;
  }

  if (meGustaApretado) {
    botonMeGusta.classList.add("apretado");
  } else {
    botonMeGusta.classList.remove("apretado");
  }
  contadorMeGusta.innerText = contadorMeGustaValor + " Likes";
});