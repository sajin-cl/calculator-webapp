let calculation = localStorage.getItem('calculation') || '';

displayCalculation();

function updateCalculation(value) {

  calculation += value;

  displayCalculation();

  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
  document.querySelector('.screen-board')
    .innerHTML = calculation;
}


function handleKeyPress(event) {
  const key = event.key;

  if (/[0-9+\-*/.]/.test(key)) {
    updateCalculation(key);
  }

  if (key === 'Enter') {
    try {
      calculation = eval(calculation).toString();
      displayCalculation();
      localStorage.setItem('calculation', calculation);
    } catch {
      calculation = 'Error';
      displayCalculation();
    }
  }

  if (key === 'Backspace') {
    calculation = calculation.slice(0, -1);
    displayCalculation();
    localStorage.setItem('calculation', calculation);
  }
}


document.addEventListener('keydown', handleKeyPress);

