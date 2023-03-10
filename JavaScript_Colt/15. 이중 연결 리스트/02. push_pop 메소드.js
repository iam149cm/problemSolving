/** π Push - Adding a node to the end of the Doubly linked list
 *  π Pop - Removing a node from the end of the Doubly linked list
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
        if(this.head === null || this.length === 0) { // λ¦¬μ€νΈκ° λΉμμ λ
            this.head = newNode;
            this.tail = newNode;
        } else { // λ¦¬μ€νΈμ κ°μ΄ μλ κ²½μ° - κ° λΈλλ₯Ό μ΄μ΄μ€λ€. 
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;  // μλ‘ μΆκ°λ κ°μ΄ tail μ΄ λλλ‘ μ€μ νλ€.
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head || !this.tail) return undefined; // λ¦¬μ€νΈκ° λΉμ΄ μλμ§ νμΈ
        var poppedNode = this.tail; // popλ  μμ
        if(this.length === 1) { // pop μ΄ν κ°μ΄ νλλ°μ μμΌλ©΄
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev; 
            this.tail.next = null; // λ¦¬μ€νΈ - tail κ³Όμ μ°κ²°μ λμ΄μ€λ€
            poppedNode.prev = null;  // popλ κ°κ³Ό λΈλ λ¦¬μ€νΈμ μ°κ²°λ λμ΄μ€λ€
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

console.log('π pop - ',list.pop(), ' π ',list.pop());