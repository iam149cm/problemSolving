/** π Radix sort Helpers
 * - In order to implement radix sort, it's helpful to build a few helper functions first:
 * π 1. getDigit ( num, place ) - returns the digit in num at the given place value
 * - Math.abs : μ λκ°μ κ΅¬νλ€
 * - Math.pow : κ±°λ­μ κ³± κ°μ κ΅¬νλ€
 */

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

console.log("getDigit-", getDigit(7323, 2)); 
/** π returns : 3
 * 1. (7323 / 100 = 73.23) 
 * 2. λ΄λ¦Ό ν΄μ 73 
 * 3. 10μΌλ‘ λλ λλ¨Έμ§ 3
 */

/** π 2. digitCount(num) - returns the number of digits in num 
 * - μ μ²΄ λͺ©λ‘μμ μλ¦Ώμκ° κ°μ₯ λ§μ μλ₯Ό μμλ΄λ μλ¦Ώμ κ³μ° λ©μλ
 */

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) +1;
}

console.log("digitCount-", digitCount(423));

/** π returns : 3
 * 1. log10 : 10μ λͺ λ² μ κ³±ν΄μΌ 423μ΄ λλκ°? - 2.626..
 * 2. floor : 2
 * 3. 1μ λν΄μ 3μ΄ λλ€.
 */

/** π 3. MostDigits 
 * - Give an array of numbers, returns the number of digits in the largest numbers in the ist
 * - μ λͺ©λ‘ κ°μ Έμμ κ°μ₯ μλ¦Ώμκ° λ§μ μκ° λ¬΄μμΈμ§ μλ¦Ώμ κ³μ°μ ν΅ν΄ μλ €μ€λ€
 * 
*/

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits;
}


console.log("mostDigits-", mostDigits([23, 567, 89, 12343242, 90 ]));