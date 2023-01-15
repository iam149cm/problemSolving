// https://cs.slides.com/colt_steele/problem-solving-patterns


/** Q. Write a function called same, which accepts two arrays. 
 * The function should return true if every value in the array has it's corresponding value
 * squared in the second array. The frequency of values must be the same.
 * 
 * same([1,2,3], [4,1,9]) // true
 * same([1,2,3], [1,9]) // false
 * same([1,2,1], [4,4,1]) // false
 */


/** 빈도카운터의 개념  : 보통 객체를 사용한다는 것.
 * 객체를 사용하여 프로파일을 구성하는 것은 배열이나 문자열의 내용을 분석하는 방법으로
 * 보통 배열이나 문자열과 같은 선형 구조를 구성하는 것.
 * 그러면 해당 분석을 문자열이나 배열에서 생성된 다른 객체의 형태와 신속하게 비교할 수 있다.
 */ 


// 👉 1. Naive Solution : Time Complexity - O(N²)
function same1(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
       let correctIndex = arr2.indexOf(arr1[i] ** 2); // what is index of squared number of arr2?
       if (correctIndex === -1 ) { // 대응하는 값이 없다
        return false;
       }
       console.log(arr2);
       arr2.splice(correctIndex, 1); // 해당하는 값이 있으면 해당 인덱스의 값을 1개 제거한다.
    }
    return true;
}

// same1([1,3,2,2], [9,1,4,4]);


// 👉 2. Refactored : Time Complexity - O(N)
function same2(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    // 객체를 계수 할 객체
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    for (let key in frequencyCounter1) {
        if( !(key ** 2 in frequencyCounter2)) { // key 가 제대로 존재하는지 체크
            return false;
        }
        if (frequencyCounter2[key**2] !== frequencyCounter1[key]) { // value  체크
            return false;
        }
    }
    return true;

}
same2([1,3,2,2], [9,1,4,4]);
