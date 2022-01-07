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



// 1. Create a set of arrays with user options. 
// 1.a Lowercase - Uppercase - Numbers - Special Characters 
// These arrays will be added to our password using .concat

// 2. In generate password function
// Create a userPassword variable and set it equal to an empty array = [ " " ]

// 3. Determine the length of the password 
//  Create a variable for the value of the number
// 3.a - Prompt the user for the password length
// 3.b - if password length is under 8 notify the user to re-enter
// 3.c - if the password is over 128 - notify the user to re-enter
// 3.d - else, store the input in password length

// 4. Determine the characters of the password
// 4.a if confirm(include uppercase?) { userPassword = concat .Lowercase }
// Repeat above if statements with all conditions
// 4.b - if password length = 0, alert the user to select a condition

// 5. Generating the password 
// Userpassword = an empty array
// use a for loop 
// Return a user password

// 6. Write password the the screen.