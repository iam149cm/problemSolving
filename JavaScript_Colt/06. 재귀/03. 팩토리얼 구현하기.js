// 팩토리얼 4! ==  4*3*2*1

// ✨ 비재귀적 해결방법
function factorial1 (num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}

// ✨ 재귀적 해결방법
function factorial2(num) {
    if (num === 1) return 1; // 종료조건
    return num * factorial2(num-1);
}