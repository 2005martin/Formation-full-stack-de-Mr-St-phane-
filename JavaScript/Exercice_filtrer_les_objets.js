let produit = [
  { nom: "Stylo", prix: 500 },
  { nom: "Cahier", prix: 800 },
  { nom: "Sac", prix: 1500 }
];

// On filtre les produits moins chers que 1000
let moins_chers= produit.filter(function(montant){
  return montant.prix < 1000 ;
})
console.log(moins_chers);
// complexe
let produits = [
  { id: 1, nom: "Stylo", prix: 500 },
  { id: 2, nom: "Cahier", prix: 800 },
  { id: 3, nom: "Sac", prix: 1500 }
];

// Fonction pour trouver un produit par son id
function afficherproduit(id) {
  let produit = produits.find(p => p.id === id);
  if (produit) {
    console.log("Produit trouvé :");
    console.log("Nom :", produit.nom);
    console.log("Prix :", produit.prix);
  } else {
    console.log("Aucun produit trouvé avec l'id :", id);
  }
}

//xemple d
afficherproduit(2);  
afficherproduit(4);  


