let listeTaches = JSON.parse(localStorage.getItem("taches")) || [];
let liste = document.getElementById("liste");
let bouton = document.getElementById("ajouter");
let champ = document.getElementById("tache");

// Fonction pour afficher les tâches
function afficherTaches() {
  liste.innerHTML = "";
  listeTaches.forEach((tache, index) => {
    let ligne = document.createElement("tr");

    // Colonne texte
    let celluleTache = document.createElement("td");
    celluleTache.innerText = tache;
    ligne.appendChild(celluleTache);

    // Colonne bouton
    let celluleAction = document.createElement("td");
    let boutonSupprimer = document.createElement("button");
    boutonSupprimer.innerText = "Supprimer";
    boutonSupprimer.addEventListener("click", () => {
      listeTaches.splice(index, 1);
      localStorage.setItem("taches", JSON.stringify(listeTaches));
      afficherTaches();
    });
    celluleAction.appendChild(boutonSupprimer);
    ligne.appendChild(celluleAction);

    liste.appendChild(ligne);
  });
}

// Ajouter une tâche
bouton.addEventListener("click", () => {
  let texte = champ.value.trim();
  if (texte) {
    listeTaches.push(texte);
    localStorage.setItem("taches", JSON.stringify(listeTaches));
    champ.value = "";
    afficherTaches();
  }
});

// Afficher les tâches au démarrage
afficherTaches();
// Ajouter un gestionnaire d'événement pour la touche "Entrée"
champ.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Empêche le comportement par défaut de la touche "Entrée"
    bouton.click(); // Simule un clic sur le bouton d'ajout
  }
});