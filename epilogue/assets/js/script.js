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

// JavaScript en bas de votre page
document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-project-button");
    const modal = document.getElementById("add-project-modal");
    const closeButton = document.querySelector(".close");
    const projectForm = document.getElementById("project-form");
  
    addButton.addEventListener("click", () => {
      modal.style.display = "block";
    });
  
    closeButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  
    projectForm.addEventListener("submit", (event) => {
        event.preventDefault();
    
        const projectName = document.getElementById("project-name").value;
        const projectDescription = document.getElementById("project-description").value;
        const projectImage = document.getElementById("project-image").files[0];
        const projectImageURL = URL.createObjectURL(projectImage);
        const projectImageElement = document.createElement("img");
    
        // Créez un nouvel élément article avec les données du formulaire et de l'image
        const newProject = document.createElement("article");
        newProject.classList.add("item");
        newProject.innerHTML = `
            <header>
                <a href="#" style="background-image: url('${projectImageURL}');"><img src="./images/placeholder-image.png" alt="" /></a>
                <h3>${projectName}</h3>
            </header>
            <p>${projectDescription}</p>
            <ul class="actions">
                <li><a href="#" class="button">More</a></li>
            </ul>
        `;
    
        // Afficher l'image dans la modal (avant d'ajouter le projet)

        projectImageElement.src = projectImageURL;
        newProject.querySelector("a").appendChild(projectImageElement);
    
        // Ajoutez le nouvel élément à la section des projets
        const projectsSection = document.querySelector(".items");
        projectsSection.appendChild(newProject);
    
        // Fermez la modal
        modal.style.display = "none";
    });
    
  });
  