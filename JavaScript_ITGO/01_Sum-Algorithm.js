// 합계 알고리즘 (Sum Algorithm) : 주어진 범위에 주어진 조건에 해당하는 자료들의 합계
// Q. n 명의 점수 중 80점 이상인 점수의 합계
 
// [1] Input : n명의 점수
var scores = [100, 75, 30, 74, 34, 90];
var sum = 0; // 합계가 담길 그릇
var N = scores.length; // 의사코드 (슈도코드)

// [2] Process  ------ 합계 알고리즘 영역 : 주어진 범위에 주어진 조건 (필터링)
for (let i = 0; i < N; i++) { // 주어진 범위
    if (scores[i] >= 80) { // 주어진 조건
        sum += scores[i] // sum
    }
}

// [3] Output
console.log(N + "명의 점수 중 80점 이상의 총점 : " + sum);  

// [!] 디버거를 사용하여 디버깅하기 : F9 중단점 설정 -> F5 중단점 실행 -> F11 한단계씩 실행 -> F5 마무리

// Q. do 문을 사용하여 1부터 5까지 정수의 합 구하기
var sumDo = 0;
var j = 1;                      // 초기식

do {// do while : 선행반복. 무조건 실행을 먼저 시킨다
    sumDo += j;                 // 실행문
    j++;                        // 조건식
} while ( j <= 5 );             // 조건식

console.log("합계 : " + sumDo);