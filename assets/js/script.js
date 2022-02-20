// Assignment code here

// Pass
//var characters = [ 
//  { lower: "abcdefghijklmnopqrstuvwxyz"},
//  { upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"},
//  { number: "1234567890"},
//  { special: "!@#$%^&*()"}
//];

// var passwordOptions = {
// upper: getUpper(charUpperCase),
// lower: getLower(charLowerCase),
// number: getNumber(charNumbers),
// special:  getSpecial(charSpecial),



// Begin Password Generation
var generatePassword = function() {
  getPassword();
}

// User Questions
function getPassword() {
  var setPasswordLength = prompt("How long would you like your password to be?");
  console.log(setPasswordLength);
  var setPasswordUpper = prompt("Would you like your password to include UPPER CASE characters? Type '1' for YES or '2' for No.");
  console.log(setPasswordUpper);
  var setPasswordLower = prompt("Would you like your password to include lower case characters? Type '1' for YES or '2' for No.");
  console.log(setPasswordLower);
  var setPasswordNumber = prompt("Would you like your password to include numbers? Type '1' for YES or '2' for No.");
  console.log(setPasswordNumber);
  var setPasswordSpecial = prompt("Would you like your password to include special characters? Type '1' for YES or '2' for No.");
  console.log(setPasswordSpecial);
  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
