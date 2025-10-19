 function checkArmstrong() {
  const prompt = require("Enter a number")(); 
  let num = parseInt(prompt("Enter a number: "));

  let remainder = 0;
  let result = 0;
  let originalNumber = num;

  while (num > 0) {
    remainder = num % 10;
    result += Math.pow(remainder, 3); 
    num = Math.floor(num / 10); 
  }

  if (result === originalNumber) { 
    console.log(originalNumber + " is an Armstrong number.");
  } else {
    console.log(originalNumber + " is not an Armstrong number.");
  }
}




function Armstrong(num) {
  if (num < 0) {
    return false;
  }
  if (num >= 0 && num <= 9) {
    return true;
  }

  let number = num;
  let sum = 0;
  let numbers = String(num).length; 


  while (number > 0) {
    let digit = number % 10;
    sum += Math.pow(digit, numbers);
    number = Math.floor(number / 10);
  }

   return sum === num; 
}

