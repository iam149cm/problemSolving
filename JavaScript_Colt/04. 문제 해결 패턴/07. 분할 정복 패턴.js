/** 🌟 Divide and Conquer
 * This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
 * This pattern can trenendously decrease time complexity. 
 * 
 * - 주로 배열이나 문자열 같은 큰 규모의 데이터셋을 처리한다 (연결리스트, 트리)
 * - 값을 찾기 위해 배열 왼--> 오 이동보다는 작은 조각으로 세분하여 각 조각들을 어디로 이동하는지 결정
 * - 즉, 큰 데이터를 작은 데이터로 나누는 것
 * 
 * 🌟 ex) Given a sorted array of integers, write a function called search, 
 * that accepts a value and returns the index where the value passed to the function is located.
 * If the value is not found, return -1.
 * 
 * search([1,2,3,4,5,6] ,4) // 3
 * search([1,2,3,4,5,6] ,6) // 5
 * search([1,2,3,4,5,6] ,11) // -1
 * 
 */


// 🌟 Naive solution (Linear Search) 선형 탐색 Time Complexity O(N)
function search1 (arr, val) {
    for (let i=0; i < arr.length; i++) {
        if (arr[i] === val) {
            return 1;
        }
    }
    return -1;
}


// 🌟 Binary Search - Time Complexity O(logN) 
function search2 (array, val) {

    let min = 0;
    let max = array.length -1;

    while (min <= max) {
        let middle = Math.floor((min+max) / 2);
        let currentElement = array[middle];

        if (array[middle] < val) {
            min = middle + 1;
        }
        else if (array[middle] > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }

    return -1;
}