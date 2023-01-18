/** 🌟 Sliding Window
 * This pattern involves creating a window which can either be an array or number from one position to another.
 * Depending on a certain condition, the window either increases or close (and a new window is created).
 * Very useful for keeping track of a subset of data in an array/string etc.
 * 
 * ex) hellothere 의 가장 고유한 string 배열은? --> lother
 * 
 * 🌟 Q. Write a function called maxSubarraySum which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
 * maxSubarraySum([1,2,5,2,8,1,5] , 2) // 10  --> 연속한 2개의 숫자를 더해서 가장 큰 수가 나오는 것 (2,8)
 * maxSubarraySum([1,2,5,2,8,1,5] , 4) // 17  --> 연속한 4개의 숫자를 더해서 가장 큰 수가 나오는 것 (2,5,2,8)
 * 
 * 1. 창문을 하나 만든다. 단일 변수, 하위 변수, 다른 문자열
 * 2. 조건에 따라 창문을 이동시키며 시작 위치에서 시작하면 보통 왼--->오 이동
 * 3. 보통 요소의 시작위치에서 끝나는 위치로 이동
 * 4. 새 창문을 만들기도 한다.
 */

// 🌟 A Naive solution ---- Time Complexity - O(N²)
// Q. 엄청 긴 array , 정수 20 이 인자로 들어온다면 ...?
function maxSubarraySum1(arr, num) {
    if (num > arr.length) {
        return null;
    }
    var max = -Infinity; // 배열이 모두 음수라면 가장 큰 수는 음수이다
                         // 양수만으로 작업하는게 아닌 이상 0으로 시작하는 것은 도움이 안됨
    for (let i = 0; i < arr.length - num + 1 ; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i+j]; // 세가지 숫자를 더한다
        }
        if (temp > max) {
            max = temp;
        }
        console.log("temp-", temp, ", max-",max)
    }
    return max;
}

// maxSubarraySum1([2,6,9,2,1,8,5,6,3] , 3);


// 🌟 Sliding Window approach ---> Time Complexity - O(N)
// 처음 num 개 만큼 합계를 구한 다음 돌아가며 앞의 값을 빼고 뒤의 값을 더한다.
function maxSubarraySum2(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];  // 첫 세개 값의 합을 구한다
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) { // 시작값은 합하지 않은 인덱스부터
        tempSum = tempSum - arr[i - num] + arr[i]; // 앞의 값을 빼고 뒤의 값을 더한다
        maxSum = Math.max(maxSum, tempSum); // 둘 중 큰 값을 취한다
        console.log("tempSum-", tempSum, ", maxSum-",maxSum)
    }

    return maxSum;
}

maxSubarraySum2([2,6,9,2,1,8,5,6,3] , 3);