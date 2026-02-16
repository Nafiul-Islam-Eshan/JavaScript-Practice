
const products = [
    {name: "laptop",    price: 32000},
    {name: "phone",     price: 7000},
    {name: "watch",     price: 3000},
    {name: "tablet",    price: 15000},
    {name: "headphone", price: 3000},
]

function getTotalCost(products){
    let sum = 0;
    for (const product of products) {
        sum += product.price
        
    }
    return sum;
}

totalCost = getTotalCost(products)
console.log("Total Cost:", totalCost);