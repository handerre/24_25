const paddle1 = document.getElementById('paddle1');
const paddle2 = document.getElementById('paddle2');
const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');
const attemptsDisplay = document.getElementById('attempts');
const averageDisplay = document.getElementById('average');
const trophyDisplay = document.getElementById('trophy');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const gameArea = document.getElementById('gameArea');

// Applaus lyd når en blokk treffer ballen
const applauseSound = new Audio('path_to_applause_sound.mp3'); // Legg til riktig sti til lydfilen

let score = 0;
let attempts = 3;
let ballSpeedX = Math.random() * 2 + 1; // Hastighet mellom 1 og 3
let ballSpeedY = Math.random() * 2 + 1;
let ballDirectionX = 1; // 1 for høyre, -1 for venstre
let ballDirectionY = 1; // 1 for ned, -1 for opp

let gameStarted = false; // Ny variabel for å holde styr på om spillet har startet

// Flytt padler med tastatur
document.addEventListener('keydown', function(event) {
  if (event.key === 'w') {
    movePaddle(paddle1, -10);
  } else if (event.key === 's') {
    movePaddle(paddle1, 10);
  } else if (event.key === 'ArrowUp') {
    movePaddle(paddle2, -10);
  } else if (event.key === 'ArrowDown') {
    movePaddle(paddle2, 10);
  }
});

// Funksjon for å flytte padler
function movePaddle(paddle, change) {
  const currentPosition = parseInt(window.getComputedStyle(paddle).top);
  paddle.style.top = Math.max(0, Math.min(currentPosition + change, gameArea.clientHeight - paddle.clientHeight)) + 'px';
}

// Ballens bevegelse
function moveBall() {
  if (gameStarted) {
    const ballRect = ball.getBoundingClientRect();
    const paddle1Rect = paddle1.getBoundingClientRect();
    const paddle2Rect = paddle2.getBoundingClientRect();
    
    // Sjekk for treff med padler
    if (ballRect.left <= paddle1Rect.right && ballRect.top >= paddle1Rect.top && ballRect.bottom <= paddle1Rect.bottom) {
      ballDirectionX = 1;
      score++;
      scoreDisplay.textContent = score;
      applauseSound.play(); // Spill applaus-lyd ved treff
    } else if (ballRect.right >= paddle2Rect.left && ballRect.top >= paddle2Rect.top && ballRect.bottom <= paddle2Rect.bottom) {
      ballDirectionX = -1;
      score++;
      scoreDisplay.textContent = score;
      applauseSound.play(); // Spill applaus-lyd ved treff
    }

    // Sjekk for treff med øvre/nedre kant
    if (ballRect.top <= 0 || ballRect.bottom >= gameArea.clientHeight) {
      ballDirectionY *= -1;
    }

    // Sjekk om ballen bommer
    if (ballRect.left <= 0 || ballRect.right >= gameArea.clientWidth) {
      attempts--;
      attemptsDisplay.textContent = attempts;
      resetBall();
    }

    // Flytt ball
    ball.style.left = ballRect.left + ballSpeedX * ballDirectionX + 'px';
    ball.style.top = ballRect.top + ballSpeedY * ballDirectionY + 'px';

    if (attempts > 0) {
      requestAnimationFrame(moveBall);
    } else {
      endGame();
    }
  }
}

// Resett ballens posisjon
function resetBall() {
  ball.style.left = gameArea.clientWidth / 2 + 'px';
  ball.style.top = gameArea.clientHeight / 2 + 'px';
  ballSpeedX = Math.random() * 2 + 1;
  ballSpeedY = Math.random() * 2 + 1;
}

// Avslutt spill
function endGame() {
  averageDisplay.textContent = (score / 3).toFixed(2);
  if (score >= 15) {
    trophyDisplay.innerHTML = '🏆 Stor Pokal';
  } else if (score >= 10) {
    trophyDisplay.innerHTML = '🥇 Liten Pokal';
  }
}

// Start spill når startknappen trykkes
startButton.addEventListener('click', function() {
  if (!gameStarted) {
    gameStarted = true;
    resetBall();
    moveBall();
  }
});

// Reset spill
resetButton.addEventListener('click', function() {
  score = 0;
  attempts = 3;
  scoreDisplay.textContent = score;
  attemptsDisplay.textContent = attempts;
  trophyDisplay.innerHTML = '';
  resetBall();
  if (gameStarted) {
    moveBall();
  }
});

