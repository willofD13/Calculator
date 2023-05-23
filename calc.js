const numbers = document.querySelectorAll('.numbers')
const firstPart = document.querySelector('.firstPart')
const secondPart = document.querySelector('.secondPart')
const operators = document.querySelectorAll('.operators')
const middlePart = document.querySelector('.middlePart')
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


numbers.forEach( (number)=> number.addEventListener('click', 
  function (e) {
    if (a === firstPart.textContent) {
    secondPart.textContent += e.target.textContent
    } else { firstPart.textContent += e.target.textContent}
  }))


operators.forEach((operator) => operator.addEventListener('click', () => a = firstPart.textContent ))
operators.forEach((operator) => operator.addEventListener('click', (e) => c = e.target.textContent ))
operators.forEach((operator) => operator.addEventListener('click', (e) => middlePart.textContent = e.target.textContent ))


equals.addEventListener('click', () => firstPart.textContent = '')
equals.addEventListener('click', () => middlePart.textContent = '')
equals.addEventListener('click', () => b = secondPart.textContent)
equals.addEventListener('click', () => secondPart.textContent = '')
equals.addEventListener('click', operate)
equals.addEventListener('click', () => secondPart.textContent = result)


//clearButton.addEventListener('click', () => display.textContent = '')
