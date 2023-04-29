function agregarComentario(evento) {
    evento.preventDefault(); // prevenir el envío del formulario
  
    let nombreInput = document.getElementById("nombre-usuario"); // seleccionar el campo de entrada del nombre
    let nombre = nombreInput.value; // obtener el valor del nombre
  
    let comentarioInput = document.getElementById("comentario"); // seleccionar el campo de entrada del comentario
    let comentario = comentarioInput.value; // obtener el valor del comentario
  
    let cajaComentarios = document.getElementById("caja-comentarios"); // seleccionar la caja de comentarios
    let nuevoComentario = document.createElement("p"); // crear un nuevo elemento <p>

    if(nombre == "" || comentario == ""){
        comentario = "Error, falto ingresar nombre o comentario";
        nuevoComentario.innerHTML = `<span style="color: red; font-size: 20px">${comentario}</span>`;
    }
    else{
        nuevoComentario.innerHTML = `<span style="color: blue; font-size: 20px"><b>${nombre}</b></span> ${comentario}`; // establecer el contenido del comentario con el nombre

    }  
    cajaComentarios.appendChild(nuevoComentario); // agregar el nuevo comentario a la caja de comentarios
  
    nombreInput.value = ""; // borrar el contenido del campo de entrada del nombre
    comentarioInput.value = ""; // borrar el contenido del campo de entrada del comentario
}