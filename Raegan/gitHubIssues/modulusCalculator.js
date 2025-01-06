function calculateRemainder() {
    let firstNumber = prompt("Please enter the first number", "");
    let secondNumber = prompt("Please enter the second number", "");
    let remainder = firstNumber % secondNumber;
    document.getElementById("firstNumber").innerHTML = `First Number: ${firstNumber}`;
    document.getElementById("secondNumber").innerHTML = `Second Number: ${secondNumber}`;
    document.getElementById("remainder").innerHTML = `Remainder: ${remainder}`;
    /* I noticed the remainder only calculates correctly when the first number is larger than the second.
       Assuming there is a different way to handle fractions?? */
}