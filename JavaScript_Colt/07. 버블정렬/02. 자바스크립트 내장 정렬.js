// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

/** π Java Script has the sort() funtion
 * 
 * - The built-in sort method accepts an optional compartor funtion π μ νμ  λΉκ΅ν¨μλ₯Ό μΈμλ‘ μ λ¬λ°λλ€.
 * - You can use this comparator function to tell JavaScript how you want it to sort π μνλ μ λ ¬ λ°©μμ μλ¦°λ€.
 * - The comparator looks at paris of elements (a and b), determines there sort order based on the return value.
 *  -- If it returns a negative number, a should come before b. (vice versa)
 *  -- If it returns 0, a and b are the same as far as the sort is concerned
 */

// π μ«μλ₯Ό μ€λ¦μ°¨μμΌλ‘ μ λ ¬νκ³  μΆλ€λ©΄
function numberCompare (num1, num2) {
    return num1 - num2; // μμλ₯Ό λ°ννλ©΄ num1μ΄ num2μμ μ¨λ€.
}

// console.log([6, 4, 15, 10].sort(numberCompare));

// π string κΈΈμ΄μ μ€λ¦μ°¨μμΌλ‘ μ λ ¬νκ³  μΆλ€λ©΄
function compareByLen(str1, str2) {
    return str1.length - str2.length;
}

const result = ["Steele", "Colt" , "Data Structures" , "Algorithms" ].sort(compareByLen);
console.log(result);

