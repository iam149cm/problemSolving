/** 🌟 Binary Search 이진검색
 * - Binary search is a much faster form of search
 * - Rather than eliminating one ellement at a time, 
 * you can eliminate half of the remaining elements at a time
 * - Binary search only works on sorted arrays!
 * 
 * 🌟 기본적인 개념 : Divide and Conquer!
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



// 풀이
function binarySearch2(arr, elem) {
    var start = 0;
    var end = arr.length -1;
    var middle = Math.floor((start + end) / 2); 

    while (arr[middle] !== elem && start <= end) { // 중간값이 우리가 찾고자 하는 값과 같지 않으면 루프가 계속 작동
        
        if (elem < arr[middle]) end = middle-1;
        else start = middle+1;
        
        middle = Math.floor((start + end) / 2); 
    }
    
    return arr[middle] === elem ? middle : -1;
}


console.log(binarySearch2([2,5,6,9,13,15,28], 115));
