const myDetail = {
    name: "MD. NAFIUL ISLAM",
    age: 20,
    isRich: false,
    interests: ["coding", "cricket", "music"],
    height:"5ft. 10inch",
    weight: 73,
};

// console.log(myDetail);

// Converting this object to JSON. JSON is string 
const myDetailJSON = JSON.stringify(myDetail)
// console.log(myDetailJSON, typeof myDetailJSON);

// Converting back to object
const myDetailObj = JSON.parse(myDetailJSON);
console.log(myDetailObj, typeof myDetailObj);