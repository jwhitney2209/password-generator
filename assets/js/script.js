// Assignment code here

// Begin Password Generation
var generatePassword = function() {
  getPasswordLength();
  getPasswordUpper();
  getPasswordLower();
  getPasswordNumber();
  getPasswordSpecial();
}

// Generator Functions
function getRandomLower () {
  return String.fromCharCode();
}



// User Prompts
var getPasswordLength = function() {
  var setPasswordLength = prompt("Choose a password length between 8 and 128 characters.");
  // user didn't enter correct values
  if (setPasswordLength === "" || setPasswordLength === null || setPasswordLength <= 8 || setPasswordLength >= 128) {
    alert("That is an invalid response, please try again.");
    return getPasswordLength();
  } else if (setPasswordLength >= 8 || setPasswordLength <= 128); {
    alert("You have chosen a password that will be " + setPasswordLength + " characters long.");
    console.log("User's passworld will be " + setPasswordLength + " characters long.");
  }
};

var getPasswordUpper = function () {
  var setPasswordUpper = prompt("Would you like your password to include UPPER CASE characters? Type '1' for YES or '2' for No.");
  // if user selected '1'
  if (setPasswordUpper === "1") {
    alert("You have chosen to have UPPER CASE characters in your password.");
  } else if (setPasswordUpper === "2") {
    alert("You have chosen NOT to have UPPER CASE characters in your password.");
    console.log(setPasswordUpper);
  } else if (setPasswordUpper === "" || setPasswordUpper === null) {
    alert("This is an invalid response, please try again");
    return getPasswordUpper();
  }
  console.log("User's response to UPPER CASE letters ('1' = Yes, '2' = No): " + setPasswordUpper + ".");
};

var getPasswordLower = function () {
  var setPasswordLower = prompt("Would you like your password to include lower case characters? Type '1' for YES or '2' for No.");
  // if user selected '1'
  if (setPasswordLower === "1") {
    alert("You have chosen to have lower case characters in your password.");
  } else if (setPasswordLower === "2") {
    alert("You have chosen NOT to have lower case characters in your password.");
    console.log(setPasswordLower);
  } else if (setPasswordLower === "" || setPasswordLower === null) {
    alert("This is an invalid response, please try again");
    return getPasswordLower();
  }
  console.log("User's response to lower case letters ('1' = Yes, '2' = No): " + setPasswordLower + ".");
};

var getPasswordNumber = function () {
  var setPasswordNumber = prompt("Would you like your password to include numbers? Type '1' for YES or '2' for No.");
  // if user selected '1'
  if (setPasswordNumber === "1") {
    alert("You have chosen to have numbers in your password.");
  } else if (setPasswordNumber === "2") {
    alert("You have chosen NOT to have numbers in your password.");
    console.log(setPasswordNumber);
  } else if (setPasswordNumber === "" || setPasswordNumber === null) {
    alert("This is an invalid response, please try again");
    return getPasswordNumber();
  }
  console.log("User's response to having numbers ('1' = Yes, '2' = No): " + setPasswordNumber + ".");
};

var getPasswordSpecial = function () {
  var setPasswordSpecial = prompt("Would you like your password to include numbers? Type '1' for YES or '2' for No.");
  // if user selected '1'
  if (setPasswordSpecial === "1") {
    alert("You have chosen to have numbers in your password.");
  } else if (setPasswordSpecial === "2") {
    alert("You have chosen NOT to have numbers in your password.");
    console.log(setPasswordSpecial);
  } else if (setPasswordSpecial === "" || setPasswordSpecial === null) {
    alert("This is an invalid response, please try again");
    return getPasswordSpecial();
  }
  console.log("User's response to having numbers ('1' = Yes, '2' = No): " + setPasswordSpecial + ".");
};

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
