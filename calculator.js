
function add(num1, num2){
    return num1 + num2;
}

function subtruct(num1, num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide (num1, num2){
    return num1 / num2;
}

function calculation (num1, num2, operationName){
    if (operationName === "add"){
        return add(num1, num2);
    }
    else if ( operationName === "subtruct"){
        return subtruct(num1, num2);
    }
    else if ( operationName === "multiply"){
        return multiply (num1, num2);
    }
    else if ( operationName === "divide"){
        return divide (num1, num2)
    }
    else{
        return "operation name not recognized"
    }

}

console.log("Cacualtion between 10 and 5:");
console.log("-----------------------------");

const sum = calculation(10, 5, "add");
console.log("Sum:", sum);
const difference = calculation(10, 5, "subtruct");
console.log("Difference:", difference);
const product = calculation(10, 5, "multiply"); 
console.log("Product:", product);
const quotient = calculation(10, 5, "divide");
console.log("Quotient:", quotient);
