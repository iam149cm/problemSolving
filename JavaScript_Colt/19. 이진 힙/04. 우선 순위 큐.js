/** 🌟 Priority Que  우선순위 큐
 * - A data structure where each element has a priority.
 * - Elements with higher priorities are served before elements with lower priorities.
 * 
 * - 각 요소가 우선순위를 가지고 있고 우선순위가 높은 요소가 먼저 처리된다.
 * - 예시 : 병원 응급실 - 총을 맞고 병원에 온 사람은 목이 칼칼한 사람보다는 먼저 진료를 받게 된다.
 * - 유닉스 ps command 에서의 process id 옆에 있는 nice 가 우선순위의 역할을 한다.
 * 
 * - 우선순위 큐는 힙과는 별개의 추상적인 개념이다.
 * - 그러나 우선순위 큐를 구현할 때 힙을 사용하기 때문에 연관짓는 경우가 많다.
 * 
 */

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority; // 우선순위에 기반하여 비교해야 한다
        this.insertTime = Date.now(); // 우선순위가 같은 경우 먼저 들어온 것을 처리
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }
 
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length-1; // 새로 삽입된 요소 (마지막 인덱스);
        const element = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx-1) / 2); // 부모의 인덱스
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority ) break; // element의 우선순위가 parent 보다 크면 루프를 깬다

            this.values[parentIdx] = element; // swap
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue() {
        const min = this.values[0]; // root element = 최대값
        const end = this.values.pop(); // 맨 뒤의 값
        
        if (this.values.length > 0 ) { // 배열이 비어있지 않을 때만
            this.values[0] = end; // 자리 바꿈
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0]; // 아래로 옮겨야 하는 값

        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild; // 만약 자식노드가 없는 경우 에러가 발생하므로 선언만 해둔다
            let swap = null; // 자리바꾸기를 하는 자리를 추적한다

            if(leftChildIdx < length) { // 인덱스가 길이보다 크거나 같다면 범위를 벗어난 것
                leftChild = this.values[leftChildIdx]; // 유효성 검사에 통과하면 값을 부여한다
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild.priority < element.priority)     
                || (swap !== null && rightChild.priority < leftChild.priority )){ // 오른쪽 자식과 왼쪽 자식의 크기 비교

                    swap = rightChildIdx;
                }
            }

            if (swap === null) break; // 자리 바꾸기가 없는 상황이 루프를 깨는 조건이다

            this.values[idx] = this.values[swap]; // 자리 바꾸기
            this.values[swap] = element;
            idx = swap;
        }
    }
}


let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);

// 넣은 순서에 상관없이 우선순위가 높은 (숫자가 적은) 순으로 출력한다. 최소 이진 힙
console.log('👉 dequeue - ', [ER.dequeue(), ER.dequeue(), ER.dequeue(), ER.dequeue(), ER.dequeue()]);