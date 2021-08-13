// Assignment Code
var generateBtn = document.querySelector("#generate");


//Arrays
var nums = ["0","1","2","3","4","5","6","7","8","9",];

var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","q","r","s","t","u","v","x","y","z"];

var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];

var special = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","?","/","<",">","."];

//Prompt the user

function generatePassword(){
    var passLen = prompt("How many characters should the password be?");

    while(passLen <= 7 || passLen >= 129){
        alert("Error: Password length must be between 8-128 character. Please try again");
    var passLen = prompt("How many characters should the password be?");
    }


    alert(`Your password will contain ${passLen} characters`);

    var spcChar = confirm("Click OK to include special characters in your password.");

    var haveNums = confirm("Click OK to include numbers in your password");

    var smallChar = confirm("Click OK to include lower case letters in your password");

    var bigChar = confirm("Click OK to include upper case letters in your password");

    while(spcChar === false && haveNums === false && smallChar === false && bigChar === false){
        alert("Error: Please choose at least one parameter");
    
    var spcChar = confirm("Click OK to include special characters in your password.");

    var haveNums = confirm("Click OK to include numbers in your password");

    var smallChar = confirm("Click OK to include lower case letters in your password");

    var bigChar = confirm("Click OK to include upper case letters in your password");
    }

    var characters = [];

    if(spcChar){
        characters = characters.concat(special);
    }

    if(haveNums){
        characters = characters.concat(nums);
    }

    if(smallChar){
        characters = characters.concat(lower);
    }

    if(bigChar){
        characters = characters.concat(upper);
    }

    console.log(characters);

    var newPassword = "";

    for (var i = 0; i < passLen; i++){
        newPassword = newPassword + characters[Math.floor(Math.random() * characters.length)];
        console.log(newPassword);
    }

    return newPassword;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
