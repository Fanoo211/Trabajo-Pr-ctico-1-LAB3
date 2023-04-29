function agregarComentario(evento) {
    evento.preventDefault(); 
  
    let nombreInput = document.getElementById("nombre-usuario"); 
    let nombre = nombreInput.value.trim(); 
  
    let comentarioInput = document.getElementById("comentario"); 
    let comentario = comentarioInput.value.trim(); 
  
    let cajaComentarios = document.getElementById("caja-comentarios"); 
    let nuevoComentario = document.createElement("p"); 

    let mensajeError = ""; 
  
    if (nombre === "" || comentario === "") {
        mensajeError = "Error, falta ingresar nombre o comentario"; 
    } else {
        nuevoComentario.innerHTML = `<span style="color: blue; font-size: 20px"><b>${nombre}</b></span> ${comentario}`; 
    }

    if (mensajeError !== "") {
        nuevoComentario.innerHTML = `<span style="color: red; font-size: 20px">${mensajeError}</span>`; 
    } else {
        while (cajaComentarios.firstChild) {
            cajaComentarios.removeChild(cajaComentarios.firstChild);
        }
    }

    cajaComentarios.appendChild(nuevoComentario); 
  
    nombreInput.value = ""; 
    comentarioInput.value = ""; 
}
