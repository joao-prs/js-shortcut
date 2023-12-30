function areaQuadrada(){
  var entrada1 = document.getElementById('text1').value;
  var entrada2 = document.getElementById('text2').value;
  const var1= Number(entrada1);
  const var2= Number(entrada2);
  const var3 = var1 * var2;
  document.getElementById("text3").value = parseFloat(var3).toFixed(2) + " m²";
}

function areaCubica () {
  var entrada1 = document.getElementById('text4').value;
  var entrada2 = document.getElementById('text5').value;
  var entrada3 = document.getElementById('text6').value;
  const var1= Number(entrada1);
  const var2= Number(entrada2);
  const var3= Number(entrada3);
  const var4 = var1 * var2 * var3 ;
  document.getElementById("text7").value = parseFloat(var4).toFixed(2) + " m³";
}


function limpar() {
  // Obter todos os elementos de entrada
  var camposInput = document.querySelectorAll('input');
  // limpa todos os campos com 'name' ou 'id' começado em 'text'
  camposInput.forEach(function (campo) {
    if (campo.name.startsWith('text') || campo.id.startsWith('text')) {
      campo.value = ''; // Limpar o valor do campo
    }
  });
}