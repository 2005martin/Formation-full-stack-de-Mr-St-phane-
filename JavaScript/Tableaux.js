let nombre=[1,2,3,4,5];
console.log(nombre[1]);
let fruits=["mangue","ananas","pomme"];
console.log(fruits[0]);
//push permet d'ajouter un element dans le tableau
fruits.push("orange");
nombre.push(12);
console.log(fruits);
console.log(nombre);
//map permet de transformer les elements
//par exemple je veux multiplier les element par trois
let triplés=nombre.map(function(n)
{
  return n*3;
})
console.log(triplés);

//filter permet de filtrer elements
let nombrefiltrés=nombre.filter(function(nbre){
  return nbre > 5;
})
console.log(nombrefiltrés);

//reduce permet de faire la somme de tous les elements
let total=nombre.reduce(function(acc,val){
  return acc + val ;
}, 0);
console.log(total);