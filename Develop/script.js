var userSelectedChar = [];
var userPassword = "";

///user input mock data
var useLowerCase = false;
var useUpperCase = true;
var useNUmbers = true;
var useSpecChar = false;
var passwordLength = 55;

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
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * userSelectedChoices.length);
    userPassword += userSelectedChoices.substring(
      randomNumber,
      randomNumber + 1
    );
  }

  console.log(userPassword);
}

function userGeneratedchoices() {
  useLowerCase ? addUserGenChoices(lowerCase) : false;
  useUpperCase ? addUserGenChoices(upperCase) : false;
  useNUmbers ? addUserGenChoices(num) : false;
  useSpecChar ? addUserGenChoices(specChar) : false;

  console.log(userSelectedChar);
}

function addUserGenChoices(stringofChoices) {
  userSelectedChar = userSelectedChar.concat(stringofChoices);
}

function writePassword() {
  userGeneratedchoices();
  generatePassword(userSelectedChar);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
