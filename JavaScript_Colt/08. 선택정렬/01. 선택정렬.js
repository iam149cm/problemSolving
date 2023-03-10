/** π Selection Sort π μ΅μκ°μ μ°Ύμ λ§μ§λ§μ λ§¨ μμ λλ€.
 * - https://cs.slides.com/colt_steele/elementary-sorting-algorithms
 * - Similar to bobble sort, but instead of first placing large values into sorted position,
 * it places small values into sorted position.
 * 
 * π Selection Sort = O(NΒ²)
 */

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        var lowest = i;
        for( var j = i+1; j < arr.length; j++) { // iκ°μ΄ λ¬΄μμ΄λ  κ·Έ λ€μ κ° (i+1) κ³Ό λΉκ΅ν΄μΌ νλ€.
            // console.log(i, j); // i, j νμΈ

            if (arr[j] < arr[lowest])  { // λ°°μ΄μ κ°μ΄ κ°μ₯ μμ κ° lowest μμ νμΈνκ³  jμ κ°κ³Ό λΉκ΅νλ€.
                lowest = j;
            } 
        }   
        
        if ( i !== lowest) {
            console.log("================== start ");
            console.log(arr);
            console.log("swapping to : ");

            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
            console.log(arr);
            console.log("================== end ");

        }
        
    }

    return arr;
}


selectionSort([34, 22, 10, 19, 17]);


// ES 2016 version
function selectionSort2 (arr) {

    const swap = (arr, idx1, idx2) => 
    ([arr[idx1] , arr[idx2] = arr[idx2] , arr[idx1]]);

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        if (i !== lowest) swap(arr, i, lowest);
    }
    return arr;
}