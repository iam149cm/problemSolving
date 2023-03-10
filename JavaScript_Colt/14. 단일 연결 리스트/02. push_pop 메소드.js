// piece of data - val
// reference to next node - next

class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

// π λΆνμν λ°λ³΅μμ
// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");
// console.log(first);

class SinglyLinkedList{ //interface
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);

        if(!this.head) { // empty list λΌλ©΄ push ν κ°μ΄ head μ tail μ΄ λλ€
            this.head = newNode;
            this.tail = this.head;
        } else { // κ°μ΄ νλλΌλ λ€μ΄μ€λ©΄ μλ‘μ΄ κ°μ tail λ‘ μ§μ  ν΄ μ€λ€
            this.tail.next = newNode; 
            this.tail = newNode;
        }
        this.length ++;
        return this; // linked list λ₯Ό λ°ννλ€
    }
    
    pop(){
        if (!this.head) return undefined; // λ¦¬μ€νΈκ° λΉμ΄μλ κ²½μ°
        var current = this.head;
        var newTail = current;
        while (current.next) { // λ€μλΈλκ° μμ λ κΉμ§
            newTail = current; // pop νμ μλ‘μ΄ tail
            current = current.next; // pop λ  κ°
        }
        console.log('current-', current.val);
        console.log('newTail-', newTail.val);
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {  // λ¦¬μ€νΈκ° λΉμμ κ²½μ° 
            this.head = null;
            this.tail = null;}
        return current
    }
}

var list = new SinglyLinkedList();
list.push("1. Hello");
list.push("2. how are you?");
list.push("3. Fine, Thank you !! and you ?");
// list.push("Me too!");
// list.push("Goodbye ~!");

console.log(list);


console.log('pop λ κ° π ', list.pop(), ' / once more - ', list.pop() , list);


