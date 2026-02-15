function analyser(marksobj){

    let total = 0;
    let highestMark = -Infinity;
    let lowestMark = Infinity;

    for(let subject in marksobj){
        let mark = marksobj[subject];
        total+= mark;
        if(mark > highestMark){
            highestMark = mark;
        }

        if(mark<lowestMark){
            lowestMark = mark;
        }
        
    }

    console.log(highestMark);
    console.log(lowestMark);

    let avg = total / Object.keys(marksobj).length;


    return {
        total,
        avg,

    }
}

analyser({Math: 90})