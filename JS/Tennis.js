const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const scoreDisplay = document.getElementById('scoreDisplay');
const graphContainer = document.getElementById('graphContainer');

let score = 0;
let attempts = 3;
let ball = { x: canvas.width / 2, y: canvas.height / 2, dx: 2, dy: 2, radius: 10 };
let paddle1 = { x: 10, y: canvas.height / 2 - 30, width: 10, height: 60 };
let paddle2 = { x: canvas.width - 20, y: canvas.height / 2 - 30, width: 10, height: 60 };
let scores = [];

function drawPaddle(paddle) {
    ctx.fillStyle = 'blue';
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

function movePaddle(e) {
    if (e.key === 'ArrowUp' && paddle2.y > 0) {
        paddle2.y -= 20;
    } else if (e.key === 'ArrowDown' && paddle2.y < canvas.height - paddle2.height) {
        paddle2.y += 20;
    } else if (e.key === 'w' && paddle1.y > 0) {
        paddle1.y -= 20;
    } else if (e.key === 's' && paddle1.y < canvas.height - paddle1.height) {
        paddle1.y += 20;
    }
}

function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx = (Math.random() * 2 + 1) * (Math.random() < 0.5 ? 1 : -1);
    ball.dy = (Math.random() * 2 + 1) * (Math.random() < 0.5 ? 1 : -1);
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPaddle(paddle1);
    drawPaddle(paddle2);
    drawBall();

    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.y + ball.dy > canvas.height - ball.radius || ball.y + ball.dy < ball.radius) {
        ball.dy = -ball.dy;
    }

    if (ball.x + ball.dx > canvas.width - ball.radius) {
        if (ball.y > paddle2.y && ball.y < paddle2.y + paddle2.height) {
            ball.dx = -ball.dx;
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
        } else {
            attempts--;
            if (attempts === 0) {
                alert('Game Over');
                resetGame();
            } else {
                resetBall();
            }
        }
    } else if (ball.x + ball.dx < ball.radius) {
        if (ball.y > paddle1.y && ball.y < paddle1.y + paddle1.height) {
            ball.dx = -ball.dx;
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
        } else {
            attempts--;
            if (attempts === 0) {
                alert('Game Over');
                resetGame();
            } else {
                resetBall();
            }
        }
    }

    requestAnimationFrame(update);
}

function resetGame() {
    scores.push(score);
    score = 0;
    attempts = 3;
    scoreDisplay.textContent = `Score: ${score}`;
    graphContainer.innerHTML = '';
    resetBall();
    drawGraph();
}

function drawGraph() {
    const avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;
    const graph = document.createElement('div');
    graph.innerHTML = `Average Score: ${avgScore.toFixed(2)}`;
    graphContainer.appendChild(graph);

    scores.forEach((s, index) => {
        const bar = document.createElement('div');
        bar.style.height = `${s * 10}px`;
        bar.style.width = '20px';
        bar.style.backgroundColor = 'green';
        bar.style.margin = '2px';
        bar.title = `Attempt ${index + 1}: ${s}`;
        graphContainer.appendChild(bar);
    });

    if (avgScore > 10) {
        const trophy = document.createElement('div');
        trophy.innerHTML = avgScore >= 15 ? '🏆🏆' : '🏆';
        graphContainer.appendChild(trophy);
    }
}

startButton.addEventListener('click', () => {
    score = 0;
    attempts = 3;
    scoreDisplay.textContent = `Score: ${score}`;
    resetBall();
    update();
});

resetButton.addEventListener('click', resetGame);
window.addEventListener('keydown', movePaddle);