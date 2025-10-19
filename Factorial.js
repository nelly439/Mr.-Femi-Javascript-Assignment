const prompt = require("Enter a number")();

function calculateFactorial() {
    let number = parseInt(prompt("Enter Factorial Number: "));

    if ((number) || number < 0) {
        console.log("Please enter a non-negative integer.");
        return;
    }

    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }
    console.log(fact);
}

calculateFactorial();