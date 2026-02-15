function wordFrequency(sentence){

    let words = sentence.split(" "); //Converting to array

    let wordscount = {};
    
    for(let word of words){
        let wordLowerCase = word.toLowerCase()
        if(wordscount.hasOwnProperty(wordLowerCase)){
            wordscount[wordLowerCase]++;
        }
        else{
            wordscount[wordLowerCase] =1;
        }
    }
    
    
    return sentence;
}

let output = wordFrequency("I love jd and I love coding and JS is fun");
console.log(output);