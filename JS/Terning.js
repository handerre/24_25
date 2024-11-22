let rundeTeller = 0;
let samletSum = 0;
let hoyesteSum = 0;
let lavesteSum = Infinity;
let sekserTeller = 0;
const vinnGrense = 100;

// Graf data og konfigurasjon
let grafData = {
    labels: [],
    datasets: [{
        label: 'Poengsum per runde',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false
    }, {
        label: 'Gjennomsnittlig poengsum',
        data: [],
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 2,
        fill: false
    }]
};

let grafConfig = {
    type: 'line',
    data: grafData,
    options: {
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Runder'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Poengsum'
                }
            }
        }
    }
};

let terningGraf = new Chart(
    document.getElementById('terningGraf'),
    grafConfig
);

function trilleTerning() {
    return Math.floor(Math.random() * 6) + 1;
}

function trillTerninger() {
    let antallTerninger = parseInt(document.getElementById("antallTerninger").value);
    let totalSum = 0;
    let kasteResultat = [];

    for (let i = 0; i < antallTerninger; i++) {
        let resultat = trilleTerning();
        totalSum += resultat;
        kasteResultat.push(resultat);
        
        if (resultat === 6) {
            sekserTeller++;
        }
    }

    document.getElementById("totalSum").textContent = totalSum;

    rundeTeller++;
    document.getElementById("rundeTeller").textContent = rundeTeller;

    samletSum += totalSum;
    document.getElementById("samletSum").textContent = samletSum;

    if (totalSum > hoyesteSum) {
        hoyesteSum = totalSum;
    }
    if (totalSum < lavesteSum) {
        lavesteSum = totalSum;
    }

    document.getElementById("hoyesteSum").textContent = hoyesteSum;
    document.getElementById("lavesteSum").textContent = lavesteSum;

    let gjennomsnitt = samletSum / rundeTeller;
    document.getElementById("gjennomsnittSum").textContent = gjennomsnitt.toFixed(2);

    document.getElementById("sekserTeller").textContent = sekserTeller;

    // Oppdater historikken
    let historikkListe = document.getElementById("historikkListe");
    let nyHistorikk = document.createElement("li");
    nyHistorikk.textContent = `Runde ${rundeTeller}: [ ${kasteResultat.join(", ")} ] - Total: ${totalSum}`;
    historikkListe.appendChild(nyHistorikk);

    // Oppdater grafen
    grafData.labels.push(`Runde ${rundeTeller}`);
    grafData.datasets[0].data.push(totalSum);
    grafData.datasets[1].data.push(gjennomsnitt);
    terningGraf.update();

    sjekkVinnTap();
}

function sjekkVinnTap() {
    let spillResultat = document.getElementById("spillResultat");

    if (samletSum >= vinnGrense) {
        spillResultat.textContent = "Gratulerer, du vant!";
        spillResultat.className = "winner";
        disableButtons();
    } else if (samletSum < vinnGrense && rundeTeller >= 10) {
        spillResultat.textContent = "Dessverre, du tapte.";
        spillResultat.className = "loser";
        disableButtons();
    } else {
        spillResultat.textContent = "";
    }
}

function disableButtons() {
    document.querySelector("button[onclick='trillTerninger()']").disabled = true;
    document.querySelector("button[onclick='resetSpillet()']").disabled = false;
}

function resetSpillet() {
    document.getElementById("totalSum").textContent = '-';
    document.getElementById("samletSum").textContent = '0';
    document.getElementById("rundeTeller").textContent = '0';
    document.getElementById("spillResultat").textContent = '';
    document.getElementById("spillResultat").className = '';

    rundeTeller = 0;
    samletSum = 0;
    hoyesteSum = 0;
    lavesteSum = Infinity;
    sekserTeller = 0;

    document.getElementById("gjennomsnittSum").textContent = '0';
    document.getElementById("hoyesteSum").textContent = '-';
    document.getElementById("lavesteSum").textContent = '-';
    document.getElementById("sekserTeller").textContent = '0';

    let historikkListe = document.getElementById("historikkListe");
    historikkListe.innerHTML = '';

    // Tilbakestill grafen
    grafData.labels = [];
    grafData.datasets[0].data = [];
    grafData.datasets[1].data = [];
    terningGraf.update();

    document.querySelector("button[onclick='trillTerninger()']").disabled = false;
}