
function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}

// Swapping using destructuring assignment
function swapDestructuring(a, b) {
    [a, b] = [b, a];
    return [a, b];
}


let swapped = swap(5, 10);
let swappedDestructuring = swapDestructuring(15, 40);
console.log(swapped); // Output: [10, 5]
console.log(swappedDestructuring); // Output: [10, 5]
