// 최솟값 알고리즘 : 주어진 범위, 주어진 조건의 가장 작은 값.
// Q. 주어진 데이터 중에서 가장 작은 짝수 값 구하기

// iife
(function() {
    // [0] initialize
    var min  = Number.MAX_SAFE_INTEGER; // 정수 객체 중 가장 큰 값

    // [1] input
    var numbers = [ 2, 5, 3, 7, 1, -2, -4, -3 ];
    var N = numbers.length; // 슈도코드 

    // [2] process
    for (let i = 0; i < N; i++) {
        if (numbers[i] < min && numbers[i] % 2 == 0) { // 조건
            min = numbers[i]; // 더 작은 값으로 재할당
        }
    }

    // [3] output
    console.log("min : " , min)


})();