/** π Doubly linked list
 * - almost identical to Singly Linked Lists except there is an additional pointer to previous nodes
 * - Better than Singly Linked lists for finding nodes and can be done in half the time.
 * - However, they do take up more memory considering the extra pointer.
 * 
 * | 12 | --next--> | 9 | --next--> | 5 | --next--> | 14 |
 * |    | <--prev-- |   | <--prev-- |   | <--prev-- |    |
 * - pop μ νκ³  μΆλ€λ©΄, singly list μ κ²½μ°  head -> tail κΉμ§ κ°μΌ νμ§λ§ (μ λ°©ν₯)
 * doubly linked list λ νμΌλ‘ λ°λ‘ κ°μ μ§μ μ μμλ₯Ό μ°Ύμ μ μλ€. (μ­λ°©ν₯)
 * 
 * π Big-O
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
console.log('π first-',first);

first.next.prev = first; // 2κ°μ λΈλλ₯Ό μ°κ²° ν΄ μ€λ€.

console.log("π next - ", first.next);
console.log("π prev - ", first.next.prev);