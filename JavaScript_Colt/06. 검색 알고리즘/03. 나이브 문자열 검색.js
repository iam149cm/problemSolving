/** π Naive String Search
 * */

function naiveSearch(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            console.log(short[j], long[i+j]);

            if(short [j] !== long[i+j]) { // shortμ λ€μ κΈμκ° long μ λ€μ κΈμμ μΌμΉνμ§ μμΌλ©΄
                console.log("break!")
                break; // loop μμ λκ°λ€
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