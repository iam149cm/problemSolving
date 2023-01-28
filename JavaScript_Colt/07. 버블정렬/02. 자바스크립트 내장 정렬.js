// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

/** 🌟 Java Script has the sort() funtion
 * 
 * - The built-in sort method accepts an optional compartor funtion 👉 선택적 비교함수를 인자로 전달받는다.
 * - You can use this comparator function to tell JavaScript how you want it to sort 👉 원하는 정렬 방식을 알린다.
 * - The comparator looks at paris of elements (a and b), determines there sort order based on the return value.
 *  -- If it returns a negative number, a should come before b. (vice versa)
 *  -- If it returns 0, a and b are the same as far as the sort is concerned
 */

// 👉 숫자를 오름차순으로 정렬하고 싶다면
function numberCompare (num1, num2) {
    return num1 - num2; // 음수를 반환하면 num1이 num2앞에 온다.
}

// console.log([6, 4, 15, 10].sort(numberCompare));

// 👉 string 길이의 오름차순으로 정렬하고 싶다면
function compareByLen(str1, str2) {
    return str1.length - str2.length;
}

const result = ["Steele", "Colt" , "Data Structures" , "Algorithms" ].sort(compareByLen);
console.log(result);

