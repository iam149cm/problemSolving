// 1. 동일한 함수를 계속 호출하면서 하나의 함수가 자기 자신을 계속 호출
// 2. 종료 조건 (재귀가 멈추는 순간) 이 있어야 한다 (ex. 배열에 아무 숫자가 없을 때 멈춘다)

/**
 * 재귀함수의 두가지 기본요소
 * 
 * 1. 종료조건 = Base Case
 * 2. 다른 입력값.  Different Input
 */

function countDown (num) {
    if (num <= 0) { // 종료조건
        console.log("All done!");
        return; // ✨ 아무것도 반환하지 않더라도 return 이 있어야 한다.
    }
    console.log(num)
    num--;
    countDown(num);
}

countDown(5); // for문으로도 동일한 작업을 할 수 있다. 


function sumRange(num) {
    if(num === 1) return 1; // base case = 종료조건
    return num + sumRange(num-1); // 재귀호출
}