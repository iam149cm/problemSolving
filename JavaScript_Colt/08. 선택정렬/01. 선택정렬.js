/** 🌟 Selection Sort 👉 최솟값을 찾아 마지막에 맨 앞에 둔다.
 * - https://cs.slides.com/colt_steele/elementary-sorting-algorithms
 * - Similar to bobble sort, but instead of first placing large values into sorted position,
 * it places small values into sorted position.
 * 
 * 🌟 Selection Sort = O(N²)
 */

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        var lowest = i;
        for( var j = i+1; j < arr.length; j++) { // i값이 무엇이든 그 다음 값 (i+1) 과 비교해야 한다.
            // console.log(i, j); // i, j 확인

            if (arr[j] < arr[lowest])  { // 배열의 값이 가장 작은 값 lowest 임을 확인하고 j의 값과 비교한다.
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