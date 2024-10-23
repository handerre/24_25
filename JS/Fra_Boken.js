
//En melding som dukker opp når siden laster
alert("Jeg heter Bent")

//En boks som dukker opp hvor du kan skrive ditt navn
prompt("Hva heter du?")

//En funksjon som tar i mot tekstinputt og skriver det ut på nettsiden sammen med hallo og har du det bra!
function myFunction() {
  let text;
  let person = prompt("Skriv inn ditt navn:", "");
  if (person == null || person == "") {
    text = "Bruker kanselerte prompt.";
  } else {
    text = "Hei" + person + "! Hvordan har du det i dag?";
  }
  document.getElementById("demo").innerHTML = text;
}