// Arithmetic Sequence 등차수열 : 연속하는 두 수의 차이가 일정한 수열

// [Q] 1 부터 20까지의 정수 중 홀수의 합을 구하기

// [1] input
var sum = 0;

// [2] process
var sequence = "";
for (let i = 1; i <= 20; i++) { // 주어진 범위
    if ( i % 2 != 0 )  { // 주어진 조건 : 필터링 (홀수)
        sum += i;
        sequence += i + " "
    }
    
}

// [3] output
console.log(sequence); // sequence --> arithmetic sequence
console.log("1부터 20까지 홀수의 합 : " , sum);
