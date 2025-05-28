const display = document.querySelector("input");
let justCalculated = false;
let hasError = false;

function appendToDisplay(input) {
  if (justCalculated || hasError) {
    display.value = "";
    justCalculated = false;
    hasError = false;
  }

  const current = display.value;
  const lastChar = current.slice(-1);
  const operators = ['+', '-', '*', '/', '%'];

  if (operators.includes(input) && operators.includes(lastChar)) {
    return;
  }

  display.value += input;
}

function clearDisplay() {
  display.value = "";
  justCalculated = false;
  hasError = false;
}

function calculate() {
  try {
    const expression = display.value.trim();

    if (expression === "") {
      display.value = "ERROR!";
      hasError = true;
      return;
    }

    const endsWithOperator = /[+\-*/%]$/.test(expression);
    if (endsWithOperator) {
      display.value = "ERROR!";
      hasError = true;
      return;
    }

    if (!/^[\d+\-*/%.() ]+$/.test(expression)) {
      display.value = "ERROR!";
      hasError = true;
      return;
    }

    const result = eval(expression);
    display.value = result;
    justCalculated = true;
  } catch (error) {
    display.value = "ERROR!";
    hasError = true;
  }
}
