 
function celsusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsus(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

let tempInCelsius = celsusToFahrenheit(25);
console.log(25 + "°C is equal to " + tempInCelsius + "°F");
let tempInFahrenheit = fahrenheitToCelsus(77);
console.log(77 + "°F is equal to " + tempInFahrenheit + "°C");
