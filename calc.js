const numbers = document.querySelectorAll('.numbers')
const operators = document.querySelectorAll('.operators')
const equals = document.querySelector('.equals')
const display = document.querySelector('.display')
const clearButton = document.querySelector('.AC')
let a= null ;
let b;
let c;
let result;

function add(a,b) {
    return result = (Number(a)+ Number(b));
};

function subtract(a,b) {
    return result = a-b ;
};

function multiply(a,b) {
    return result = a*b ;
};

function divide(a,b) {
    return result = a/b ;
};




function operate () {
  if( c === '+') {
    return add(a,b)
  }
  else if (c === '-') {
    return subtract(a,b)
  }
  else if ( c=== '*') {
    return multiply(a,b)
  }
  else if ( c=== '/') {
    return divide (a,b)
  }
}


numbers.forEach((number)=> number.addEventListener('click', 
function (e) {
  if (a === display.textContent || display.textContent === resultString) {
    display.textContent = '' ;
    display.textContent = e.target.textContent ;
  } else { display.textContent += e.target.textContent}
}))

operators.forEach((operator) => operator.addEventListener('click', () => a = display.textContent ))
operators.forEach((operator) => operator.addEventListener('click', (e) => c = e.target.textContent ))





equals.addEventListener('click', () => b = display.textContent)
equals.addEventListener('click', () => display.textContent = '')
equals.addEventListener('click', operate)
equals.addEventListener('click', display.textContent = result)


clearButton.addEventListener('click', () => display.textContent = '')
