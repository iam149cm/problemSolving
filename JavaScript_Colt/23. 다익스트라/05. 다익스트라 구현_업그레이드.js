// 🌟힙정렬에서 사용했던 우선순위 큐를 적용

class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) { // 가중 그래프
        this.adjacencyList[vertex1].push({node : vertex2, weight });
        this.adjacencyList[vertex2].push({node : vertex1, weight });
    }

    Dijkstra ( start, finish ) {
        const nodes = new PriorityQueue(); 
        const distances = {}; // 최단거리를 저장하는 객체
        const previous = {}; // C에 대해 가장 빨리 갈 수 있는 경로는 A를 통하는 것이다 의 정보를 저장
        const path = []; // 최종적으로 리턴 할 최단거리 배열

        // ✨ 1. build up initial state
        for(let vertex in this.adjacencyList) {
            if(vertex === start) {
                distances[vertex] = 0; // 시작점에서 시작점으로 가는 거리는 0
                nodes.enqueue(vertex, 0); // PQ 
            } else {
                distances[vertex] = Infinity; // 다른 거리는 무한으로 설정
                nodes.enqueue(vertex, Infinity); 
            }
            previous[vertex] = null;  // 최단거리 방문을 위한 직전 노드
        }

        // ✨ 2. as long as there is something to visit
        let smallest;
        while(nodes.values.length) { // PQ 에 값이 있는 한
            smallest = nodes.dequeue().val;
            // console.log('👉 distances - ', distances);
            // console.log('👉 previous - ', previous);
            if(smallest === finish) { // WE ARE DONE, BUILD UP PATH 
                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for(let neighbor in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neighbor]; // find neighboring node

                    // calculate distance to neighboring node
                    // A->E 일 때 A->B (4) + B->E(3) = 7
                    let candidate = distances[smallest] + nextNode.weight; 
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]) { // 위에서 구한 값을 E로의 최단거리와 비교
                        // updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        // updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        // enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }

        }
        return path.concat(smallest).reverse();
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


class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority; // 우선순위에 기반하여 비교해야 한다
        this.insertTime = Date.now(); // 우선순위가 같은 경우 먼저 들어온 것을 처리
    }
}



var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);



console.log('👉 graph - ', graph.Dijkstra("A", "E")); // 순서대로 노드를 가지고 있는 배열
