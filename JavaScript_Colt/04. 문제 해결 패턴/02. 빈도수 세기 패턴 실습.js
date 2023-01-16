/** 🌟 Q. Anagrams
 * Given two strins, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another,
 * such as cinema, formed from iceman.
 */


function isAnagram (str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let str1Lower = str1.toLowerCase();
    let str2Lower = str2.toLowerCase();

    let str1Count = {};
    let str2Count = {};

    for (let val of str1Lower) {
        str1Count[val] =  (str1Count[val] || 0) +1;
    }
    for (let val of str2Lower) {
        str2Count[val] =  (str2Count[val] || 0) +1;
    }

    for (let key in str1Count) {
        if (!(key in str2Count)) {
            return false
        }
        if (str2Count[key] !== str1Count[key]) {
            return false;
        }
    }
    return true;
}

 
console.log(isAnagram('helloWorld', 'worldHello'));