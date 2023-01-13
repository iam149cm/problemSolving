// 최빈값 알고리즘 Mode Algorithm : 점수 인덱스의 개수의 최대값
// 데이터 = 인덱스 --> count --> max --> mode

// Q. 주어진 데이터에서 가장 많이 나타난 (중복된) 값
(function() {
    // [1] input
    var scores = [ 1, 3, 4, 3, 5 ]; // 0 ~ 5 까지 들어온다고 가정. 
    var indexes = Array(6).fill(0); // 0 ~ 5 까지 점수 인덱스의 개수 저장.
    var max = Number.MIN_SAFE_INTEGER;
    var mode = 0; // 최빈값이 담길 그릇

    // [2] process : Data -> Index -> Count -> Max -> Mode 
    for (let i = 0; i < scores.length; i++) {
        indexes[scores[i]]++; // count
    }
    for (let i = 0; i < indexes.length; i++) {
        if(indexes[i] > max) {
            max = indexes[i];
            mode = i;
        }        
    }



    // [3] output
    console.log("최빈값 : " , mode , " --> " , max , " 번 나타남.");


})();