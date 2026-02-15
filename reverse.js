


function reverse1(){
    let friends = ["Rakib", "Jian", "Maruf","Hasan", "Sakib"];
    friends.reverse();
    console.log(friends);
}

function reverse2(){
    let friends = ["Rakib", "Jian", "Maruf","Hasan", "Sakib"];
    let reverse =[];
    for(let friend of friends){
        reverse.unshift(friend);
    }
    console.log(reverse);
}


let  friends = ["Rakib", "Jian", "Maruf","Hasan", "Sakib"];
console.log(friends);
reverse1();
reverse2();