// hash("pink", 9); // 0 에서 8 사이의 숫자를 도렬줘야 한다.  - 그래야 배열 내의 유효한 위치에 저장을 할 수 있다.

/** 🌟Hash 함수
 * - key 와 배열의 길이를 인자로 받는다.
 * - key (string) 의 글자마다 루프를 돌린다. 
 * - 각 캐릭터 코드값을 total 에 더한 다음 모듈로 연산 (%) 을 한다. 👉 인덱스는 배열 길이보다 작아야 하므로
 * - 모듈로 연산으로 구해진 나머지 값이 배열의 인덱스가 된다. 
 * 
 */
console.log("a".charCodeAt(0)); // utf 8 code. 이 스트링에 있는 0번째 요소를 출력해라
console.log("hi".charCodeAt(0));  // h에 해당하는 숫자가 나온다
console.log("a".charCodeAt(0)-96);  // 96을 빼면 알파벳의 순서대로 나온다 ... a=1, b=2 ...

function hash(key, arrayLen) {
    let total = 0;
    for (let char of key) {
        // map "a" to 1, "b" to 2, "c" to 3, etc
        let value = char.charCodeAt(0) - 96;
        total = ( total + value ) % arrayLen;
    }
    return total;
}

let pink = hash("pink", 10);
let purple = hash("purple", 10);
let cyan = hash("cyan", 10);


console.log("👉 pink - ", pink);
console.log("👉 purple - ", purple);
console.log("👉 cyan - ", cyan);

/** Problem of this function
 * 
 * 1. Only hashes strings
 * 2. Not constant time - linear in key length ... 입력값의 크기에 따라 처리 시간이 늘어날 수 있다.
 * 3. Could be a little more random
 * 
 */