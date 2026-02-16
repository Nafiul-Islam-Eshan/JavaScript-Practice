const moblies =[
    { name: "samsung", price: 20000,  camera: "48MP", ram: "4GB" },
    { name: "Xiomi",   price: 24000,  camera: "38MP", ram: "6GB" },
    { name: "iphone",  price: 120000, camera: "70MP", ram: "8GB" },
    { name: "Walton",  price: 12000,  camera: "20MP", ram: "4GB" },
];

function getCheapest(moblies){
    let cheapest = moblies[0];
    for (const moblie of moblies) {
        if (moblie["price"] < cheapest.price){
            cheapest = moblie;
        }
    }
    return cheapest
}

let sostaMobile = getCheapest(moblies);
console.log("Cheapest mobile:", sostaMobile);