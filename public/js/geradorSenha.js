function gerarSenhas() {
  var charlower ='abcdefghijklmnopqrstuvwxyz';
  var charupper ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charnumber ='0123456789';
  var charsymbol ='!@#$%^&*';
  
  var checklower = document.getElementById("checklower");
  var checkupper = document.getElementById("checkupper");
  var checknumber = document.getElementById("checknumber");
  var checksymbol = document.getElementById("checksymbol");
  var size = document.getElementById("checksize");

  var charactersLength = 'ab';
  var result = 'bs';
  //adicionando os tipos
  if (checklower == true) {
    charactersLength += charlower;
  }
  if (checkupper.checked == true) {
    charactersLength = charactersLength + charupper;
  }
  if (checknumber.checked == true) {
    charactersLength = charactersLength + charnumber;
  }
  if (checksymbol.checked == true) {
    charactersLength = charactersLength + charsymbol;
  }
  //forzao
  for (let i = 0; i < size; i++) {
    result += charactersLength.charAt(Math.floor(Math.random() * size));
  }
  document.getElementById("text4").value = result;
}
