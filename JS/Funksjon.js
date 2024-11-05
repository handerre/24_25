//En funksjon som regner ut antall brus i et selskap
function minFunksjonBrus() {
    let antallBarn = Number(prompt("Antall barn:", ""));
    let antallVoksne = Number(prompt("Antall voksne:", ""));
    let brusPerGjest = Number(prompt("Antall pr. gjest:", ""));
    let antallBrus = (antallBarn + antallVoksne) * brusPerGjest;
  
    document.getElementById("Brus").innerHTML = "Antall brus drukket " + antallBrus;
}