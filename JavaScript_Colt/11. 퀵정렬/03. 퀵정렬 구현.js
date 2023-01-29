/** 🌟 퀵정렬
 * - 업데이트된 피벗 인덱스를 헬퍼가 반환하면 피벗 헬퍼를 재귀적으로 왼쪽, 오른쪽에 호출한다.
 * - 새로운 배열을 만들지 않는다.
 * 
 */

// ES 2016 version
function pivot(arr, start=0, end=arr.length-1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    
    var pivot = arr[start];
    var swapIdx = start 

    for (var i = start + 1; i < arr.length; i++) { 
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
        
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}


function quickSort(arr, left=0, right=arr.length-1) {
     
    // 재귀호출 조건
    if(left < right) {

        let pivotIdx = pivot(arr, left, right); // 3

        // left
        quickSort(arr, left,pivotIdx-1);
    
        // right
        quickSort(arr, pivotIdx+1, right);
    
    }
    return arr;

}

console.log(quickSort([4,6,9,1,-1,100,2,5,3,23]));