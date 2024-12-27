// add two number
function addition(a, b) {
  return a + b;
}

// substraction number
function substraction(a, b) {
  return a - b;
}

// multiply two numbers
function multiply(a, b) {
  return a * b;
}

// division two numbers
function division(a, b) {
  return a / b;
}

// percentage
function percentage(value, percent) {
  const result = (value * percent) / 100;

  return result;
}

module.exports = { addition, substraction, multiply, division, percentage };
