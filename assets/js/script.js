// Assignment code here
var userLower = true;
var userUpper = true;
var userNumber = true;
var userSpecial = true;

// Begin Password Generation
function generatePassword() {

// 1. prompt user for password criteria
    passwordLength = parseInt(prompt("Choose a password length between 8 and 128."));
//    a. Password Length 8 < 128
    if (passwordLength < 8 || passwordLength > 128) {
      alert("This is not a valid response! Please choose between 8 - 128 characters");
      return false;
    }
//    b. lowercase, uppcase, numbers, special characters
    userLower = confirm("Would you like lowercase characters in your password?")
    userUpper = confirm("Would you like UPPER CASE characters in your password?")
    userNumber = confirm("Would you like numbers in your password?")
    userSpecial = confirm("Would you like special characters in your password?")

// 2. validate user input

    alert("Your password will contain lowercase characters: " + userLower + ", uppercase characters: " + userUpper + ", numbers: " + userNumber + ", special characters: " + userSpecial + ".")

// 3. Generate Password
var password = "";
while (password.length < passwordLength){
  if(userLower){
    password += getRandomLower()
  }
  if(userUpper){
    password += getRandomUpper()
  }
  if(userNumber){
    password += getRandomNumber()
  }
  if(userSpecial){
    password+= getRandomSpecial()
  }
}

// 4. Display password on the page
return password;

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

// Generator Functions
function getRandomUpper() {
  var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return uppers[Math.floor(Math.random() * uppers.length)];
}

function getRandomLower() {
  var lowers = "abcdefghijklmnopqrstuvwxyz";
  return lowers[Math.floor(Math.random() * lowers.length)];
}

function getRandomNumber() {
  var numbers = "1234567890";
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomSpecial () {
  var specials = "!@#$%^&*()-+{}[]<>";
  return specials[Math.floor(Math.random() * specials.length)];
}

