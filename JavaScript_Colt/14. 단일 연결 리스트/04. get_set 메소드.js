/** 🌟 Get - 인덱스 혹은 위치를 의미하는 숫자를 인자로 받아서 주어진 위치에 있는 노드를 반환.
 * - 주어진 숫자만큼 리스트를 따라간 후 해당 위치의 노드를 반환한다.
 * - linked list 는 인덱스가 없기 때문에 처음부터 인덱스 숫자만큼 따라가야 한다.
 * - 위치를 기준으로 무엇인가 접근해야 한다면 array 가 더 유리하다.
 * 
 * 🌟 Set - 인덱스와 값을 받아서 업데이트한다
 * - Changing the value of a node based on it's position in the Linked list
 * - 원하는 노드를 찾기 위해 get function 을 사용하면 된다.
 * 
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
    
    get(index) {
        if(index < 0 || index >= this.length) return null; // 인덱스 유효성 검사
        var counter = 0;
        var current = this.head; // 마지막에 반환될 값
        while (counter != index ) { 
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode) { // 찾는 node 가 있을 경우
            foundNode.val = val; // 새로운 값으로 업데이트
            return true;
        } 
        return false;
    }

}

var list = new SinglyLinkedList();
list.push("1. Hello");
list.push("2. how are you?");
list.push("3. Fine, Thank you !! and you ?");
list.push("<3 <3");
list.push(" ; ) ");

console.log('👉 GET - ',list.get(3), list.get(4), list.get(-1));
console.log('👉 SET - ', list.set(3, '💖') , list.get(3).val);
console.log('👉 SET - ', list.set(4, '🥳') , list.get(4).val);

console.log(list.tail);