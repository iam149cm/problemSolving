/** 🌟 Multiple Pointers
 * - Creating pointers or values that correspond to an index or position and move towards the beginning,
 * end or middle based on a certain condition.
 * 
 * Very efficient for solving problems with minimal space complexity as well.
 * 
 * 🌟 Ex) Write a function called sumZero which accepts a sorted array of integers.
 * the function should find the first pair where the sum is 0. 
 * Return an array that includes both values that sum to zero or undefined if a pair does not exist.
 * 
 * sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
 * sumZero([-2, 0, 1, 3]) // undefined
 * 
 */


// 🌟 Naive Solution --> Time Complexity - O(N²) / Space Complexity - O(1)
function sumZero1(arr) {
    for (let i = 0; i < arr.length; i++) {
         for (let j = i+1 ; j < arr.length ; j++) {
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
         }
        
    }
}


// 🌟 Refactor --> Time Complexity - O(N) / Space Complecity - O(1)
// 왼쪽 끝 ---> <--- 오른쪽 끝 이동하는 형식
function sumZero2(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) { // 두 값이 어떤 시점에 서로 건너뛴다면 시도할 수 있는 쌍이 더이상 남지 않는다.
                           // 즉, 자기 자신에서 자기 자신을 빼기 전에 중단시키는 것

        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left] , arr[right]];

        }else if (sum > 0) { // 합이 양수이면
            right--; // 오른쪽 포인터 (인덱스) 를 왼쪽으로 한 칸 이동
        }else { // 합이 음수이면
            left++; // 왼쪽 포인터 (인덱스) 를 오른쪽으로 한 칸 이동
        }
    }
}


console.log(sumZero2([-4, -2, -1, 0, 2, 3, 5]))