const display = document.querySelector("input");

function appendToDisplay(input) {
  const current = display.value;
  const lastChar = current.slice(-1);

  // Avoid multiple operators in a row
  const operators = ['+', '-', '*', '/', '%'];
  if (operators.includes(input) && operators.includes(lastChar)) {
    return;
  }

  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    const expression = display.value;

    const endsWithOperator = /[+\-*/%]$/.test(expression);
    if (!expression || endsWithOperator) {
      display.value = "ERROR!";
      return;
    }

    if (!/^[\d+\-*/%.() ]+$/.test(expression)) {
      display.value = "ERROR!";
      return;
    }

    const result = eval(expression);
    display.value = result;
  } catch (error) {
    display.value = "ERROR!";
  }
}
