/** π Multiple Pointers
 * - Creating pointers or values that correspond to an index or position and move towards the beginning,
 * end or middle based on a certain condition.
 * 
 * Very efficient for solving problems with minimal space complexity as well.
 * 
 * π Ex) Write a function called sumZero which accepts a sorted array of integers.
 * the function should find the first pair where the sum is 0. 
 * Return an array that includes both values that sum to zero or undefined if a pair does not exist.
 * 
 * sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
 * sumZero([-2, 0, 1, 3]) // undefined
 * 
 */


// π Naive Solution --> Time Complexity - O(NΒ²) / Space Complexity - O(1)
function sumZero1(arr) {
    for (let i = 0; i < arr.length; i++) {
         for (let j = i+1 ; j < arr.length ; j++) {
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
         }
        
    }
}


// π Refactor --> Time Complexity - O(N) / Space Complecity - O(1)
// μΌμͺ½ λ ---> <--- μ€λ₯Έμͺ½ λ μ΄λνλ νμ
function sumZero2(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) { // λ κ°μ΄ μ΄λ€ μμ μ μλ‘ κ±΄λλ΄λ€λ©΄ μλν  μ μλ μμ΄ λμ΄μ λ¨μ§ μλλ€.
                           // μ¦, μκΈ° μμ μμ μκΈ° μμ μ λΉΌκΈ° μ μ μ€λ¨μν€λ κ²

        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left] , arr[right]];

        }else if (sum > 0) { // ν©μ΄ μμμ΄λ©΄
            right--; // μ€λ₯Έμͺ½ ν¬μΈν° (μΈλ±μ€) λ₯Ό μΌμͺ½μΌλ‘ ν μΉΈ μ΄λ
        }else { // ν©μ΄ μμμ΄λ©΄
            left++; // μΌμͺ½ ν¬μΈν° (μΈλ±μ€) λ₯Ό μ€λ₯Έμͺ½μΌλ‘ ν μΉΈ μ΄λ
        }
    }
}


console.log(sumZero2([-4, -2, -1, 0, 2, 3, 5]))