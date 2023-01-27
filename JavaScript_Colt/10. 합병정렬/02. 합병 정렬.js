
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    // console.log(results);
    return results;
}

// 단일 배열을 취한다
function mergeSort(arr) {

    if (arr.length <= 1) return arr;
    
    // 더 작은 배열로 분할
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    // 병합
    return merge(left,right);
}


console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));