const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const symbols = "!@#$%^&*()_+{};~?,./";
const numbers = "0123456789"

let password;

function generatePass() {
  password = '';
  document.getElementById("password").value = "";

  let length = parseInt(document.getElementById("length").value);
  
  let charset = lowercase;

  if(document.getElementById("uppercase").checked){
    charset+=uppercase;
  }
  if(document.getElementById("numbers").checked){
    charset+=numbers;
  }
  if(document.getElementById("symbols").checked){
    charset+=symbols;
  }
  for(let i = length; i > 0; i--){
    password += charset[(Math.floor(Math.random()*charset.length))];
  }
  console.log(password);
  document.getElementById("password").value = password;
}
function copyText(){
  var passwordText = document.getElementById("password");
  
  passwordText.select();
  passwordText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(passwordText.value);
  
}