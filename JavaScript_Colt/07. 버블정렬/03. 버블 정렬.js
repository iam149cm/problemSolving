/** πBubble Sort - https://visualgo.net/en/sorting?slide=1
 * - A sorting algorithm where the largest values bubble up to the top.
 * - λ£¨νλ₯Ό λλ©΄μ κ° ν­λͺ©μ λ€λ¦ ν­λͺ©κ³Ό λΉκ΅νλ κ².
 * - λ°°μ΄μ κ°μ₯ μμ μ«μμμ κ°μ₯ ν° μ«μ μμΌλ‘, μ€λ¦μ°¨μμΌλ‘ μ λ ¬μ νλ€λ©΄ λ ν° μ«μκ° νλ²μ νλμ© λ€λ‘ μ΄λμ νλ€.
 * π 1λ²μ λ£¨ν λΉ ν΄λΉ λ£¨νμμ κ°μ₯ ν° κ°μ΄ λμΌλ‘ μ΄λνλ€.
 * 
 */

// π Before we sort, we must swap.
// ES 5
function swap1(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// ES2015
const swap2 = (arr, idx1, idx2) => {
    [arr[idx1], [arr[idx2]] = [arr[idx2], arr[idx1]]];
}


function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) { // λΉκ΅νλ νμλ₯Ό μ μ  μ€μΈλ€.
        for (let j = 0; j < i - 1; j++) { 
            console.log(arr)
            if(arr[j] > arr[j+1]) {
                // SWAP
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}


// bubbleSort([23, 56, 12, 8, 88, -3]);
// [23, 12, 8, 56]
// [12, 8, 23, 56]
// [8, 12, 23, 56]

/** β¨ λ²λΈ μ λ ¬ μ΅μ ν
 * - λ§μ½μ λ°μ΄ν°κ° κ±°μ μ λ ¬μ΄ λ μνκ±°λ μ΄λ―Έ μ λ ¬μ΄ μλ£λμλ€λ©΄ λ²λΈ μ λ ¬μ ν  νμκ° μλ€.
 * - μΌλ°μ μΌλ‘ O(NΒ²) μ΄λ noSwap μ΅μμΌλ‘ O(N) μ κ°κΉμμ‘λ€.
 */ 

// optimized with noSwap
function bubbleSort2(arr) {
    var noSwaps;
    for (let i = arr.length; i > 0; i--) { // λΉκ΅νλ νμλ₯Ό μ μ  μ€μΈλ€.
        noSwaps = true; 

        for (let j = 0; j < i - 1; j++) { 
            console.log(arr)
            if(arr[j] > arr[j+1]) {
                // SWAP
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false; // κ΅νμ νκ²λλ©΄ false
            }
        }
        if(noSwaps) break;  // swap νμ§ μμλ€λ©΄ λ£¨νμμ λΉ μ ΈλμλΌ --> λ°λ³΅λ¬Έ μ€ν νμλ₯Ό μ€μΈλ€
    }
    return arr;
}

bubbleSort2([8,1,2,3,4,5,6,7]);