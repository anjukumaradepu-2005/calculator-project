function appendValue(value) {
    let display = document.getElementById("display");
    let lastChar = display.value.slice(-1);

    // prevent double operators
    if ("+-*/%".includes(lastChar) && "+-*/%".includes(value)) {
        return;
    }

    display.value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById("display");

    try {
        let expression = display.value.replace(/%/g, "/100");
        display.value = eval(expression);
    } catch {
        display.value = "Invalid";
    }
}

document.addEventListener("keydown", function(event) {
    let key = event.key;

    // Numbers (0-9)
    if (!isNaN(key)) {
        appendValue(key);
    }

    // Operators
    else if (key === "+" || key === "-" || key === "*" || key === "/") {
        appendValue(key);
    }

    // Decimal
    else if (key === ".") {
        appendValue(key);
    }

    // Enter → calculate
    else if (key === "Enter") {
        calculate();
    }

    // Backspace → delete last
    else if (key === "Backspace") {
        deleteLast();
    }

    // Escape → clear
    else if (key === "Escape") {
        clearDisplay();
    }

    else if (key === "(" || key === ")") {
    appendValue(key);
}
});