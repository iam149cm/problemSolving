/** π Divide and Conquer
 * This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
 * This pattern can trenendously decrease time complexity. 
 * 
 * - μ£Όλ‘ λ°°μ΄μ΄λ λ¬Έμμ΄ κ°μ ν° κ·λͺ¨μ λ°μ΄ν°μμ μ²λ¦¬νλ€ (μ°κ²°λ¦¬μ€νΈ, νΈλ¦¬)
 * - κ°μ μ°ΎκΈ° μν΄ λ°°μ΄ μΌ--> μ€ μ΄λλ³΄λ€λ μμ μ‘°κ°μΌλ‘ μΈλΆνμ¬ κ° μ‘°κ°λ€μ μ΄λλ‘ μ΄λνλμ§ κ²°μ 
 * - μ¦, ν° λ°μ΄ν°λ₯Ό μμ λ°μ΄ν°λ‘ λλλ κ²
 * 
 * π ex) Given a sorted array of integers, write a function called search, 
 * that accepts a value and returns the index where the value passed to the function is located.
 * If the value is not found, return -1.
 * 
 * search([1,2,3,4,5,6] ,4) // 3
 * search([1,2,3,4,5,6] ,6) // 5
 * search([1,2,3,4,5,6] ,11) // -1
 * 
 */


// π Naive solution (Linear Search) μ ν νμ Time Complexity O(N)
function search1 (arr, val) {
    for (let i=0; i < arr.length; i++) {
        if (arr[i] === val) {
            return 1;
        }
    }
    return -1;
}


// π Binary Search - Time Complexity O(logN) 
function search2 (array, val) {

    let min = 0;
    let max = array.length -1;

    while (min <= max) {
        let middle = Math.floor((min+max) / 2);
        let currentElement = array[middle];

        if (array[middle] < val) {
            min = middle + 1;
        }
        else if (array[middle] > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }

    return -1;
}