const container = document.getElementById("game-container");
const snakeElement = document.getElementById("snake");
const foodElement = document.getElementById("food");

const GRID_SIZE = 20;
const ROWS = 20;
const COLS = 20;

let snake = [{ x: 10, y: 10 }];
let food = { x: 15, y: 10 };
let direction = { x: 1, y: 0 };
let score = 0;

function updateSnake() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score++;
        spawnFood();
    } else {
        snake.pop();
    }
}

function spawnFood() {
    const newFood = {
        x: Math.floor(Math.random() * COLS),
        y: Math.floor(Math.random() * ROWS),
    };
    food = newFood;
}

function checkCollision() {
    if (
        snake[0].x < 0 ||
        snake[0].x >= COLS ||
        snake[0].y < 0 ||
        snake[0].y >= ROWS
    ) {
        return true;
    }

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }

    return false;
}

function draw() {
    container.innerHTML = "";

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const cell = document.createElement("div");
            cell.style.width = `${GRID_SIZE}px`;
            cell.style.height = `${GRID_SIZE}px`;

            if (snake.some(segment => segment.x === col && segment.y === row)) {
                cell.className = "snake";
            } else if (food.x === col && food.y === row) {
                cell.className = "food";
            }

            container.appendChild(cell);
        }
    }
}

function gameLoop() {
    updateSnake();
    if (checkCollision()) {
        clearInterval(interval);
        alert(`Game Over! Your score: ${score}`);
        return;
    }
    draw();
}

document.addEventListener("keydown", event => {
    switch (event.key) {
        case "ArrowUp":
            if (direction.y !== 1) {
                direction = { x: 0, y: -1 };
            }
            break;
        case "ArrowDown":
            if (direction.y !== -1) {
                direction = { x: 0, y: 1 };
            }
            break;
        case "ArrowLeft":
            if (direction.x !== 1) {
                direction = { x: -1, y: 0 };
            }
            break;
        case "ArrowRight":
            if (direction.x !== -1) {
                direction = { x: 1, y: 0 };
            }
            break;
    }
});

spawnFood();
const interval = setInterval(gameLoop, 150);
