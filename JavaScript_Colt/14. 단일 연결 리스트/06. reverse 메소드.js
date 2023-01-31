/** 🌟 Reverse - 주어진 연결 리스트를 역방향으로 변형한다. 리스트를 따라가면서 순서를 계속 역으로 바꿔야 한다.
 * - [Head-13] -> [27] -> [32] -> [Tail-71]   👉  [Tail-13] <- [27] <- [32] <- [Head-71]
 * - 각 값의 .next 를 임시 값에 넣고 .next 를 새롭게 업데이트 한다
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

    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val); // !! = true (boolean 타입)를 반환한다
        if (index === 0) return !!this.unshift(val); // 👉 boolean 타입으로 반환하게 맞추기 위함

        var newNode = new Node(val); // 새 노드 생성
        var prev = this.get(index -1); // 이전 노드 검색
        var temp = prev.next; // 이전 노드-다음 노드의 연결정보를 임시 저장
        prev.next = newNode; // 이전 노드와 새 노드를 연결
        newNode.next = temp; // 새 노드와 다음 노드를 연결

        this.length++;
        return true;
    }

    remove (index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length -1) return this.pop();
        
        var prevNode = this.get(index-1); // 제거하려는 노드의 이전 노드 찾기;
        var removed = prevNode.next; // 제거하려는 노드
        prevNode.next = removed.next; // 이전 노드와 다음노드 연결
        this.length--;

        return removed;
    }

    reverse() {
        // head 와 tail 을 swap
        var node = this.head;
        this.head = this.tail;
        this.tail = node;

        var prev = null;
        var next;
        for (let i = 0; i < this.length; i++) {
             next = node.next; 
             node.next = prev;
             prev = node;
             node = next;   
        }
        return this;
    }

    // reverse 구현 시 확인용 메소드
    print() {
        var arr = [];
        var current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }


}


var list = new SinglyLinkedList();
list.push(100);
list.push(200);
list.push(300);
list.push(400);
list.push(500);

list.print();
list.reverse();
list.print();