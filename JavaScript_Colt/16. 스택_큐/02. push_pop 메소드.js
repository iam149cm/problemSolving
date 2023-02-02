/* - 스택을 코딩하는 방법은 하나만 있는 것이 아니다.
* - 수만개의 데이터를 저장하는데 배열만 사용 할 이유는 없다. 커스텀 클래스를 만들어서 사용하면 된다.
*
* - linked list 와는 다르게 O(1) 이어야 한다.
* - stack 은 연결 리스트처럼 반복문으로 톺아가는 O(N) 의 시간복잡도를 가지지 않는다 
- 스택은 삽입과 제거를 우선시한다. 탐색은 .next 로 전체를 순회하게 된다. 
- Insertion : O(1) / Removal : O(1)
- Searching : O(N) / Access : O(N)
*/
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first; // current first
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop() {
        if(!this.first) return null; // 비어있는 경우
        var temp = this.first; // 마지막에 리턴해야 하는 값
        if(this.first === this.last) { // 값이 하나만 남았을 경우
            this.last = null;
        }
        this.first = this.first.next; 
        this.size--;
        return temp.value;
    }
}


var stack = new Stack();
stack.push('👉first');
stack.push('👉second');
stack.push('👉third');

console.log('👉 pop - ', stack.pop(), stack.pop(), stack.pop());
