// Sort 선택정렬 알고리즘 : 주어진 범위 내에서 불규칙적으로 나열된 순서를 일정 기준에 따라 순서대로 나열하는 알고리즘.
// 정렬 알고리즘의 종류 : Selection Sort 선택정렬, Bubble Sort 버블정렬, Quick Sort 퀵 정렬 등

// 기준 : 오름차순 Asceding / 내림차순 Descending

// 선택정렬 : 데이터 하나를 기준으로 - 나머지 데이터를 비교하여 가장 작거나 큰 데이터와 자리를 바꾸는 식으로 반복비교.
// 선택정렬은 데이터의 개수가 n개이면 전체 회전수는 n-1 회 이다.
// 선택정렬 알고리즘은 오름차순 기준으로 배열의 처음부터 가장 작은 데이터가 채워진다.

// 정렬알고리즘 : Sort Algorithm - 가장 작은 / 큰 데이터를 왼쪽으로 순서대로 이동.
// Q. 무작위 데이터를 순서대로 오름/내림차순으로 정렬.
(function() {
    // [1] input - data structure (array, list, stack, queue, tree, db ....)
    var data = [ 3, 2, 1, 5, 4 ]; // 정렬되지 않은 데이터
    var N = data.length; // 슈도코드

    // [2] process - selection sort
    for (let i = 0; i < N-1; i++) { // i=0 to N-1
        for (let j = i+1; j < N; j++) { // j=1+1 to N
            if (data[i] > data[j]) { // 부등호 방향 : 오름차순 (>) / 내림차순 (<)

                var temp = data[i];
                data[i] = data[j];
                data[j] = temp; // SWAP : 데이터의 자리를 바꿔준다 
            } 
        }
        console.log(">>>> ", (i+1) , "회전");
        for (let i = 0; i < N; i++) {
            console.log(data[i]);
        }
    }

    // [3] output 
    for (let i = 0; i < N; i++) {
        console.log(data[i]);
    }


})();



