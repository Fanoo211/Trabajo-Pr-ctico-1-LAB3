// Check if there are existing comments in localStorage
let comments = [];
if (localStorage.getItem('comments')) {
  comments = JSON.parse(localStorage.getItem('comments'));
}

// Display existing comments
const commentsContainer = document.getElementById('comments-container');
comments.forEach(comment => {
  const commentDiv = document.createElement('div');
  commentDiv.innerHTML = `
    <p><strong>${comment.name}</strong>: ${comment.comment}</p>
    <button class="delete-btn" data-id="${comment.id}">Delete</button>
  `;
  commentsContainer.appendChild(commentDiv);
});

// Add a new comment
function agregarComentario(event) {
    event.preventDefault();
  
    const comentarioInput = document.getElementById('comentario');
    const nombreImput = document.getElementById('nombre-usuario');
  
    const newComment = {
      id: Date.now(),
      name: nombreImput.value,
      comment: comentarioInput.value
    };
  
    comments.push(newComment);
    localStorage.setItem('comments', JSON.stringify(comments));
  
    const commentDiv = document.createElement('div');
    commentDiv.innerHTML = `
      <p><strong>${newComment.name}</strong>: ${newComment.comment}</p>
      <button class="delete-btn" data-id="${newComment.id}">Eliminar</button>
    `;
    commentsContainer.appendChild(commentDiv);
  
    comentarioInput.value = '';
  }

// Delete a comment
commentsContainer.addEventListener('click', event => {
    if (event.target.classList.contains('delete-btn')) {
      const commentId = parseInt(event.target.getAttribute('data-id'));
      comments = comments.filter(comment => comment.id !== commentId);
      localStorage.setItem('comments', JSON.stringify(comments));
      event.target.parentNode.remove();
    }
  });
  