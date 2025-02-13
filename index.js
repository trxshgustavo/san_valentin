document.getElementById("playMusic").addEventListener("click", function() {
    let music = document.getElementById("music");
    music.muted = false; // Desmutear
    music.play(); // Reproducir
    this.style.display = "none"; // Ocultar botón después de activarlo
});
