// https://cs.slides.com/colt_steele/intermediate-sorting-algorithms
// https://visualgo.net/en/sorting?slide=1

/** ✨ bubbleSort 에서 20초 소요되는 작업이 합병정렬에서는 1초면 끝났다.
 * - There is a family of sorting algorithms that can improve time complexity from O(N²) to O(NlogN)
 * - There is a tradeoff between efficiency and simplicity
 * - The more efficient algorithms are much less simple, and generally take longer to understand.
 * 
 * 🌟 Merge Sort
 * - It's a combination of two things - merging and sorting.
 * - Exploits the fact that arrays of 0 or 1 element are always sorted.
 * - Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
 * 
 * [8, 3, 5, 4] --> [8], [3], [5] , [4] --> [3,8] , [4,5] --? [3,4,5,8]
 */

/** 🌟 합병정렬의 Big-O
 * - 시간 복잡도 : O(n log n)
 * ex) 요소가 32개인 배열인 경우 --- 32-16-8-4-2-1 까지 5번 분할 해야 한다.
 * 
 * - 공간 복잡도 : O(n)
 * - 배열이 클수록 메모리에 더 많은 할당을 해야 한다. 
 */

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
    console.log(results);
    return results;
}

merge([1, 10, 50], [2, 14, 99, 100]);

