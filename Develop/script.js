var generateBtn = document.querySelector("#generate");
var userSelectedChar = [];
var userPassword = "";

// Replaced front end values from user input
var useLowerCase;
var useUpperCase;
var useNUmbers;
var useSpecChar;
var passwordLength;

// Variable Choices
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specChar = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+"];

function generatePassword(userSelectedChoices) {
  for (var i = 0; i < passwordLength; i++) {
    var arrayLength = userSelectedChoices.length;
    var randomGenNum = Math.random();
    var randomNumber = Math.floor(randomGenNum * arrayLength);
    userPassword += userSelectedChoices[randomNumber];
  }

  return userPassword;
}

function userGeneratedchoices() {
  useLowerCase ? addUserGenChoices(lowerCase) : false;
  useUpperCase ? addUserGenChoices(upperCase) : false;
  useNUmbers ? addUserGenChoices(num) : false;
  useSpecChar ? addUserGenChoices(specChar) : false;
}

function addUserGenChoices(stringofChoices) {
  userSelectedChar = userSelectedChar.concat(stringofChoices);
}

function writePassword() {
  userGeneratedchoices();
  var userPasswordOutput = generatePassword(userSelectedChar);
  console.log(userPasswordOutput);
  var passwordTextBox = document.querySelector("#password");
  userPasswordOutput.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
