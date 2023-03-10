/** π Binary Search μ΄μ§κ²μ
 * - Binary search is a much faster form of search
 * - Rather than eliminating one ellement at a time, 
 * you can eliminate half of the remaining elements at a time
 * - Binary search only works on sorted arrays!
 * 
 * π κΈ°λ³Έμ μΈ κ°λ : Divide and Conquer!
 * 
 * π μ΄μ§κ²μ Big O
 * - Best Case : O(1) π νλ²μ μ°Ύμ μ μλ€λ©΄
 * - Worst, Average Case : O(log N) π μ¬μ€μ O(1) κ³Ό μ±λ₯λ©΄μμ λ€λ₯Ό λ° μμ 
 */

function binarySearch1(arr, val) {
    let left = 0;
    let right = arr.length -1;

    while (left <= right) {
        let middle = Math.floor( (left+right) / 2);
        let current = arr[middle];

        if (current < val) {
            left = middle + 1;
        } else if (current > val) {
            right = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
    
}


console.log(binarySearch1([1,2,3,4,5,6,7,8,9], 8));



// νμ΄
function binarySearch2(arr, elem) {
    var start = 0;
    var end = arr.length -1;
    var middle = Math.floor((start + end) / 2); 

    while (arr[middle] !== elem && start <= end) { // μ€κ°κ°μ΄ μ°λ¦¬κ° μ°Ύκ³ μ νλ κ°κ³Ό κ°μ§ μμΌλ©΄ λ£¨νκ° κ³μ μλ
        
        if (elem < arr[middle]) end = middle-1;
        else start = middle+1;
        
        middle = Math.floor((start + end) / 2); 
    }

    return arr[middle] === elem ? middle : -1;
}


console.log(binarySearch2([2,5,6,9,13,15,28], 115));
