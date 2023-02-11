let a = "";
let b = "";
let operator = "";
let currentNum = document.querySelector('.current-num');
let previousNum = document.querySelector('.previous-num');
let buttonNums = document.querySelectorAll('.number');
let buttonOps = document.querySelectorAll('.operator');
let buttonClear = document.querySelector('.clear');

// On click, clear:
buttonClear.onclick = clear;

// Function to populate and retrieve a & b values:
buttonNums.forEach(number => {
    number.addEventListener('click', (e) => {
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
})

// Function to get operator and call operate function:
buttonOps.forEach(op => {
    op.addEventListener('click', (e) => {
        if (e.target.textContent !== "=") {
            operator = e.target.innertext;
        } else {
            operate();
        }
    })
});

// Function to add:
function add(a, b) {
    previousNum.textContent = "";
    currentNum.textContent = parseInt(a) + parseInt(b);
}

// Function to subtract:
function sub(a, b) {
    previousNum.textContent = "";
    currentNum.textContent = parseInt(a) - parseInt(b);
}

// Function to multiply:
function mult(a, b) {
    previousNum.textContent = "";
    currentNum.textContent = parseInt(a) * parseInt(b);
}

// Function to divide:
function div(a, b) {
    previousNum.textContent = "";
    curentNum.textContent = parseInt(a) / parseInt(b);
}

// Function to operate depending on case:
function operate(operator, a, b) {
    if (operator === "+") add(a,b);
};

// Function clear:

function clear() {
    previousNum.textContent = "";
    currentNum.textContent = "";
}
