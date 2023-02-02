/** 🌟 Stack ? .. is just a concept. 
 * - 데이터의 모음. 후입선출 원칙을 따르는 데이터 형식. Last in First Out
 * - 가장 나중에 추가된 것이 먼저 제거된다. .... 라는 규칙을 가지고 있는 데이터 형식의 개념이다. 
 * - 예시 : 재귀에서 본 call stack, 포토샵 undo/redo , 브라우저 뒤로가기 ...
 */

var stack = [];  
stack.push("google");
stack.push("instagram");
stack.push("youtube");

console.log("👉 pop 1", stack.pop()); // 뒤에서부터 제거 해 주는 메소드
console.log("👉 pop 2", stack.pop(), ' 👉 ', stack.pop()); 

stack.unshift("01. create new file");
stack.unshift("02. resize file");
stack.unshift("03. cloned out wrinkle");

// unshift 로 넣었을 경우 가장 마지막에 넣은 것을 뽑아내고 싶으면 shift 를 쓰면 된다
console.log("👉 shift 1", stack.shift(), '👉' , stack.shift());

/**  👉 데이터를 추가하고 제거하는 방법이 후입선출 규칙에 맞기만 하면 된다.
* - 배열도 스택으로 사용 할 수 있다. push, pop 이나 shift, unshift 를 사용한다면.
* - push / pop VS shift / unshift 👉 array 에서는 앞쪽의 index 에 추가하는 것이 시간복잡도 상으로 좋지 않다.
*/