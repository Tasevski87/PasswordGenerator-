// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var number = '1234567890';
var specialCharacers = '!@#$%^&*()_+<>?,./=+-;{|}[\]:~';

// we created a funcion 
function generatePassword() {
  var password = '';
  var allValues = '';

// we created window task that ask the user: Between 8 and 128 how many characters would you like your password to contain?
  var pwdLength = window.prompt("Between 8 and 128 how many characters would you like your password to contain?");

  //Over here we are checkin does the user entered number is in our set range or entered number < 8  or  > than 128
  while (pwdLength < 8 || pwdLength > 128 || isNaN(pwdLength) === true) {
    alert("Your password must be a number and it must be tween 8 and 128.")
    pwdLength = window.prompt("Between 8 and 128 how many characters would you like your password to contain?");
  }

  //This window ask about options with the user password: Do you want uppercase letters?, Do you want lowercase letters?, Do you want numbers?, Do you want special characters?
  var isUpperCase = window.confirm("Do you want uppercase letters?");
  var isLowerCase = window.confirm("Do you want lowercase letters?");
  var hasNumbers = window.confirm("Do you want numbers?");
  var hasSpecialCharacters = window.confirm("Do you want special characters?");
  
  // Over here we are check did the user chose at least one type of caracter  
  while (!isUpperCase && !isLowerCase && !hasNumbers && !hasSpecialCharacters) {
    alert('You must choose at least one type of character');
    isUpperCase = window.confirm("Do you want uppercase letters?");
    isLowerCase = window.confirm("Do you want lowercase letters?");
    hasNumbers = window.confirm("Do you want numbers?");
    hasSpecialCharacters = window.confirm("Do you want special characters?");
  }

  //Over here we are checking which special caracter the user  chose when the window asked 
  if (isUpperCase) {
    allValues += upperCase;
  }
  if (isLowerCase) {
    allValues += lowerCase;
  }
  if (hasNumbers) {
    allValues += number;
  }
  if(hasSpecialCharacters) {
    allValues += specialCharacers;
  }

  // We created a for loop who is randomly generating password with the caracters that we chose when the window ask
  for (var i = 0; i < pwdLength; i++) {
    password += allValues.charAt(Math.floor(Math.random() * allValues.length));
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
