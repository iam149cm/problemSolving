/** π Sliding Window
 * This pattern involves creating a window which can either be an array or number from one position to another.
 * Depending on a certain condition, the window either increases or close (and a new window is created).
 * Very useful for keeping track of a subset of data in an array/string etc.
 * 
 * ex) hellothere μ κ°μ₯ κ³ μ ν string λ°°μ΄μ? --> lother
 * 
 * π Q. Write a function called maxSubarraySum which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
 * maxSubarraySum([1,2,5,2,8,1,5] , 2) // 10  --> μ°μν 2κ°μ μ«μλ₯Ό λν΄μ κ°μ₯ ν° μκ° λμ€λ κ² (2,8)
 * maxSubarraySum([1,2,5,2,8,1,5] , 4) // 17  --> μ°μν 4κ°μ μ«μλ₯Ό λν΄μ κ°μ₯ ν° μκ° λμ€λ κ² (2,5,2,8)
 * 
 * 1. μ°½λ¬Έμ νλ λ§λ λ€. λ¨μΌ λ³μ, νμ λ³μ, λ€λ₯Έ λ¬Έμμ΄
 * 2. μ‘°κ±΄μ λ°λΌ μ°½λ¬Έμ μ΄λμν€λ©° μμ μμΉμμ μμνλ©΄ λ³΄ν΅ μΌ--->μ€ μ΄λ
 * 3. λ³΄ν΅ μμμ μμμμΉμμ λλλ μμΉλ‘ μ΄λ
 * 4. μ μ°½λ¬Έμ λ§λ€κΈ°λ νλ€.
 */

// π A Naive solution ---- Time Complexity - O(NΒ²)
// Q. μμ²­ κΈ΄ array , μ μ 20 μ΄ μΈμλ‘ λ€μ΄μ¨λ€λ©΄ ...?
function maxSubarraySum1(arr, num) {
    if (num > arr.length) {
        return null;
    }
    var max = -Infinity; // λ°°μ΄μ΄ λͺ¨λ μμλΌλ©΄ κ°μ₯ ν° μλ μμμ΄λ€
                         // μμλ§μΌλ‘ μμνλκ² μλ μ΄μ 0μΌλ‘ μμνλ κ²μ λμμ΄ μλ¨
    for (let i = 0; i < arr.length - num + 1 ; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i+j]; // μΈκ°μ§ μ«μλ₯Ό λνλ€
        }
        if (temp > max) {
            max = temp;
        }
        console.log("temp-", temp, ", max-",max)
    }
    return max;
}

// maxSubarraySum1([2,6,9,2,1,8,5,6,3] , 3);


// π Sliding Window approach ---> Time Complexity - O(N)
// μ²μ num κ° λ§νΌ ν©κ³λ₯Ό κ΅¬ν λ€μ λμκ°λ©° μμ κ°μ λΉΌκ³  λ€μ κ°μ λνλ€.
function maxSubarraySum2(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];  // μ²« μΈκ° κ°μ ν©μ κ΅¬νλ€
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) { // μμκ°μ ν©νμ§ μμ μΈλ±μ€λΆν°
        tempSum = tempSum - arr[i - num] + arr[i]; // μμ κ°μ λΉΌκ³  λ€μ κ°μ λνλ€
        maxSum = Math.max(maxSum, tempSum); // λ μ€ ν° κ°μ μ·¨νλ€
        console.log("tempSum-", tempSum, ", maxSum-",maxSum)
    }

    return maxSum;
}

maxSubarraySum2([2,6,9,2,1,8,5,6,3] , 3);