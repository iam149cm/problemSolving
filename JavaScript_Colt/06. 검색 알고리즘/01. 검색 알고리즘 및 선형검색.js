/** 🌟 검색 알고리즘
 * - ex) 특정 문자열이 있는가? 특정 사용자명이 이미 사용되고 있는가?
 * 👉 "string".indexOf() ...
 * 
 * 🌟 선형 검색 Linear Search
 * - 배열의 처음부터 끝까지 이동하면서 원하는 값이 있는지 찾는다.
 * - 자바스크립트에는 이미 내장함수가 있다 (indexOf, includes, find, findIndex)
 */

// 작성 해 보자
function linearSearch1(arr, val) {

    // 3.
    for (let i = 0; i < arr.length; i++) {   
        if (arr[i] == val) {
            return i;
        }else if (i-1 == arr.length) {
            return -1;
        }
    }
    
    // 1. ------------------
    // return arr.indexOf(val);

    // 2.
    // if(arr.includes(val)) {
    //     return arr.indexOf(val);
    // } else {
    //     return -1;
    // }

}


// console.log(linearSearch1([1,2,3,4,5], 5));




// 🌟 풀이 ------------------- 시간복잡도 : O(N)
function linearSearch2(arr , val) {

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
        
    }
    return -1;
}


console.log(linearSearch2([34, 56, 1, 2] , 23));


/** 🌟 선형검색 Big-O
 * - O(1) ::: Best Case
 * - O(N) ::: Worst / Average Case
 * 
 */