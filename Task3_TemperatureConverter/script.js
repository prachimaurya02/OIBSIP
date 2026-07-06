function convertTemperature() {
    let temp = parseFloat(document.getElementById("temperature").value);
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    if (isNaN(temp)) {
        result.innerHTML = "Please enter a valid number.";
        return;
    }

    let converted;

    if (unit === "celsius") {
        converted = (temp * 9 / 5) + 32;
        result.innerHTML = `${temp} °C = ${converted.toFixed(2)} °F`;
    } else {
        converted = (temp - 32) * 5 / 9;
        result.innerHTML = `${temp} °F = ${converted.toFixed(2)} °C`;
    }
}