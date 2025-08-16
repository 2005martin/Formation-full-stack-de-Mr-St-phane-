let jour = prompt("Entrez un jour de la semaine");
jour = jour.toLowerCase().trim(); 
switch(jour){
  case"lundi":
    console.log("courage c'est le debut de la semaine");
    break;
  case"vendredi":
    console.log("presque le weekend");
    break;
  default:
    console.log("bonne journee");
}