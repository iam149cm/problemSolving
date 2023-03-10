/** π νΌλ³΄λμΉ μμ΄ 
 * Fib(n) = Fib(n-1) + Fib(n-2)
 * Fib(2) = 1
 * Fib(1) = 1
 */

function fib(n) {
    if ( n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log('π fib - ' , fib(30));

/** π Big-O ?
 * - μ«μκ° μ»€μ§μλ‘ νΈλ¦¬κ° μ»€μ§λ€. μ¬κ· νΈμΆλ‘ μΈν΄ call Stack μ΄ μμΈλ€.
 * - O(2βΏ) .... REALLY BAD!
 * 
 * Q. What's the problem?
 * - we're repeating calculate same things! λ°λ³΅λλ κ²μ λν΄ μ°λ¦¬κ° μ΄λ―Έ κ³μ°μ νλ€λ μ¬μ€μ μ μ₯νμ§ μλλ€.
 * 
 * π What if we can remember old things?
 * - Using past knowledge to make solving a future problem easier.
 */