/**
 * First 100 ---> 100tk
 * 101 to 200 ---> 90tk
 * above 200 ---> 70tk
 */

function layeredDiscountPrice(quantity){
    if (quantity <= 100){
        return quantity * 100;
    }
    else if (quantity <= 200){
        const first100 = 100 * 100;
        const remaining = quantity - 100;
        const remainingPrice = remaining * 90;
        return first100 + remainingPrice;
    }
    else{
        const first100 = 100 * 100;
        const second100 = 100 * 90;
        const remaining = quantity - 200;
        const remainingPrice = remaining * 70;
        return first100 + second100 + remainingPrice;
    }
}

let quantity = 250;
const totalPrice = layeredDiscountPrice(quantity);
console.log("Total Price:", totalPrice);