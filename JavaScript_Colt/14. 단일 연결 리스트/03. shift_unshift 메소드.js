/** 🌟 Shift - 연결 리스트의 앞에서 노드를 제거한다.
 * - 현재 헤드가 가리키고 있는 노드를 제거한 후 헤드가 가리키고 있는 리스트의 두 번째 노드로 헤드를 가리키도록 한다
 * - 헤드가 이전에 가리키고 있던 노드를 반환한다
 * 
 * 🌟 unshift - add a new node to the beginning of the linked list
 * - 새로운 노드를 리스트 맨 앞에에 추가한다.
 * - 추가된 리스트를 반환한다
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
        if (!this.head) return undefined; // 리스트가 비어있는 경우
        var current = this.head;
        var newTail = current;
        while (current.next) { // 다음노드가 있을 때 까지
            newTail = current; // pop 후의 새로운 tail
            current = current.next; // pop 될 값
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {  // 리스트가 비었을 경우 
            this.head = null;
            this.tail = null;}
        return current
    }

    shift() {
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) {  // 리스트가 비었을 경우 
            this.head = null;
            this.tail = null;}
        return currentHead; // old head;
    }
    
    unshift(val) {
        var newNode = new Node(val);
        if(!this.head) { // 초기에 아무 값도 리스트에 없는 경우
            this.head = newNode;
            this.tail = this.head;
        } else { // 리스트에 값이 있는 경우
            newNode.next = this.head; // node 간 connection 을 맺어준다
            this.head = newNode; // head 를 이동 해 준다
        }
        this.length++;
        return this; // list 를 리턴한다
    }
}

var list = new SinglyLinkedList();
list.push("1. Hello");
list.push("2. how are you?");
list.push("3. Fine, Thank you !! and you ?");

console.log('🚀 SHIFT - ', list.shift());


console.log('🚀 UNSHIFT - ', list.unshift("0. Unshift!"));