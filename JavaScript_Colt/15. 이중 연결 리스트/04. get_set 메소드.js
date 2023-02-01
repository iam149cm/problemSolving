/** 🌟 get - Accessing a node in a Doubly linked list by its position
 *  - Doubly linked list 이므로 head 뿐 아니라 tail 에서 접근도 가능하다.
 * 
 * 🌟 set - Replacing the value of a node to the in a Doubly linked list
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
            this.head.prev = newNode;  
            newNode.next = this.head; 
            this.head = newNode;  
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null; // 인덱스가 음수이거나 배열의 길이를 벗어날 경우

        var count, current;

        if (index <= this.length/2) {
            console.log("✨ Working from start")
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            console.log("✨ Working from end");
            count = this.length -1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set (index, val) {
        var foundNode = this.get(index);
        if(foundNode != null) {
            foundNode.val = val;
            return true;
        }else {
            return false;
        }
    }
}

var list = new DoublyLinkedList();
list.push(100);
list.push(200);
list.push(300);
list.push(400);
list.push(500);
list.push(600);
list.push(700);


// console.log('👉 get - ', list.get(1), list.get(5)); 
console.log('👉 set - ', list.set(0, "Harry"), list.set(1, "Ron"));
console.log(list);
