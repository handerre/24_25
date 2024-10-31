// Ber brukeren om å skrive inn navnet sitt og lagrer det i variabelen 'person'
let person = prompt("Skriv inn ditt navn:", "");

// Sjekker om brukeren har skrevet inn et navn (person er ikke null)
if (person != null) {
  // Setter inn navnet i HTML-elementet med id "demo2"
  document.getElementById("demo2").innerHTML = person;
}

// Denne linjen setter inn navnet i HTML-elementet med id "demo2" igjen,
// men denne linjen vil alltid kjøre, selv om 'person' er null  
document.getElementById("demo2").innerHTML = person;