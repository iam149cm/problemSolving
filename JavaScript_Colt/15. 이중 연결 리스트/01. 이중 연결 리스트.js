/** 🌟 Doubly linked list
 * - almost identical to Singly Linked Lists except there is an additional pointer to previous nodes
 * - Better than Singly Linked lists for finding nodes and can be done in half the time.
 * - However, they do take up more memory considering the extra pointer.
 * 
 * | 12 | --next--> | 9 | --next--> | 5 | --next--> | 14 |
 * |    | <--prev-- |   | <--prev-- |   | <--prev-- |    |
 * - pop 을 하고 싶다면, singly list 의 경우  head -> tail 까지 가야 하지만 (정방향)
 * doubly linked list 는 테일로 바로 가서 직전의 요소를 찾을 수 있다. (역방향)
 * 
 * 🌟 Big-O
 * - Insertion : O(1)
 * - Removal : O(1)
 * - Searching : O(N)
 * - Access : O(N) 
 * 
 * 
 */ 


// skeleton
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length=0;
    }
}

first = new Node(12);
first.next  = new Node(13);
console.log('👉 first-',first);

first.next.prev = first; // 2개의 노드를 연결 해 준다.

console.log("👉 next - ", first.next);
console.log("👉 prev - ", first.next.prev);