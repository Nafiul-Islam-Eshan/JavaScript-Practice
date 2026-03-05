function findVowel(sentence){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let foundVowels = [];
    for(let char of sentence.toLowerCase()){
        if(vowels.includes(char)){
            foundVowels.push(char);
        }
    }
    return {
        foundVowels,
        characters: foundVowels.length
    };
}

let sentence = "Hello World! I am a Developer. I love coding, and exploring new ideas";
let vowelsInSentence = findVowel(sentence);
console.log("Vowels in the sentence: ", vowelsInSentence);
