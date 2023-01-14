/**
 * 1. Big O : https://cs.slides.com/colt_steele/big-o-notation
Imagine we have multiple implementations of the same function.
- How we can determine which one is the "best" ? 
*/

function addUpTo1(n) { // Time Elapsed : 0.13525239999964833 seconds.
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
};

 
function addUpTo2(n) { // Time Elapsed : 0.000024399999529123306 seconds.
    return n * (n+1) /2;
}

let t1 = performance.now();
addUpTo2(1000000000);
let t2 = performance.now();

console.log( `Time Elapsed : ${(t2-t1) / 1000 } seconds.` ); 


/** Q. Which one is better ?
 * - faster? 
 * - Less memory-intensive?
 * - More readable ?
 */