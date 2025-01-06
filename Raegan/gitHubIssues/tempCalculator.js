function celsiusToFarenheit() {
    let celsiusTemp = prompt("Please enter the temperature in Celsius", "");
    let farenheitTemp = Number((celsiusTemp * 9 / 5) + 32);
    document.getElementById("convertedTemp").innerHTML = `${celsiusTemp}°C is ${farenheitTemp}°F`;
}