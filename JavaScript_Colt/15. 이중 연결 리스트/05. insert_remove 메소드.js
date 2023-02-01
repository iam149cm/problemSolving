/** 🌟 Insert - Adding a node in a Doubly linked list by a certain position
 * - singly linked list 와 다른 점 : insert 하려는 index 에 따라 뒤에서 출발 할 수도 있다
 * 
 * 🌟 Remove - Removing a node in a doubly linked list by a certain position
 * 
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
        if (index < 0 || index >= this.length) return null;  
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

    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val); // 맨앞
        if(index === this.length) return !!this.push(val);  // 맨뒤

        var newNode = new Node(val);
        var prevNode = this.get(index-1); // 직전 값을 찾는다
        var nextNode = prevNode.next; // 다음 값

        prevNode.next = newNode, newNode.prev = prevNode; // 연결 해 준다
        newNode.next = nextNode, nextNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return false; // insert 는 맨뒤에 삽입할 수 있지만 remove는 제거할 수 없기 때문에 부등호가 다르다
        if (index === 0) return !!this.shift();
        if (index === this.length-1) return !!this.pop();

        var removedNode = this.get(index);
        var prevNode = removedNode.prev;
        var nextNode = removedNode.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        // removedNode.prev.next = removedNode.next;
        // removedNode.next.prev = removedNode.prev;
        removedNode.prev = null, removedNode.next = null;
        this.length--;

        return removedNode;
    }
}

var list = new DoublyLinkedList();
list.push("Harry");
list.push("Ron");
list.push("hermione");

// console.log('👉 insert- ',list.insert(0, "Dobby"), list);
// console.log('👉 insert- ',list.insert(1, "Dobby"), list);

console.log('👉 remove-' , list.remove(1), list);
