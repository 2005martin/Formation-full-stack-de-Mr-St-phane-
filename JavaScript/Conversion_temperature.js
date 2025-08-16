function convertirEnFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

let temperature = prompt("veillez une temperature en convertir pour convertir en fahrenheit");
temperature=parseFloat(temperature);
let resultat=convertirEnFahrenheit(temperature);
console.log(resultat);  
