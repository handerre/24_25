/*let alder = 20; // Deklarerer variabelen 'alder' og gir den verdien 20 
if (alder >= 18) { // Sjekker om 'alder' er 18 eller mer 
    console.log("Du er voksen."); // Skriver ut melding hvis betingelsen er sann 
    } else { console.log("Du er ikke voksen."); // Skriver ut melding hvis betingelsen er usann 
    }
*/
    function størsteTall(a, b) { // Definerer funksjonen 'størsteTall' med to parametere 'a' og 'b' 
        return a > b ? a : b; // Bruker en ternær operator for å returnere det største tallet 
        } console.log(størsteTall(55, 11)); // Kaller funksjonen og skriver ut det største tallet (10)

        let bil = { // Oppretter et objekt 'bil' 
            merke: "Toyota", // Egenskap for merke 
            modell: "Corolla", // Egenskap for modell 
            år: 2020 // Egenskap for år 
            }; console.log(bil.merke); // Skriver ut bilens merke (Toyota) i konsollen

            let farger = ["Rød", "Grønn", "Blå"]; // Oppretter et array med tre farger 
            console.log(farger[1]); // Skriver ut den andre fargen (Grønn) i konsollen
/*
            let i = 2; // Initialiserer i med 2 
            while (i <= 20) { // Fortsetter så lenge i er mindre enn eller lik 20 
                console.log(i); // Skriver ut verdien av i i konsollen i += 2; // Øker i med 2 for å få neste partall 
                }*/

                function konverterTilTall(tekst) { // Definerer funksjonen 'konverterTilTall' med parameter 'tekst' 
                    try { let tall = Number(tekst); // Forsøker å konvertere teksten til et tall 
                    if (isNaN(tall)) throw new Error("Ikke et gyldig tall!"); // Kaster en feil hvis konverteringen mislykkes 
                    console.log(tall); // Skriver ut tallet i konsollen 
                    } catch (error) { console.log(error.message); // Skriver ut feilmeldingen 
                    } } konverterTilTall("abc"); // Kaller funksjonen med en ugyldig tekst