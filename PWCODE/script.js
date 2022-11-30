var generateBtn = document.querySelector("#generate");
var userSelectedChar = [];
var userPassword = "";

// Declaring user input values, globally to call anytime.
var useLowerCase;
var useUpperCase;
var useNumbers;
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

// Series of prompts, confirming criteria.
function userGeneratedchoices() {
  useLowerCase = confirm(
    "Would you like your randomly generated password to include lower case letters? Click OK to include or CANCEL to exclude."
  );
  useUpperCase = confirm(
    "Would you like your randomly generated password to include upper case letters? Click OK to include or CANCEL to exclude."
  );
  useNumbers = confirm(
    "Would you like your randomly generated password to include numbers? Click OK to include or CANCEL to exclude."
  );
  useSpecChar = confirm(
    "Would you like your randomly generated password to include special chatacter? Click OK to include or CANCEL to exclude."
  );

  // Ternary operator = like an if, else statement.
  useLowerCase ? addUserGenChoices(lowerCase) : false;
  useUpperCase ? addUserGenChoices(upperCase) : false;
  useNumbers ? addUserGenChoices(num) : false;
  useSpecChar ? addUserGenChoices(specChar) : false;
}

// Function saying to combine choices with criteria
function addUserGenChoices(stringofChoices) {
  userSelectedChar = userSelectedChar.concat(stringofChoices);
}

function getUserPasswordLength() {
  lengthInput = prompt(
    "How many characters would you like in your random password?",
    "Enter an integer between 8 and 128"
  );
  passwordLength = Math.floor(Number(lengthInput));
  if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
    alert("You must enter an integer between 8 and 128!");
    lengthPrompt();
  } else {
    confirm(
      "Your randomly generated password will be " +
        passwordLength +
        " characters long."
    );
  }
}

// function to get user length, user choices to combine and create.
// Along with textbox to display result.
function writePassword() {
  getUserPasswordLength();
  userGeneratedchoices();
  var userPasswordOutput = generatePassword(userSelectedChar);
  var passwordTextBox = document.querySelector("#password");
  passwordTextBox.value = userPasswordOutput;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
