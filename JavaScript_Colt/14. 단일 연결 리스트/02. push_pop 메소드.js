// piece of data - val
// reference to next node - next

class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

// 👉 불필요한 반복작업
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

        if(!this.head) { // empty list 라면 push 한 값이 head 와 tail 이 된다
            this.head = newNode;
            this.tail = this.head;
        } else { // 값이 하나라도 들어오면 새로운 값을 tail 로 지정 해 준다
            this.tail.next = newNode; 
            this.tail = newNode;
        }
        this.length ++;
        return this; // linked list 를 반환한다
    }
    
    pop(){
        if (!this.head) return undefined; // 리스트가 비어있는 경우
        var current = this.head;
        var newTail = current;
        while (current.next) { // 다음노드가 있을 때 까지
            newTail = current; // pop 후의 새로운 tail
            current = current.next; // pop 될 값
        }
        console.log('current-', current.val);
        console.log('newTail-', newTail.val);
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {  // 리스트가 비었을 경우 
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


console.log('pop 된 값 👉 ', list.pop(), ' / once more - ', list.pop() , list);


