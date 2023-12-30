function calcularIMC(){
  var entrada1 = document.getElementById('text1').value; // altura
  var entrada2 = document.getElementById('text2').value; // peso
  const var1= Number(entrada1);
  const var2= Number(entrada2);
  const var3 = var2 / ((var1/100)* (var1/100));
  document.getElementById("text3").value = parseFloat(var3).toFixed(1);
}

// funcao para limpeza
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