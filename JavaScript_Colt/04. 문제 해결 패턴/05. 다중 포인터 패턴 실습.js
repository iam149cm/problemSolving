/** π Implement a function called countUniqueValues,
 * which accepts a sorted array, and counts the unique values in the array.
 * There can be negative numbers in the array, but it will always be sorted
 * 
 * countUniqueValues([1,1,1,1,2]) // 2
 * countUniqueValues([]) // 0
 * countUniqueValues([-2, -1, -1, 0, 1]) // 4
 */

// π κ³ μ κ° μΈκΈ° 
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
    return i + 1; // iλ μΈλ±μ€ 0λΆν° μμνλ―λ‘
}
countUniqueValues1([1,1,1,2,2,3,4,5,5,5,6,7]); // 7


// λ΄κ° μμ±ν λ΅λ³ π
function countUniqueValues2(arr) {
    const set = new Set(arr)
    return set.size;
}
 