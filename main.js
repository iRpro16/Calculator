let a = "";
let b = "";
let operator = "";
let currentNum = document.querySelector('.current-num');
let previousNum = document.querySelector('.previous-num');
let buttonNums = document.querySelectorAll('.number');
let buttonOps = document.querySelectorAll('.operator');
let buttonClear = document.querySelector('.clear');
let equalBtn = document.querySelector('.op-equal');

// On click, calculate: 
equalBtn.addEventListener('click', () => {
    operate(operator, a, b);
});

// On click, clear:
buttonClear.onclick = clear;

// Function to populate and retrieve a & b values:
buttonNums.forEach(number => {
    number.addEventListener('click', (e) => {
        // Clear the 0:
        if (currentNum.textContent == 0) currentNum.textContent = "";
        if (operator === "") {
            previousNum.textContent += e.target.value;
            a = previousNum.textContent;
            console.log(`a is ${a}`);
        } else {
            currentNum.textContent += e.target.value;
            b = currentNum.textContent;
            console.log(`b is ${b}`);
        }
    })
});

// Function to get operator and call operate function:
buttonOps.forEach(op => {
    op.addEventListener('click', (e) => {
            operator = e.target.textContent;
            //previousNum.textContent += operator;
        
    })
});

// Function to add:
function add(a, b) {
    previousNum.textContent = "";
    currentNum.textContent = parseFloat(a) + parseFloat(b);
}

// Function to subtract:
function sub(a, b) {
    previousNum.textContent = "";
    currentNum.textContent = parseFloat(a) - parseFloat(b);
}

// Function to multiply:
function mult(a, b) {
    previousNum.textContent = "";
    currentNum.textContent = parseFloat(a) * parseFloat(b);
}

// Function to divide:
function div(a, b) {
    previousNum.textContent = "";
    currentNum.textContent = parseFloat(a) / parseFloat(b);
}

// Function to operate depending on case:
function operate(operator, a, b) {
    switch(operator) {
        case "+": add(a, b);
        break;
        case "-": sub(a, b);
        break;
        case 'x': mult(a, b);
        break;
        case "÷": div (a, b);
        break;
    }
};


// Function clear:
function clear() {
    previousNum.textContent = "";
    currentNum.textContent = "";
    operator = "";
}