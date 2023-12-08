let currentInput = '';
let resultDisplayed = false;

function appendToDisplay(value) {
  if (resultDisplayed) {
    document.getElementById('display').value = '';
    resultDisplayed = false;
  }
  currentInput += value;
  document.getElementById('display').value += value;
}

function calculateResult() {
  let result = '';
  try {
    result = eval(currentInput);
    document.getElementById('display').value = result;
    resultDisplayed = true;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
  currentInput = '';
}
