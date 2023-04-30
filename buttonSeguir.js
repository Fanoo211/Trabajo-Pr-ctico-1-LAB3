const seguirBtn = document.getElementById("seguirBtn");

seguirBtn.addEventListener("click", function() {
  if (seguirBtn.innerHTML === "Seguir") {
    seguirBtn.innerHTML = ' <span style="color: white;"> Dejar de seguir</span>' ;
    seguirBtn.classList.add("apretado")

  } else {
    seguirBtn.innerHTML = "Seguir"; 
    seguirBtn.classList.remove("apretado")
  }

});
