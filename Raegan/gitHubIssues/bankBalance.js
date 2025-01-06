let currentBalance = 100.00;

document.getElementById("initialBalance").innerHTML = `Your initial balance is ${currentBalance}`;

function enterDepositAmount() {
    let depositAmount = prompt("How much is your deposit?", "");
    let newBalance = +currentBalance + +depositAmount;
    document.getElementById("initialBalance").innerHTML = `Your initial balance is ${newBalance}`;
    currentBalance = newBalance;
}


