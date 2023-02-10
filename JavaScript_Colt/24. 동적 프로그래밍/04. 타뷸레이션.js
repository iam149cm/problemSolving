/** 🌟 Tabultation (Bottom-up 상향식)
 * - Storing the result of a previous result in a 'table' (usually an array)
 * - Usually done using iteration
 * - Better space complexity can be achieved using tabulation 
 * 
 * - 배열에 데이터를 저장하고 루프를 돌면서 앞으로 나아가면서  연산 (피보나치의 경우 덧셈) 하는 것
 * - stack overflow 문제가 생기지 않는다.
 */

function fib(n) {
    if (n <= 2) return 1;
    var fibNums = [0, 1, 1];
    for(var i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}


console.log('👉 fib - ' , fib(30));