// 1. Create a set of arrays with user options. 
// 1.a Lowercase - Uppercase - Numbers - Special Characters 
// These arrays will be added to our password using .concat

// Password characters
var charactersUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var charactersLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var charactersNumeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharacters = ["!", "£", "$", "%", "^", "&", "*", "#", "~"]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// 2. In generate password function
// Create a userPassword variable and set it equal to an empty array = [ " " ]

function generatePassword() {
  // 1. Determine the length of the password
  var passwordLength = 0;

  passwordLength = prompt("Please type a number between 8 - 128");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8-128 characters long")
    return generatePassword()
  } 
  else if (isNaN(passwordLength)) {
    alert("Please enter a number")
    return generatePassword()
  }


  var passwordCharacters = charactersLowercase;
  if (confirm("Do you want to include Uppercase?")) {
    passwordCharacters = passwordCharacters.concat(charactersUppercase)
  } 
  if (confirm("Do you want to include Numbers?")) {
    passwordCharacters = passwordCharacters.concat(charactersNumeric)
  }
  if (confirm("Do you want to include Symbols?")) {
    passwordCharacters = passwordCharacters.concat(specialCharacters)
  }
  return passwordCharacters
}






// 4. Determine the characters of the password
// 4.a if confirm(include uppercase?) { userPassword = concat .Lowercase }
// Repeat above if statements with all conditions
// 4.b - if password length = 0, alert the user to select a condition

// 5. Generating the password 
// Userpassword = an empty array
// use a for loop 
// Return a user password

// 6. Write password the the screen.