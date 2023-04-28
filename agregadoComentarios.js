function agregarComentario(evento) {
    evento.preventDefault(); // prevenir el envío del formulario
  
    const nombreInput = document.getElementById("nombre-usuario"); // seleccionar el campo de entrada del nombre
    const nombre = nombreInput.value; // obtener el valor del nombre
  
    const comentarioInput = document.getElementById("comentario"); // seleccionar el campo de entrada del comentario
    const comentario = comentarioInput.value; // obtener el valor del comentario
  
    const cajaComentarios = document.getElementById("caja-comentarios"); // seleccionar la caja de comentarios
    const nuevoComentario = document.createElement("p"); // crear un nuevo elemento <p>
    nuevoComentario.textContent = `${nombre} ${comentario}`; // establecer el contenido del comentario con el nombre
  
    cajaComentarios.appendChild(nuevoComentario); // agregar el nuevo comentario a la caja de comentarios
  
    nombreInput.value = ""; // borrar el contenido del campo de entrada del nombre
    comentarioInput.value = ""; // borrar el contenido del campo de entrada del comentario
    emailInput.value = ""; // borrar el contenido del campo de entrada del correo
}