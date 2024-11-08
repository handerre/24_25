
//En melding som dukker opp når siden laster
//alert("Jeg heter Bent")

//En boks som dukker opp hvor du kan skrive ditt navn
//prompt("Hva heter du?")

// En funksjon som tar imot tekstinput fra brukeren og skriver ut en melding på nettsiden.
function myFunction() {
  // Deklarerer variabelen "text" som skal lagre meldingen.
  let text;
  
  // Viser en prompt-dialogboks til brukeren for å be om navn.
  let person = prompt("Skriv inn ditt navn:", "");
  
  // Logger brukerens input til konsollen for debugging.
  console.log("Brukerens input:", person);
  
  // Sjekker om brukeren trykket "Avbryt" (person == null) eller ikke skrev noe (person == "").
  if (person == null || person == "") {
    // Hvis brukeren kansellerte eller lot feltet stå tomt, settes text til denne meldingen.
    text = "Bruker kanselerte prompt.";
    
    // Logger til konsollen at prompten ble kansellert eller står tom.
    console.log("Prompten ble kansellert eller ingen input ble gitt.");
  } else {
    // Hvis brukeren skrev inn noe, lagres en personlig melding med navnet i variabelen text.
    text = "Hei " + person + "! Hvordan har du det i dag?";
    
    // Logger meldingen som skal vises til brukeren.
    console.log("Melding til bruker:", text);
  }

  // Finner HTML-elementet med id "demo" og oppdaterer innholdet med verdien av text.
  document.getElementById("demo").innerHTML = text;
  
  // Logger til konsollen at innholdet til elementet "demo" er oppdatert.
  console.log("Elementet 'demo' er oppdatert med meldingen.");
}





  /*Hent tabellen
  let table = document.getElementById("myTable").getElementsByTagName('tbody')[0];

  // Opprett en ny rad
  let newRow = table.insertRow();

  // Opprett celler og fyll dem med verdier
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);

  cell1.innerHTML = antallBarn;
  cell2.innerHTML = antallVoksne;
  cell3.innerHTML = brusPerGjest;
  cell4.innerHTML = antallBrus; */
}
