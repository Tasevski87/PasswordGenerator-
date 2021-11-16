// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var number = '1234567890'
var specialCharacers = '!@#$%^&*()_+<>?,./'


function generatePassword() {
  var password = ''

  var pwdLength = window.prompt("Between 8 adn 128 how many characters would you like your password to contain?");

  while (pwdLength < 8 || pwdLength > 128 || isNaN(pwdLength) === true) {
    alert("Your password must be a number and it must be tween 8 and 128.")
    pwdLength = window.prompt("Between 8 adn 128 how many characters would you like your password to contain?");
  }



  console.log(pwdLength);

  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
