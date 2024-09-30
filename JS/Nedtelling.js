// Legger til dagens dato i footeren
document.getElementById('current-date').innerText = new Date().toLocaleDateString();

// Nedtelling til Julaften og St.Hans
const countdownTimer = document.getElementById('countdown-timer');
const targetDates = [
    new Date('2024-12-24'), // Julaften
    new Date('2025-06-24')  // St.Hans
];

function updateCountdown() {
    const now = new Date();
    let countdownString = '';

    targetDates.forEach(date => {
        const diff = date - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        countdownString += `Nedtelling til ${date.toLocaleDateString()}: ${days} dager igjen. `;
    });

    countdownTimer.innerText = countdownString;
}

setInterval(updateCountdown, 1000);

// Legg til login-funksjonalitet her (integrasjon med backend)

// Placeholder for JavaScript-spill
// Terning-spillet logikk
function diceGame() {
    // Start spillet med 3 terninger, 5 kast, 6 runder
    // Resett knapp, beregn gjennomsnitt og vis pokaler basert på poeng
}

// Tennis-spillet logikk
function tennisGame() {
    // Start spillet med to klosser som treffer ballen
    // 3 forsøk, poengsystem og vis pokaler basert på treff
}

// Tilpassede funksjoner for begge spill følger
