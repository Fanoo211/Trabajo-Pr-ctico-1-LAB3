const seguirBtn = document.getElementById("seguirBtn");

seguirBtn.addEventListener("click", function() {
  if (seguirBtn.innerHTML === "Seguir") {
    seguirBtn.innerHTML = "Dejar de seguir";

  } else {
    seguirBtn.innerHTML = "Seguir"; 
  }
  
});
