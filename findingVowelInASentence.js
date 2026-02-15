function findVowel(sentence){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let foundVowels = [];
    for(let char of sentence.toLowerCase()){
        if(vowels.includes(char)){
            foundVowels.push(char);
        }
    }
    return foundVowels;
}

let sentence = "Hello World!";
let vowelsInSentence = findVowel(sentence);
console.log("Vowels in the sentence: ", vowelsInSentence);
