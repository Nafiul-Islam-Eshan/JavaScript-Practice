 
function countAnElement(arr, element) {
    let count = 0;
    for(let item of arr){
        if(item === element){
            count++;
        }
    }
    return count;
}

let array =[1, 2, 3, 4, 5, 1, 2, 1];
let find = 1;
let result = countAnElement(array, find);
console.log(`The element ${find} appears ${result} times in the array ${array}.`); // Output: The element 1 appears 3 times in the array [1,2,3,4,5,1,2,1].
