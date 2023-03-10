/** π Insertion Sort
 * - https://cs.slides.com/colt_steele/elementary-sorting-algorithms
 * - https://visualgo.net/en/sorting?slide=1
 * 
 * - Builds up the sort by gradually creating a larger left half which is always sorted
 * - λ°°μ΄μ κ³Όλ°μ μ μ°¨μ μΌλ‘ λ§λ€μ΄ μ λ ¬μ κ΅¬μΆνλ©° κ³Όλ°μ ν­μ μ λ ¬λμ΄ μλ€. 
 * - ν λ²μ νλλ₯Ό μ·¨ν΄μ μ λ ¬λμ΄ μλ μμμ μ¬λ°λ₯Έ μμΉμ λ°°μΉνλ€.
 * - [ μ , λ ¬ , λ μ΄ μ , λ μ μ ,  μ λ ¬μλ μμ  ]
 * 
 * - β¨ κΈ°λ³Έμ μΌλ‘ O(NΒ²) . λ°μ΄ν°κ° κ±°μ μ λ ¬λμ΄ μμΌλ©΄ μ λ¦¬νλ€
 */

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        for (var j = i-1; j >= 0 && arr[j] > currentVal; j--) { 
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
        console.log('i-',i,'/ j-',j,' / currentVal-',currentVal,' / arr-',arr);
    }
    return arr;
}

insertionSort([2, 1, 9, 76, 0]);