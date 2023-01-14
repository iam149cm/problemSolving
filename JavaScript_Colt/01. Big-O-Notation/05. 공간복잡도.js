// Space Complexity : 메모리를 얼마나 차지하는가 ??
// 입력이 아닌 알고리즘 그 자체가 차지하는 메모리.

// 1. boolean, numbers, undefined, null 은 똑같은 공간을 차지한다.
// 2. String require O(n) space (where n is the string length)
// 3. same aps reference types (array, object)

function sum(arr) {
    let total = 0; // total 과 for 문 안의 i 에 할당되는 2개의 공간복잡도가 있다. 👉 O(1)
    for (let i = 0 ; i < arr.length; i++) {
        total += arr[i]; // 그냥 숫자를 더해주는것이므로 해당 없음 
    }
    return total;
}


function douple(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]); // 입력값에 따라 새 배열에 push 되는 길이가 달라진다 👉 O(n)
    }
    return newArr;
}