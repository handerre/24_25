
//En melding som dukker opp når siden laster
//alert("Jeg heter Bent")

//En boks som dukker opp hvor du kan skrive ditt navn
//prompt("Hva heter du?")

//En funksjon som tar i mot tekstinputt og skriver det ut på nettsiden sammen med; hallo og har du det bra!
function myFunction() {
  let text;
  let person = prompt("Skriv inn ditt navn:", "");
  if (person == null || person == "") {
    text = "Bruker kanselerte prompt.";
  } else {
    text = "Hei " + person + "! Hvordan har du det i dag?";
  }
  document.getElementById("demo").innerHTML = text;
}
//En funksjon som regner ut antall brus i et selskap
function myFunction2() {
  let antallBarn = Number(prompt("Antall barn:", ""));
  let antallVoksne = Number(prompt("Antall voksne:", ""));
  let brusPerGjest = Number(prompt("Antall pr. gjest:", ""));
  let antallBrus = (antallBarn + antallVoksne) * brusPerGjest;

  document.getElementById("demo2").innerHTML = text;

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
