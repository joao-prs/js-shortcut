function convToMega(){
  var entrada1 = document.getElementById('text1').value;
  const var1= Number(entrada1);
  const var2 = var1 * 1024;
  document.getElementById("text2").value = var2;
}

function convToGiga(){
  var entrada1 = document.getElementById('text3').value;
  const var1= Number(entrada1);
  const var2 = var1 / 1024;
  document.getElementById("text4").value = var2;
}

function convGToKilo(){
  var entrada1 = document.getElementById('text5').value;
  const var1= Number(entrada1);
  const var2 = var1 * 1024 * 1024;
  document.getElementById("text6").value = var2;
}

function convKToGiga(){
  var entrada1 = document.getElementById('text7').value;
  const var1= Number(entrada1);
  const var2 = var1 / 1048576;
  document.getElementById("text8").value = var2;
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