// Password characters
var charactersUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var charactersLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var charactersNumeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharacters = ["!", "£", "$", "%", "^", "&", "*", "#", "~"]

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Determine length of password
  var passwordLength = prompt("Please type a number between 8 - 128");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8-128 characters long")
    return generatePassword()
  } 
  else if (isNaN(passwordLength)) {
    alert("Please enter a number")
    return generatePassword()
  }

  // Determine the characters of the password
  var passwordCharacters = [ ];

  if (confirm("Do you want to include Lowercase?")) {
    passwordCharacters = passwordCharacters.concat(charactersLowercase);
  }
  if (confirm("Do you want to include Uppercase?")) {
    passwordCharacters = passwordCharacters.concat(charactersUppercase);
  } 
  if (confirm("Do you want to include Numbers?")) {
    passwordCharacters = passwordCharacters.concat(charactersNumeric);
  }
  if (confirm("Do you want to include Symbols?")) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
  }
  
  // Generating the password
  var createPassword = [ ];
  for (var i = 0; i < passwordLength; i++) {
  var randomCharacters = Math.floor(Math.random() * passwordCharacters.length);
  createPassword = createPassword + passwordCharacters[randomCharacters];
  }

  return createPassword;

}

