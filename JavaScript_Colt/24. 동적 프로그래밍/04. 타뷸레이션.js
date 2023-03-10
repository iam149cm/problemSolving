/** π Tabultation (Bottom-up μν₯μ)
 * - Storing the result of a previous result in a 'table' (usually an array)
 * - Usually done using iteration
 * - Better space complexity can be achieved using tabulation 
 * 
 * - λ°°μ΄μ λ°μ΄ν°λ₯Ό μ μ₯νκ³  λ£¨νλ₯Ό λλ©΄μ μμΌλ‘ λμκ°λ©΄μ  μ°μ° (νΌλ³΄λμΉμ κ²½μ° λ§μ) νλ κ²
 * - stack overflow λ¬Έμ κ° μκΈ°μ§ μλλ€.
 */

function fib(n) {
    if (n <= 2) return 1;
    var fibNums = [0, 1, 1];
    for(var i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}


console.log('π fib - ' , fib(30));