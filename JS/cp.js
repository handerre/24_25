// Funksjon for å multiplisere to tall
function multiplyNumbers() {
    // Henter input fra brukeren og konverterer til flyttall
    let num1 = parseFloat(prompt("Skriv inn det første tallet:"));
    let num2 = parseFloat(prompt("Skriv inn det andre tallet:"));

    // Multipliserer tallene
    let result = num1 * num2;

    // Viser resultatet til brukeren
    alert("Resultatet er: " + result);
}

// Kaller funksjonen for å utføre operasjonen
multiplyNumbers();
