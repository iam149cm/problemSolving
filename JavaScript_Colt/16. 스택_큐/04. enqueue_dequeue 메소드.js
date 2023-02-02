/** 🌟 QUEUE 클래스 구현
 * - 맨 뒤에 추가하고 맨 앞에서 제거 or 맨 앞에 추가하고 맨 뒤에서 제거
 * - 인덱스가 없어 모든 명령이 상수값 O(1) 이기 때문에 아주 커져도 된다.
 * 
 * 🌟 Big-O
 * - Insertion : O(1) / Removal : O(1)
 * - Searching : O(N) / Access : O(N)
 */

class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue{
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) { // 큐의 맨 뒤에 추가하고 사이즈를 반환한다
        var newNode = new Node(val);
        if(!this.first) { // 빈 배열일 때
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode; // last pointer 를 newNode 로 이동시킨다
        }
        return ++this.size;
    }

    dequeue() { // 큐의 맨 앞의 것을 제거하고 제거한 값을 반환한다
        if(!this.first) return null;
        var temp = this.first; // 마지막에 제거할 값

        if(this.first === this.last) { // 배열에 값이 하나밖에 없을 때
            this.last = null;
        } 
        this.first = this.first.next; // first pointer 를 그 다음 값으로 이동시킨다
        this.size--;

        return temp.value;

    }
}


var queue = new Queue();
queue.enqueue('👉FIRST');
queue.enqueue('👉SECOND');
queue.enqueue('👉THIRD');
console.log(queue);

console.log('👉 dequeue - ' , queue.dequeue(), queue.dequeue(), queue.dequeue(),queue.dequeue());
