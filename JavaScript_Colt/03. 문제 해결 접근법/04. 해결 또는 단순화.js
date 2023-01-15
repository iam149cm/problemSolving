// Solve / Simplify  👉 다른 모든 것에 집중하기 위해 시간이 많이 걸리는 부분을 무시하라

/** 🌟 Simplyfy
 * - Find the core difficulty in what you're trying to do
 * - Temporarily ignore that difficulty
 * - Write a simplified solution
 * - Then incorporate that difficulty back in
 */

// Q. write a function which takes in a string and returns counts of each character in the string.

function charCount(str) {

    // make object to return at end
    var result = {};

    // loop over string, for each character ....
    for (let i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        
        // if the char is a number/letter AND is key in object, add one to count
        if(result[char] > 0) {
            result[char]++;
        
            // if the char is a number/letter AND not in object, add it and set value 1.
        }else {
            result[char]=1;
        };
        
    }
        // if character is something else (speace, period, etc) don't do anything.

    // return object at end
    return result;
}


console.log(charCount("Hello!"));