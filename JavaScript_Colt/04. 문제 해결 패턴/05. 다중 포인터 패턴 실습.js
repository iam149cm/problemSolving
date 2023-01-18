/** 🌟 Implement a function called countUniqueValues,
 * which accepts a sorted array, and counts the unique values in the array.
 * There can be negative numbers in the array, but it will always be sorted
 * 
 * countUniqueValues([1,1,1,1,2]) // 2
 * countUniqueValues([]) // 0
 * countUniqueValues([-2, -1, -1, 0, 1]) // 4
 */

// 🌟 고유값 세기 
function countUniqueValues1(arr) {
    if(arr.length = 0) { return 0;}
    var i = 0;
    for(var j=1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
        console.log("i-",i,', j-', j);
    }
    return i + 1; // i는 인덱스 0부터 시작하므로
}
countUniqueValues1([1,1,1,2,2,3,4,5,5,5,6,7]); // 7


// 내가 작성한 답변 😂
function countUniqueValues2(arr) {
    const set = new Set(arr)
    return set.size;
}
 