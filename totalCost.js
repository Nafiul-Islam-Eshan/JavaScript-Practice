
const products = [
    {name: "laptop",    price: 32000,   quantity: 1},
    {name: "phone",     price: 15000,   quantity: 1},
    {name: "watch",     price: 250,     quantity: 3},
    {name: "tablet",    price: 15000,   quantity: 1},
    {name: "headphone", price: 2000,    quantity: 2},
]

function getTotalCost(products){
    let sum = 0;
    for (const product of products) {
        sum += product.price * product.quantity;
        
    }
    return sum;
}

totalCost = getTotalCost(products)
console.log("Total Cost:", totalCost);