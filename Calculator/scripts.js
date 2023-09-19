const buttonsContainer = document.querySelector(".buttons");
const result = document.getElementById("result");

const buttons = [
    "7", "8", "9", "C",
    "4", "5", "6", "Back",
    "1", "2", "3", "+",
    "0", ".", "=", "-",
    "*", "/", "Erase", "Check"
];

buttons.forEach(buttonText => {
    const button = document.createElement("button");
    button.textContent = buttonText;

    if (buttonText === "=") {
        button.className = "operation";
        button.addEventListener("click", calculate);
    } else if (buttonText === "C") {
        button.className = "special";
        button.addEventListener("click", clearResult);
    } else if (buttonText === "Back") {
        button.className = "special";
        button.addEventListener("click", backspace);
    } else if (buttonText === "Erase") {
        button.className = "erase";
        button.addEventListener("click", erase);
    } else if (buttonText === "Check") {
        button.className = "check";
        button.addEventListener("click", check);
    } else {
        button.addEventListener("click", () => appendToResult(buttonText));
    }

    buttonsContainer.appendChild(button);
});

function appendToResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = "";
}

function backspace() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}

function erase() {
    result.value = "";
}

function check() {
    const evalResult = calculateResult();
    result.value = evalResult === result.value ? "Correct!" : "Incorrect!";
}

function calculateResult() {
    try {
        return String(eval(result.value));
    } catch (error) {
        return "Error";
    }
}