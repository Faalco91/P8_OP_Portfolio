const menuButton = document.querySelector(".nav-toggler")
const navigation = document.getElementById("menu-container")
const bodyContent = document.querySelector(".menu-overlay");
menuButton.addEventListener("click", toggleNav)

function toggleNav(){
    menuButton.classList.toggle("active")
    menuButton.focus();
    navigation.classList.toggle("active")
    bodyContent.classList.toggle("opened")

    if (menuButton.classList.contains("active")) {
        navigation.focus(); // Déplacer le focus vers le menu

        // Ajouter le style pour désactiver le défilement du contenu principal
        document.body.style.overflow = "hidden";
        document.addEventListener("click", closeMenuOutsideClick);

    } else {
        // Rétablir le défilement normal du contenu principal
        document.body.style.overflow = "auto";
        document.removeEventListener("click", closeMenuOutsideClick);

    }
    
}

function closeMenuOutsideClick(event) {
    if (!navigation.contains(event.target) && !menuButton.contains(event.target)) {
        // Fermer le menu si le clic est en dehors du menu et du bouton du menu
        menuButton.classList.remove("active");
        navigation.classList.remove("active");
        bodyContent.classList.remove("opened");
        document.body.style.overflow = "auto";

        // Supprimer l'écouteur d'événement de clic sur le document
        document.removeEventListener("click", closeMenuOutsideClick);
    }
}