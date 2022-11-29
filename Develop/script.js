// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables to hold user input
var chosenLength;
var pwLength;

function promptLength() {
  chosenLength = prompt("Enter a # between 8 and 128");
  pwLength = Math.floor(Number(chosenLength));
  if (pwLength < 8 || pwLength > 128 || !pwLength) {
    alert("Must be a # between 8-128");
    promptLength();
  } else {
    confirm("Your PW will be " + pwLength + " characters long");
  }
}

// Variable Choices
var upperCase = [ABCDEFGHIJKLMNOPQRSTUVWXYZ];
var lowerCase = [abcdefghijklmnopqrstuvwxyz];
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specChar = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+"];


// Function for Uppercase
function upperCaseInput(){
   upperCaseInput = 
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
