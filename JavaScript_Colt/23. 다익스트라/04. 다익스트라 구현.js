
class PriorityQueue{ 
    constructor() {
        this.values = [];
    }
    enqueue (val, priority) {
        this.values.push({val, priority});
        this.sort();
    };
    dequeue() {
        return this.values.shift();
    };

    sort(){
        this.values.sort((a,b) => a.priority - b.priority);
    }
}

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


// console.log('👉 graph - ', graph.adjacencyList); // 간선의 순서대로 나온다.
console.log('👉 graph - ', graph.Dijkstra("A", "E")); // 순서대로 노드를 가지고 있는 배열

