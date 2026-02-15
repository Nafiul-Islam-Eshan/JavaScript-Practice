const friends = ["Sakib", "Sharif", "Jakariya" ];
console.log(`Array of my friends ${friends}  \n`);

// Length --- Total freinds
console.log(`Total Friends of this array ${friends.length}   \n`);

// Accessing each element through index
console.log(`1st friend of the array is ${friends[0]}`); 
console.log(`2nd friend of the array is ${friends[1]}`); 
console.log(`3rd friend of the array is ${friends[2]}      \n`); 

// Adding element to the last position

friends.push("Rahat");
friends.push("Junayed");
friends.push("Hamza", "Tanzim");
console.log(friends,  "\n");

// Remove last element
friends.pop();
friends.pop();
console.log(friends,   "\n");

// Returning and storing last element
out1 = friends.pop();
out2 = friends.pop();
console.log(out1, out2);
console.log(friends,    '\n');


// Adding new element to the first element
friends.unshift("Raisa");
console.log(friends,    '\n')

// Removing first element
friends.shift();
console.log(friends,     '\n');

// includes() --- Checks whether a element exist in an array
console.log(`Searching for sakib = ${friends.includes("Sakib")}`);
console.log(`Searching for Raisa = ${friends.includes("Raisa")}      \n`);

// indexOf ---- Returns the index for an element
console.log(`Index of Sharif = ${friends.indexOf("Sharif")}     \n`);

console.log(friends.join())












