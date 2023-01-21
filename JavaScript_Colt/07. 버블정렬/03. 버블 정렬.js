/** 🌟Bubble Sort - https://visualgo.net/en/sorting?slide=1
 * - A sorting algorithm where the largest values bubble up to the top.
 * - 루프를 돌면서 각 항목을 다름 항목과 비교하는 것.
 * - 배열을 가장 작은 숫자에서 가장 큰 숫자 순으로, 오름차순으로 정렬을 한다면 더 큰 숫자가 한번에 하나씩 뒤로 이동을 한다.
 * 👉 1번의 루프 당 해당 루프에서 가장 큰 값이 끝으로 이동한다.
 * 
 */

// 🌟 Before we sort, we must swap.
// ES 5
function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
    [arr[idx1], [arr[idx2]] = [arr[idx2], arr[idx1]]];
}