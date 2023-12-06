function afficherBarNav() {
    if (window.matchMedia("(max-width: 600px)").matches) {
        // Afficher la bar nav version mobile
        document.getElementById("overlay").style.display = "flex";
    }
}

function cacherBarNav() {
    if (window.matchMedia("(max-width: 600px)").matches) {
        // Cahcer la bar nav version mobile
        document.getElementById("overlay").style.display = "none";
    }
}
