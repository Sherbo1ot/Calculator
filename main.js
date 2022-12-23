let num1, num2, result;

function plus() {
  num1 = document.getElementById("n1").value;
  num1 = parseInt(num1);
  num2 = document.getElementById("n2").value;
  num2 = parseInt(num2);

  result = num1 + num2;

  document.getElementById("out").innerHTML = result;
}

function min() {
  num1 = document.getElementById("n1").value;
  num2 = document.getElementById("n2").value;

  result = num1 - num2;

  document.getElementById("out").innerHTML = result;
}

function umn() {
  num1 = document.getElementById("n1").value;
  num2 = document.getElementById("n2").value;

  result = num1 * num2;

  document.getElementById("out").innerHTML = result;
}
function rzdlt() {
  num1 = document.getElementById("n1").value;
  num2 = document.getElementById("n2").value;

  result = num1 / num2;

  document.getElementById("out").innerHTML = result;
}
