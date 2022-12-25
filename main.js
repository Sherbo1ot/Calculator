let num1, num2, result;

function resultFunc() {
  document.getElementById("out").innerHTML = result;
}
function getElementNum() {
  num1 = document.getElementById("n1").value;
  num2 = document.getElementById("n2").value;
}
function plus() {
  getElementNum();
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  result = num1 + num2;

  resultFunc();
}

function min() {
  getElementNum();

  result = num1 - num2;

  resultFunc();
}

function umn() {
  getElementNum();

  result = num1 * num2;

  resultFunc();
}
function rzdlt() {
  getElementNum();

  result = num1 / num2;

  resultFunc();
}
