function afficherBoiteDialogue() {
    if (window.matchMedia("(max-width: 600px)").matches) {
        // Afficher l'overlay (fond obscur)
        document.getElementById("overlay").style.display = "flex";
    }
}

function cacherBoiteDialogue() {
    if (window.matchMedia("(max-width: 600px)").matches) {
        // Cacher l'overlay (fond obscur)
        document.getElementById("overlay").style.display = "none";
    }
}

function enleverHTML() {
    // Vérifier la largeur de l'écran avec une media query en JavaScript
    if (window.matchMedia("(max-width: 600px)").matches) {
        // Récupérer l'élément par son ID
        var modalElement = document.getElementById("modal");

        // Vider le contenu HTML
        modalElement.innerHTML = "";
    }
}