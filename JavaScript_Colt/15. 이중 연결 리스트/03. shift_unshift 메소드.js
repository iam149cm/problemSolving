/** 🌟 Shift - Removing a node from the beginning of the Doubly linked list
 *  🌟 Unshift - Adding a node to the beginning of the Doubly linked list
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
        if(this.head === null || this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else { 
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;  
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head || !this.tail) return undefined;
        var poppedNode = this.tail; 
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev; 
            this.tail.next = null; 
            poppedNode.prev = null;  
        }
        this.length--;
        return poppedNode;
    }

    shift(){
        if (!this.head || this.length === 0) return undefined;
        var oldHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode; // 연결 1
            newNode.next = this.head; // 연결 2
            this.head = newNode; // 새로운 값을 head 로 업데이트
        }
        this.length++;
        return this;
    }
}

var list = new DoublyLinkedList();
list.push("Harry");
list.push("Ron");
list.push("hermione");

console.log(list.unshift("Dobby"));
console.log(list);