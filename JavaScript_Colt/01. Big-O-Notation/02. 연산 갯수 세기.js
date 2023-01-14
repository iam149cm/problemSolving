// if not time, then what ?
// Let's count the number of simple operations the computer has to perform!

// 시간은 항상 컴퓨터가 하는 연산의 갯수에 달려 있게 될 것

// Q. 그러면 무엇이 연산인가 ? 
// A. 아래 함수에서는 n 이 몇이든 상관 없이 연산이 3번 일어난다. ( *, +, /) 👉 O(1)
function addUpto2(n) {
    return n * (n + 1) / 2;
}

// A. 아래 함수에서는 + 가 루프 안에 있기 때문에  n 이 몇이냐에 따라 연산의 수가 달라진다.
// i++ 도 있기 때문에 n의 값에 따라 연산이 늘어난다.
// ... 이 함수에서는 모든 연산을 세는 것이 쉽지 않다. (상수가 아니다.) 👉 O(n)
function addUpTo1(n) {  
    let total = 0; // single assignment
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
};