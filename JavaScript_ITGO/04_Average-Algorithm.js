// 평균 알고리즘 Average algorithm : 주어진 범위 , 주어진 조건에 해당하는 자료들의 평균

// Q. n명의 점수 중에서 80점 이상, 95점 이하인 점수의 평균
(function () {
    // [1] input : n명의 성적
    let data = [ 90, 65, 78, 50, 95 ];
    let sum = 0; // 합계를 담는 그릇
    let count = 0; // 갯수를 담는 그릇
    let N = data.length; // 의사코드 (슈도코드)
    
    // [2] process 

    for (let i = 0; i < N; i++) { // 주어진 범위
        if (data[i] >= 80 && data[i] <= 95) { // 주어진 조건
            sum += data[i]
            count++;
        }
    }

    let avg = 0.0;
    if (sum != 0 && count != 0 ) { // 예외처리
        avg = sum / count;
    }
    
    
    // [3] output
    console.log("80점 이상 95점 이하인 점수의 평균 : " , avg , " / 자릿수 변경 : " , avg.toFixed(2));




})();