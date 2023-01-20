/** 🌟 Naive String Search
 * */

function naiveSearch(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            console.log(short[j], long[i+j]);

            if(short [j] !== long[i+j]) { // short의 다음 글자가 long 의 다음 글자와 일치하지 않으면
                console.log("break!")
                break; // loop 에서 나간다
            }
            if (j === short.length -1) {
                console.log("found one!");
                count++;
            }
        }
    }
    return count;
}


naiveSearch("lorie loled" , "lol");