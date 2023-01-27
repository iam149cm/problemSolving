/** 🌟 Insertion Sort
 * - https://cs.slides.com/colt_steele/elementary-sorting-algorithms
 * - https://visualgo.net/en/sorting?slide=1
 * 
 * - Builds up the sort by gradually creating a larger left half which is always sorted
 * - 배열의 과반을 점차적으로 만들어 정렬을 구축하며 과반은 항상 정렬되어 있다. 
 * - 한 번에 하나를 취해서 정렬되어 있는 요소의 올바른 위치에 배치한다.
 * - [ 정, 렬 , 되 어 있 , 는 요 소 ,  정렬안된 요소  ]
 * 
 * - ✨ 기본적으로 O(N²) . 데이터가 거의 정렬되어 있으면 유리하다
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