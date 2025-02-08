document.querySelectorAll(".box").forEach(box => {
    box.addEventListener("click", function() {
        let sountPath = this.getAttribute("data-sound");
        let audio = document.getElementById("audio-player");
        audio.src = sountPath;
        audio.play();
    });
});