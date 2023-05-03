function agregarComentario(evento) {
    evento.preventDefault();
  
    let nombreInput = document.getElementById("nombre-usuario"); 
    let nombre = nombreInput.value; 
  
    let comentarioInput = document.getElementById("comentario"); 
    let comentario = comentarioInput.value; 
  
    let cajaComentarios = document.getElementById("caja-comentarios"); 
    let nuevoComentario = document.createElement("p"); 

    if(nombre == "" || comentario == ""){
        comentario = "Error, falto ingresar nombre o comentario";
        nuevoComentario.innerHTML = `<span style="color: red; font-size: 20px">${comentario}</span>`;
    }
    else{
        nuevoComentario.innerHTML = `<span style="color: blue; font-size: 20px"><b>${nombre}</b></span> ${comentario} <button class="eliminar-comentario">Eliminar</button>`;
        nuevoComentario.querySelector(".eliminar-comentario").addEventListener("click", () => nuevoComentario.remove()); 
    }  
    cajaComentarios.appendChild(nuevoComentario);
  
    nombreInput.value = "";
    comentarioInput.value = "";
}
