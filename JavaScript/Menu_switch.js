console.log("Menu");
console.log("1.café");
console.log("2.boullie");
console.log("3.thé");
let choix=prompt("faites votre choix entre 1,2 ou 3");
choix=parseInt(choix)
switch(choix){
  case 1:
    console.log("bravo vous avez choisi un cafe");
    break;
  case 2:
    console.log("bravo vous avez choisi la boullie");
    break;
  case 3:
    console.log("bravo vous avez choisi le thé");
    break;
  default:
    console.log("désolé nous n'avons pas ce que vous choisi");
}