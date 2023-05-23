const numbers = document.querySelectorAll('.numbers')
const operators = document.querySelectorAll('.operators')
const equals = document.querySelector('.equals')
const display = document.querySelector('.display')
const clearButton = document.querySelector('.AC')
let a = null;
let b;
let c;
let result;
let d;
let f=null ;

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
  if (a === display.textContent || display.textContent === f) {
    display.textContent = '' ;
    display.textContent = e.target.textContent ;
  } else { display.textContent += e.target.textContent}
}))

operators.forEach((operator) => operator.addEventListener('click', 
  function (e) {
    if (a === null) {
      a = display.textContent ;
      c = e.target.textContent ; 
    } else if ( a !== null && f === null) {
      b = display.textContent ;
      display.textContent = '' ;
      operate() ;
      d = (Math.round(1000*result))/1000 ;
      f = d.toString();
      display.textContent = f ;
      a = f ;
      c = e.target.textContent ;
    } else if ( a !== null && f !== null && a === f) {
      b = display.textContent ;
      display.textContent = '' ;
      operate() ;
      d = (Math.round(1000*result))/1000 ;
      f = d.toString();
      display.textContent = f ;
      a = f ;
      c = e.target.textContent ;
    } else if ( a!== null && f!== null && a!=f) {
      a=f ;
      c = e.target.textContent ;
    }
  }));


equals.addEventListener('click', () => b = display.textContent)
equals.addEventListener('click', () => display.textContent = '')
equals.addEventListener('click', operate)
equals.addEventListener('click', function(){
   d = (Math.round(1000*result))/1000 ;
   f = d.toString();
   display.textContent = f;
})

clearButton.addEventListener('click', () => display.textContent = '')
clearButton.addEventListener('click', () => a = null )
clearButton.addEventListener('click', () => f = null )
clearButton.addEventListener('click', () => b = '' )
clearButton.addEventListener('click', () => c = '' )
clearButton.addEventListener('click', () => d = '' )
clearButton.addEventListener('click', () => result = '' )
