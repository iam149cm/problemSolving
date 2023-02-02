/** 🌟 QUEUES - FIFO (First in first out) 선입선출.
 * - 예시 : 디즈니랜드에서 줄을 서 있는 것, 게임에서 누가 먼저 접속했는지, 여러 개의 파일 다운로드 시, 프린트 대기열
 * - 추후에 배우는 알고리즘에서 코드를 짧게 하기 위해 스택, 큐를 사용한다.
 * - 추가 : enqueue / 제거 : dequeue
 */

// 🌟 배열을 사용해서 큐를 만들어 보자
// QUEUE 를 array 로 구현하는 옵션 1 : push + shift
// 배열에서 제거할 때 마다 reindexing 해야 한다.
var q = [];
q.push("FIRST"); // 👉 제거 시 먼저 제거되어야 한다 
q.push("SECOND");
q.push("THIRD");

console.log('👉 Shift 4 times - ', q.shift(), q.shift(), q.shift(), q.shift());

// QUEUE 를 array 로 구현하는 옵션 2 : unshift + pop
// 배열에 추가할 때 마다 reindexing 해야 한다
q.unshift("FIRST");
q.unshift("SECOND");
q.unshift("THIRD");

console.log('👉 Pop 4 times -', q.pop(),q.pop(),q.pop(),q.pop());
