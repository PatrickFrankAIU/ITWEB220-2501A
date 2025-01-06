function parseStringInput() {
    let stringInput = prompt("Please enter your full name", "");
    document.getElementById("character1").innerHTML = stringInput[0];
    document.getElementById("character2").innerHTML = stringInput[1];
    document.getElementById("character3").innerHTML = stringInput[2];
    document.getElementById("character4").innerHTML = stringInput[3];
    document.getElementById("character5").innerHTML = stringInput[4];
}