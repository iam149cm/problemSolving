/** π Shift - μ°κ²° λ¦¬μ€νΈμ μμμ λΈλλ₯Ό μ κ±°νλ€.
 * - νμ¬ ν€λκ° κ°λ¦¬ν€κ³  μλ λΈλλ₯Ό μ κ±°ν ν ν€λκ° κ°λ¦¬ν€κ³  μλ λ¦¬μ€νΈμ λ λ²μ§Έ λΈλλ‘ ν€λλ₯Ό κ°λ¦¬ν€λλ‘ νλ€
 * - ν€λκ° μ΄μ μ κ°λ¦¬ν€κ³  μλ λΈλλ₯Ό λ°ννλ€
 * 
 * π unshift - add a new node to the beginning of the linked list
 * - μλ‘μ΄ λΈλλ₯Ό λ¦¬μ€νΈ λ§¨ μμμ μΆκ°νλ€.
 * - μΆκ°λ λ¦¬μ€νΈλ₯Ό λ°ννλ€
 */


class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList{ //interface
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else { 
            this.tail.next = newNode; 
            this.tail = newNode;
        }
        this.length ++;
        return this; 
    }

    pop(){
        if (!this.head) return undefined; // λ¦¬μ€νΈκ° λΉμ΄μλ κ²½μ°
        var current = this.head;
        var newTail = current;
        while (current.next) { // λ€μλΈλκ° μμ λ κΉμ§
            newTail = current; // pop νμ μλ‘μ΄ tail
            current = current.next; // pop λ  κ°
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {  // λ¦¬μ€νΈκ° λΉμμ κ²½μ° 
            this.head = null;
            this.tail = null;}
        return current
    }

    shift() {
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) {  // λ¦¬μ€νΈκ° λΉμμ κ²½μ° 
            this.head = null;
            this.tail = null;}
        return currentHead; // old head;
    }
    
    unshift(val) {
        var newNode = new Node(val);
        if(!this.head) { // μ΄κΈ°μ μλ¬΄ κ°λ λ¦¬μ€νΈμ μλ κ²½μ°
            this.head = newNode;
            this.tail = this.head;
        } else { // λ¦¬μ€νΈμ κ°μ΄ μλ κ²½μ°
            newNode.next = this.head; // node κ° connection μ λ§Ίμ΄μ€λ€
            this.head = newNode; // head λ₯Ό μ΄λ ν΄ μ€λ€
        }
        this.length++;
        return this; // list λ₯Ό λ¦¬ν΄νλ€
    }
}

var list = new SinglyLinkedList();
list.push("1. Hello");
list.push("2. how are you?");
list.push("3. Fine, Thank you !! and you ?");

console.log('π SHIFT - ', list.shift());


console.log('π UNSHIFT - ', list.unshift("0. Unshift!"));