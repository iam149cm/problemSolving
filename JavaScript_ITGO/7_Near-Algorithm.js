// 근사값 알고리즘 : 가까운 값을 구한다. : 차잇값의 절대값의 최솟값.
// Q. 원본데이터 중 대상 데이터와 가장 가까운 값을 구하기
(function() {
    // [0] init
    var min = Number.MAX_SAFE_INTEGER; 

    // [1] input
    var numbers = [ 10, 20, 30, 27, 17 ];
    var N = numbers.length;
    var target = 25; // target 과 가까운 값을 구하자
    var near = 0; // 가까운 값

    // [2] process : NEAR
    for (let i = 0; i < N; i++) {
        var abs = Math.abs(numbers[i] - target); // 차잇값의 절대값
        if (abs < min) {
            min = abs;
            near = numbers[i]; // 차잇값의 절댓값의 최소값일때의 array 내 값
        }
    }

    // [3] output
    console.log(target,  "과 가장 가까운 값 : " , near , " 차이  : " , min);
})();