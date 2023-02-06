/** Problem of this Hashing function
 * 
 * 1. Only hashes strings
 * 2. Not constant time - linear in key length ... 입력값의 크기에 따라 처리 시간이 늘어날 수 있다
 * 👉 루프에 min 100 을 추가해서 맨 앞 글자 100개에 대해서만 루프를 돌게 한다. 
 * 
 * 3. Could be a little more random
 * 👉
 * 
 * 함수는 대부분 소수를 이용한다. 
 * - 이유 : 충돌이 줄어든다. 최대한 같은 그릇에 데이터가 들어가지 않게 할 수 있다.
 * 데이터를 저장하는 배열의 길이가 소수일 경우 (ex 13, 31) 충돌이 일어날 확률이 적다.
 * 
 */


function hash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31; // 소수

    for (let i = 0; i < Math.min(key.length, 100); i++ ) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = ( total * WEIRD_PRIME + value ) % arrayLen; 
    }
    return total;
}

let pink = hash("pink", 13);
let purple = hash("purple", 13);
let cyan = hash("cyan", 13);


console.log("👉 pink - ", pink);
console.log("👉 purple - ", purple);
console.log("👉 cyan - ", cyan);