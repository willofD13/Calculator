function add(a,b) {
    return a+b;
};

function subtract(a,b) {
    return a-b ;
};

function multiply(a,b) {
    return a*b ;
};

function divide(a,b) {
    return a/b ;
};


let a;
let b;
let c;

function operate (a,b,operator) {
  if( operator === '+') {
    return add(a,b)
  }
  else if (operator === '-') {
    return subtract(a,b)
  }
  else if (operator === '*') {
    return multiply(a,b)
  }
  else if (operator === '/') {
    return divide (a,b)
  }
}

const numbers = document.querySelectorAll('.numbers')
const firstPart = document.querySelector('.firstPart')
const secondPart = document.querySelector('.secondPart')
numbers.forEach( (number)=> number.addEventListener('click', 
  function (e) {
    if (a === firstPart.textContent) {
    secondPart.textContent += e.target.textContent
    } else{ firstPart.textContent += e.target.textContent}
  }))

const operators = document.querySelectorAll('.operators')
const middlePart = document.querySelector('.middlePart')
operators.forEach((operator) => operator.addEventListener('click', () => a = firstPart.textContent ))
operators.forEach((operator) => operator.addEventListener('click', (e) => c = e.target.textContent ))
operators.forEach((operator) => operator.addEventListener('click', (e) => middlePart.textContent = e.target.textContent ))