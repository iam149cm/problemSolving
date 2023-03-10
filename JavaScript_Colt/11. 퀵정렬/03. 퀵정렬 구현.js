/** ๐ ํต์ ๋ ฌ
 * - ์๋ฐ์ดํธ๋ ํผ๋ฒ ์ธ๋ฑ์ค๋ฅผ ํฌํผ๊ฐ ๋ฐํํ๋ฉด ํผ๋ฒ ํฌํผ๋ฅผ ์ฌ๊ท์ ์ผ๋ก ์ผ์ชฝ, ์ค๋ฅธ์ชฝ์ ํธ์ถํ๋ค.
 * - ์๋ก์ด ๋ฐฐ์ด์ ๋ง๋ค์ง ์๋๋ค.
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
     
    // ์ฌ๊ทํธ์ถ ์กฐ๊ฑด
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