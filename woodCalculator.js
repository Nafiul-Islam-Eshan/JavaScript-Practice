/*
 * Chair = 3 cft
 * Table = 10 cft
 * Bed = 50 cft
 */

function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    const chairTotalWood = chairQuantity * 3;
    const tableTotalWood = tableQuantity * 10;
    const bedTotalWood = bedQuantity * 50;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}

let totalWoodNeeded = woodQuantity(2, 1, 1);
console.log("Total wood needed:", totalWoodNeeded, "cft");









