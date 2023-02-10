let a = "";
let b = "";
let operator = "";
let currentNum = document.querySelector('.current-num');
let previousNum = document.querySelector('.previous-num');
let buttonNums = document.querySelectorAll('.number');
let buttonOps = document.querySelectorAll('.operator');


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
        operator = e.target.textContent;
        if (operator === "=") operate(operator, a, b);
    })
});

// Function to add:
function add(a, b) {
    console.log(a + b);
}

// Function to subtract:
function sub() {
    return a - b;
}


// Function to multiply:
function mult() {
    return a * b;
}

// Function to divide:
function div() {
    return a / b;
}

// Function to operate depending on case:
function operate(operator, a, b) {
    switch (operator) {
        case "+": return add(a, b);
        case "-": return sub();
        case "*": return mult();
        case "÷": return div();
    }
};


/*
previousNum.textContent += e.target.value;
a = previousNum.textContent;
console.log(a);
*/
