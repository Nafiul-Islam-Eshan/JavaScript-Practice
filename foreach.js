// Printing all elements in an array
const numbers = [1,3,4,2,5,13,4];
numbers.forEach(element => {
    // console.log(element)
});

// Printing square of each number
numbers.forEach(element => {
    // console.log (`${element} ^ 2 = ${element * element}`);
});


// Printing array elements with their index
const fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.forEach((element, index) => {
    // console.log(`${index}. ${element}`)
});


// Increasing every users age by 1
const users =[
    {name: "Sara", age: 20},
    {name: "Ali", age: 22},
    {name: "Khan", age: 25},
    {name: "John", age: 18},
];

users.forEach(user => {
    user.age++;
    // console.log(user);
});

// Finding sum of numbers arr
console.log(numbers);
let sum = 0;
numbers.forEach(number => {
    sum = sum + number;
});
console.log(sum);
