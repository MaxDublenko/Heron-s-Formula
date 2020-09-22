document.getElementById('submit').addEventListener('click', submitHandler);

function heronsFormula(a, b, c) {
  s = (a + b + c) / 2;
  area = (s * (s - a) * (s - b) * (s - c)) ** 0.5;
  return area;
}

function submitHandler() {
  aVal = document.getElementById('sidea').value;
  bVal = document.getElementById('sideb').value;
  cVal = document.getElementById('sidec').value;
  aVal = Number(aVal);
  bVal = Number(bVal);
  cVal = Number(cVal);
  document.getElementById('result').innerHTML = 'The area of the triangle is: ' + heronsFormula(aVal, bVal, cVal);
}
