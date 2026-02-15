
function getMax(numbers){
    let max = numbers[0];
    for (const number of numbers) {
        if(number > max){
            max = number;
        }
    }
    return max;
}

numbers = [45,34,67,89,6,23,100,56];
let max = getMax(numbers);
console.log(max);

