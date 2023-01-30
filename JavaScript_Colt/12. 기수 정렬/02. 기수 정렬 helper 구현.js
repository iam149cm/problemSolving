/** 🌟 Radix sort Helpers
 * - In order to implement radix sort, it's helpful to build a few helper functions first:
 * 🌟 1. getDigit ( num, place ) - returns the digit in num at the given place value
 * - Math.abs : 절대값을 구한다
 * - Math.pow : 거듭제곱 값을 구한다
 */

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

console.log("getDigit-", getDigit(7323, 2)); 
/** 👉 returns : 3
 * 1. (7323 / 100 = 73.23) 
 * 2. 내림 해서 73 
 * 3. 10으로 나눈 나머지 3
 */

/** 🌟 2. digitCount(num) - returns the number of digits in num 
 * - 전체 목록에서 자릿수가 가장 많은 수를 알아내는 자릿수 계산 메서드
 */

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) +1;
}

console.log("digitCount-", digitCount(423));

/** 👉 returns : 3
 * 1. log10 : 10을 몇 번 제곱해야 423이 되는가? - 2.626..
 * 2. floor : 2
 * 3. 1을 더해서 3이 된다.
 */

/** 🌟 3. MostDigits 
 * - Give an array of numbers, returns the number of digits in the largest numbers in the ist
 * - 수 목록 가져와서 가장 자릿수가 많은 수가 무엇인지 자릿수 계산을 통해 알려준다
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