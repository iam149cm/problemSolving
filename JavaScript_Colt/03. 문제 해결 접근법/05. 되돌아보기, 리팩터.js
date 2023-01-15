/** 🌟 Look back & refactor
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

        if(/[a-z0-9]/.test(char)) { // 영숫자인가 여부를 검사
            if (obj[char] > 0) {
                obj[char] ++;
            } else {
                obj[char]=1;
            }
        }
    }
    return obj;
}

// 리팩토링
function charCount2(str) {
    var obj = {};
    for (var char of str) {
        char = char.toLowerCase();

        if(/[a-z|ㄱ-ㅎ|가-힣]/.test(char)) {  
            obj[char] = ++obj[char] || 1; // 값이 이미 있으면 1을 더하고 없으면 0로 설정
        }
    }
    return obj;
}

console.log(charCount2("Hello World! 123 안녕!"))

/** 🌟 RECAP
 * 1. Understand the problem
 * 2. Explore Concrete Examples
 * 3. Break it down 👉 코드를 작성하기 전에 방향을 확실히 정해야 한다. 무작정 코드를 작성하는 건 좋지 않다.
 * 4. Solve / Simplify
 * 5. Look Back and Refactor
 */