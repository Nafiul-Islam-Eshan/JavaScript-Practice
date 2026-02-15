
function getMin(numbers){
    let min = numbers[0];
    for (const number of numbers) {
        if(number < min){
            min = number;
        }
    }
    return min;
}

let prices = [16000, 12000, 18000, 9000, 15000,100500];
let minPrice = getMin(prices);
console.log("Minimum price:", minPrice, "Taka");