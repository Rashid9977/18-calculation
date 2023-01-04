function perc(number, tax) {
  number = parseInt(document.getElementById("number").value);
  tax = parseInt(document.getElementById("tax").value);
  document.getElementById("rs").value = Math.floor(number / 100) * tax;
}
