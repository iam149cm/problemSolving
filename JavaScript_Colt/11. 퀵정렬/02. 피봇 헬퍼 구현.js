function pivot(arr, start=0, end=arr.length+1) {
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    // 첫번째 요소를 피벗으로 한다
    var pivot = arr[start];
    var swapIdx = start // 마지막에 3이 되는 값

    // 첫번째 항목에는 루프를 수행할 필요 없음
    for (var i = start + 1; i < arr.length; i++) { 
        if(pivot > arr[i]) { // 4보다 작은 값이 몇개인지 찾는다
            swapIdx++;
            swap(arr, swapIdx, i);
        }
        
    }
    swap(arr, start, swapIdx);
    return swapIdx;

}

console.log(pivot([4,8,2,1,5,7,6,3])); // should return index 3 --> [2,1,3,4,8,6,7,5]

/**
 * [4,8,2,1,5,7,6,3]
 * [4,2,8,1,5,7,6,3]
 * [4,8,2,1,5,7,6,3]
 * [4,2,1,8,5,7,6,3]
 * [4,2,1,3,5,7,6,8]
 * 
 * [3,2,1,4,5,7,6,8]
 * [4,2,1,3,5,7,6,8]
 * 
 */


