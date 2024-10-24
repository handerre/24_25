  // Generer et tilfeldig tall mellom 0 og 100
  const randomNumber = Math.floor(Math.random() * 101);

  // Sett antall forsøk brukeren har (10 forsøk)
  let attempts = 10;

  // Henter ut knappen, og legger til en lyttefunksjon på denne
  let btn_guessNumber = document.querySelector("#btn_guessNumber");
  btn_guessNumber.addEventListener("click", guessNumber);

  // Funksjon som kjører når brukeren trykker på "Gjett"-knappen
  function guessNumber() {
      // Hent brukerens gjetning fra input-feltet (bruker .value for å få verdien)
      let userGuess = document.getElementById("userGuess").value;

      // Sjekk om input er et gyldig tall, hvis ikke, vis feilmelding og returner
      if (isNaN(userGuess) || userGuess === "") {
          document.getElementById("errorMessage").innerHTML = "Vennligst skriv inn et gyldig tall!";
          return;
      }

      // Konverter verdien fra input-feltet til et tall (siden input er tekst som standard)
      userGuess = Number(userGuess);

      // Sjekk om tallet er utenfor området 0-100
      if (userGuess < 0 || userGuess > 100) {
          document.getElementById("errorMessage").innerHTML = "Tallet må være mellom 0 og 100!";
          return;
      }

      // Hvis input er gyldig, fjern eventuelle feilmeldinger
      document.getElementById("errorMessage").innerHTML = "";

      // Reduser antall forsøk med 1 for hver gjetning
      attempts--;

      // Sjekk om brukerens gjetning er lik det tilfeldige tallet
      if (userGuess === randomNumber) {
          // Hvis riktig, vis suksessmelding til brukeren
          document.getElementById("resultMessage").innerHTML = "Hurra, du gjettet riktig!";
          // Skjul eller fjern antall gjenværende forsøk, da brukeren vant
          document.getElementById("attemptsRemaining").innerHTML = "";
          // Returner fra funksjonen for å stoppe videre kjøring (siden brukeren har vunnet)
          return;
      } 
      // Hvis gjetningen er feil, men det er fortsatt forsøk igjen
      else if (attempts > 0) {
          // Vis en melding om at gjetningen var feil, og at brukeren kan prøve igjen
          document.getElementById("resultMessage").innerHTML = "Feil gjetning, prøv igjen!";
          // Vis hvor mange forsøk som er igjen
          document.getElementById("attemptsRemaining").innerHTML = "Du har " + attempts + " forsøk igjen.";
      } 
      // Hvis ingen forsøk er igjen (attempts <= 0)
      else {
          // Vis en melding om at forsøkene er brukt opp
          document.getElementById("resultMessage").innerHTML = "Sorry, du har brukt opp alle forsøkene.";
          // Vis også hva det riktige tallet var
          document.getElementById("attemptsRemaining").innerHTML = "Det riktige tallet var " + randomNumber + ".";
      }

      // Tøm input-feltet etter hver gjetning
      document.getElementById("userGuess").value = "";
  }

  // Funksjon for å tømme input-feltet når brukeren trykker på "Tøm"-knappen
  function clearInput() {
      document.getElementById("userGuess").value = "";
      document.getElementById("errorMessage").innerHTML = ""; // Fjern feilmelding når input tømmes
  }