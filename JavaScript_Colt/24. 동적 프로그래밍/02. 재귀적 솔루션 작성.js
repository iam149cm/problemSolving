/** 🌟 피보나치 수열 
 * Fib(n) = Fib(n-1) + Fib(n-2)
 * Fib(2) = 1
 * Fib(1) = 1
 */

function fib(n) {
    if ( n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log('👉 fib - ' , fib(30));

/** 🌟 Big-O ?
 * - 숫자가 커질수록 트리가 커진다. 재귀 호출로 인해 call Stack 이 쌓인다.
 * - O(2ⁿ) .... REALLY BAD!
 * 
 * Q. What's the problem?
 * - we're repeating calculate same things! 반복되는 것에 대해 우리가 이미 계산을 했다는 사실을 저장하지 않는다.
 * 
 * 👉 What if we can remember old things?
 * - Using past knowledge to make solving a future problem easier.
 */