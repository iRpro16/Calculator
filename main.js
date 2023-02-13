let a = "";
let b = "";
let operator = "";
const currentNum = document.querySelector('.current-num');
const previousNum = document.querySelector('.previous-num');
const buttonNums = document.querySelectorAll('.number');
const buttonOps = document.querySelectorAll('.operator');
const buttonClear = document.querySelector('.clear');
const equalBtn = document.querySelector('.op-equal');

function calculate() {
    let previous = parseFloat(a);
    let current = parseFloat(b);
    let result;
    
    switch(operator) {
        case "+": result = (previous + current).toFixed(4);
        break;
        case "-": result = (previous - current).toFixed(4);
        break;
        case "x": result = (previous * current).toFixed(4);
        break;
        case "÷": result = (previous / current).toFixed(4);
    }

    b = result;
    a = "";
    operator = "";
};

buttonNums.forEach((button) => {
    button.addEventListener('click', () => {
        if (b == 0) b = '';
        if (button.innerHTML == "." && b.includes('.')) return;
        b += (button.textContent);
        refresh();
    })
});

buttonOps.forEach((button) => {
    button.addEventListener('click', () => {
        operate();
        operator = (button.innerHTML);
        b = "";
        refresh();
    })
})

equalBtn.addEventListener('click', () => {
    calculate();
    refresh();
});

buttonClear.addEventListener('click', () => {
    b = 0;
    a = ''; 
    operator = "";
    refresh();
});

function operate() {
    if (b == "") return;

    if (a !== "" && operator !== "") {
        calculate();
    }
    a = b + operator;
    b = '';
}

function refresh() {
    currentNum.textContent = b;
    previousNum.textContent = a;
}