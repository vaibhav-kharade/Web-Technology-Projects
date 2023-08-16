function appendCharacter(character) {
    const display = document.getElementById("display");
    display.value += character;
}

function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function calculateSquareRoot() {
    const display = document.getElementById("display");
    display.value = Math.sqrt(parseFloat(display.value));
}

function calculatePower() {
    const display = document.getElementById("display");
    display.value += '^';
}

function calculateSin() {
    const display = document.getElementById("display");
    display.value = Math.sin(parseFloat(display.value));
}

function calculateCos() {
    const display = document.getElementById("display");
    display.value = Math.cos(parseFloat(display.value));
}

function calculateTan() {
    const display = document.getElementById("display");
    display.value = Math.tan(parseFloat(display.value));
}
