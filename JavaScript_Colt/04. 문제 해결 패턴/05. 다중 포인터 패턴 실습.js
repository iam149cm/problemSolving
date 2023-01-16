/** 🌟 Implement a function called countUniqueValues,
 * which accepts a sorted array, and counts the unique values in the array.
 * There can be negative numbers in the array, but it will always be sorted
 * 
 * countUniqueValues([1,1,1,1,2]) // 2
 * countUniqueValues([]) // 0
 * countUniqueValues([-2, -1, -1, 0, 1]) // 4
 */
function countUniqueValues1(arr) {
    var i = 0;
    for(var j=1; j < arr.length; j++) {
        // arr[i] =


    }

}


// 내가 작성한 답변 😂
function countUniqueValues2(arr) {
    const set = new Set(arr)
    return set.size;
}
 