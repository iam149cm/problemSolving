// Rank 알고리즘  : 점수 데이터에 대한 순위 구하기
// Q. 주어진 데이터의 순위를 구하는 로직
(function() {
    // [1] input
    var scores = [ 90, 87, 100, 95, 80 ];
    var N = scores.length;
    var rankings = Array(N).fill(1); // [1, 1, 1, 1, 1] 등수는 모두 1등으로 초기화
    
    // [2] process : RANK 구하기
    for (let i = 0; i < N; i++) {
        rankings[i] = 1; // 순위배열을 매 회전마다 1 등으로 초기화 후 i 번째와 비교.

        for (let j = 0; j < N; j++) {
           if(scores[i] < scores[j]) { // 현재 (i) 와 나머지들 (j) 비교 -- > 나(i) 보다 큰게 나오면 1씩 증가
                rankings[i]++;
           } 
            
        }
        
    }


    // [3] output
    for (let i = 0; i < N; i++) {
        console.log(scores[i].toString().padStart(3) , " 점 : " , rankings[i], " 등" )
        
    }


})();