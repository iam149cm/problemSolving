/** 🌟Bubble Sort - https://visualgo.net/en/sorting?slide=1
 * - A sorting algorithm where the largest values bubble up to the top.
 * - 루프를 돌면서 각 항목을 다름 항목과 비교하는 것.
 * - 배열을 가장 작은 숫자에서 가장 큰 숫자 순으로, 오름차순으로 정렬을 한다면 더 큰 숫자가 한번에 하나씩 뒤로 이동을 한다.
 * 👉 1번의 루프 당 해당 루프에서 가장 큰 값이 끝으로 이동한다.
 * 
 */

// 🌟 Before we sort, we must swap.
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
    for (let i = arr.length; i > 0; i--) { // 비교하는 횟수를 점점 줄인다.
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

/** ✨ 버블 정렬 최적화
 * - 만약에 데이터가 거의 정렬이 된 상태거나 이미 정렬이 완료되었다면 버블 정렬을 할 필요가 없다.
 * - 일반적으로 O(N²) 이나 noSwap 옵션으로 O(N) 에 가까워졌다.
 */ 

// optimized with noSwap
function bubbleSort2(arr) {
    var noSwaps;
    for (let i = arr.length; i > 0; i--) { // 비교하는 횟수를 점점 줄인다.
        noSwaps = true; 

        for (let j = 0; j < i - 1; j++) { 
            console.log(arr)
            if(arr[j] > arr[j+1]) {
                // SWAP
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false; // 교환을 하게되면 false
            }
        }
        if(noSwaps) break;  // swap 하지 않았다면 루프에서 빠져나와라 --> 반복문 실행 횟수를 줄인다
    }
    return arr;
}

bubbleSort2([8,1,2,3,4,5,6,7]);