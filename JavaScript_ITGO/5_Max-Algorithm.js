// Q. 주어진 데이터 중 가장 큰 값을 구해 보자

(function() {
    // [0] initialize : 초기화 영역
    var max = Number.MIN_SAFE_INTEGER;  // 숫자 형식의 데이터 중 가장 작은 값으로 초기화  

    // [1] input  : 주어진 범위, 주어진 조건의 가장 큰 조건 
    var numbers  = [ -2 , -5, -3, -7, -1 , 1, 5, 10 ]; 
    var N = numbers.length // 슈도코드

    // [2] process : max
    for (let i = 0; i < N; i++) {
        if(numbers[i] > max) { // 더 큰 데이터가 있다면
            max = numbers[i] // 더 큰 값으로 재할당 시켜준다
        }
    }


    // [3] output
    console.log("최대값 : "  , max);

})();
