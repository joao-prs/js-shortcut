function multiplicaValor(){
  var entrada1 = document.getElementById('text1').value;
  var entrada2 = document.getElementById('text2').value;
  const var1= Number(entrada1);
  const var2= Number(entrada2);
  const var3 = var1 * var2;
  document.getElementById("text3").value = parseFloat(var3).toFixed(2) + " m²";
}
