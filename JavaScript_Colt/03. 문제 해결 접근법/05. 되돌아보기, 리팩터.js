/** π Look back & refactor
 *  Q. Refactoring Questions
 * 1. Can you check the result?
 * 2. Can you derive the result differently?
 * 3. Can you understand it at a glance?
 * 4. Can you use the result or method for some other problem?
 * 5. Can you improve the performance of your solution?
 * 6. Can you think of other ways to refactor?
 * 7. How have outher people solved this problem?
 * 
 */

function charCount1(str) {
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();

        if(/[a-z0-9]/.test(char)) { // μμ«μμΈκ° μ¬λΆλ₯Ό κ²μ¬
            if (obj[char] > 0) {
                obj[char] ++;
            } else {
                obj[char]=1;
            }
        }
    }
    return obj;
}

// λ¦¬ν©ν λ§
function charCount2(str) {
    var obj = {};
    for (var char of str) {
        char = char.toLowerCase();

        if(/[a-z|γ±-γ|κ°-ν£]/.test(char)) {  
            obj[char] = ++obj[char] || 1; // κ°μ΄ μ΄λ―Έ μμΌλ©΄ 1μ λνκ³  μμΌλ©΄ 0λ‘ μ€μ 
        }
    }
    return obj;
}

console.log(charCount2("Hello World! 123 μλ!"))

/** π RECAP
 * 1. Understand the problem
 * 2. Explore Concrete Examples
 * 3. Break it down π μ½λλ₯Ό μμ±νκΈ° μ μ λ°©ν₯μ νμ€ν μ ν΄μΌ νλ€. λ¬΄μμ  μ½λλ₯Ό μμ±νλ κ±΄ μ’μ§ μλ€.
 * 4. Solve / Simplify
 * 5. Look Back and Refactor
 */