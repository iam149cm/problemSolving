/** 🌟 Memoization
 * - Storing the results of expensive function alls and returning the catched result when the same inputs occur again
 * - 배열이나 객체인 데이터를 저장할 구조를 만든 다음 시간이 오래 걸리는 함수를 시킨 후 배열에 저장.
 * - 다음에 해당 호출이 있으면 배열을 확인해서 이미 값이 있나 확인한다. 있다면 그것을 사용한다. 계산을 반복하지 않는다.
 * - 리스트가 아닌 오브젝트 등을 사용해도 된다
 * 
 * 🌟 Big-O - O(N)
 * - N이 늘어나면 N 번의 연산을 한다.
 * - N 의 피보나치는 인덱스 N 에 저장된다. 
 * - 인덱스를 사용해서 리스트에서 무언가를 찾는 것은 상수값의 시간을 가진다 - O(1)
 * 
 * 🌟 문제점
 * - fib(10000) .. 등 실행하면, stack overflow error 가 발생한다.
 * - 호출 가능한 스택 갯수 초과!
 * 
 */

function fib(n, memo=[]) {
    if(memo[n] !== undefined) return memo[n];
    if ( n <= 2) return 1;

    var res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}

// 기존 솔루션에서 0, 1, 2 인덱스에 값이 안들어가는 문제애 대한 솔루션
function fib2(n, memo=[undefined, 1, 1]) {
    if(memo[n] !== undefined) return memo[n];
    // if ( n <= 2) return 1;

    var res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}

console.log('👉 fib - ' , fib(30));