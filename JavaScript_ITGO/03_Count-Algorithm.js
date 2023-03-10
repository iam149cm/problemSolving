// 개수알고리즘 (Count Algorithm) : 주어진 범위, 주어진 조건에 해당하는 자료들의 개수

// Q. 1부터 1000까지의 정수 중 13의 배수의 개수 (건수, 횟수)

// [1] input : 1~1000 까지의 데이터
var count = 0; // 개수를 저장할 변수는 0으로 초기화

// [2] process : 개수 알고리즘
for (let i = 1; i <= 1000; i++) { // 1부터 1000까지
    if (i % 13 == 0) { // 13의 배수면
        count ++;
    }
}


// [3] output
console.log("1 ~ 1000 까지의 정수 중 13의 배수의 개수 : " , count);