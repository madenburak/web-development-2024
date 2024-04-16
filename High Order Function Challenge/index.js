function add(num1, num2) {
  return num1 + num2;
}
function substract(num1, num2) {
  return num1 - num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

var num1 = prompt("1st Number?");
var num2 = prompt("2nd Number?");
var choose = prompt("Choose? (+, -, *, /)");

if (choose === "+") {
  operator = add;
} else if (choose === "-") {
  operator = substract;
} else if (choose === "*") {
  operator = multiply;
} else {
  operator = divide;
}

var result = calculator(parseInt(num1), parseInt(num2), operator);
alert(result);

document.querySelector("h2").innerHTML = "Result: " + result;
