/** ✨ Pure recursion
 * - 필요한 모든 코드가 함수 자체에 포함되어 있다.  (헬퍼 메소드 재귀와 같이) 외부 데이터 구조를 사용하지 않는다
 * 
 *  ✨ Pure recursion Tips
 * 1. For arrays, use methods like slice, the spread operator, and concat 
 * that make copies of arrays so you do not mutate them.
 * 
 * 2. Remember that string are imutables so you will need to use methods 
 * like slice, substr, or substring to make copies of strings 
 * 
 * 3. To make copies of objects use Object.assign, or the spread operator.
 */


function collectOddValues(arr) {
    let newArr = []; // 이 함수가 호출될 때 마다 텅비게 된다.

    if (arr.length === 0) {
        return newArr;
    } 
    if (arr[0] % 2 !== 0) { // 원본 배열 arr 의 맨 앞 값이 홀수일 경우
        newArr.push(arr[0]) // 새 배열 newArr 에 해당 값을 넣느는다
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1))); // 👈 slice : 배열의 1번 인덱스부터 끝까지
    // 👆 빈배열 + 계산이 왼료된 배열 (concat : 배열 2개를 합친다)


    return newArr;
}


console.log(collectOddValues([1,2,3,4,5]));