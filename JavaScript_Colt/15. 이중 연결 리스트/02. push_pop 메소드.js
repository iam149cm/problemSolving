/** 🌟 Push - Adding a node to the end of the Doubly linked list
 *  🌟 Pop - Removing a node from the end of the Doubly linked list
 */

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

    push(val) {
        var newNode = new Node(val);
        if(this.head === null || this.length === 0) { // 리스트가 비었을 때
            this.head = newNode;
            this.tail = newNode;
        } else { // 리스트에 값이 있는 경우 - 각 노드를 이어준다. 
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;  // 새로 추가된 값이 tail 이 되도록 설정한다.
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head || !this.tail) return undefined; // 리스트가 비어 있는지 확인
        var poppedNode = this.tail; // pop될 요소
        if(this.length === 1) { // pop 이후 값이 하나밖에 없으면
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev; 
            this.tail.next = null; // 리스트 - tail 과의 연결을 끊어준다
            poppedNode.prev = null;  // pop된 값과 노드 리스트의 연결도 끊어준다
        }
        this.length--;
        return poppedNode;
    }

}

var list = new DoublyLinkedList();
list.push(99);
list.push(100);
list.push(101);
list.push(102);

console.log('👉 pop - ',list.pop(), ' 👉 ',list.pop());