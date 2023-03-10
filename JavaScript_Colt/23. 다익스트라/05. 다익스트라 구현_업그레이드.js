// πνμ λ ¬μμ μ¬μ©νλ μ°μ μμ νλ₯Ό μ μ©

class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) { // κ°μ€ κ·Έλν
        this.adjacencyList[vertex1].push({node : vertex2, weight });
        this.adjacencyList[vertex2].push({node : vertex1, weight });
    }

    Dijkstra ( start, finish ) {
        const nodes = new PriorityQueue(); 
        const distances = {}; // μ΅λ¨κ±°λ¦¬λ₯Ό μ μ₯νλ κ°μ²΄
        const previous = {}; // Cμ λν΄ κ°μ₯ λΉ¨λ¦¬ κ° μ μλ κ²½λ‘λ Aλ₯Ό ν΅νλ κ²μ΄λ€ μ μ λ³΄λ₯Ό μ μ₯
        const path = []; // μ΅μ’μ μΌλ‘ λ¦¬ν΄ ν  μ΅λ¨κ±°λ¦¬ λ°°μ΄

        // β¨ 1. build up initial state
        for(let vertex in this.adjacencyList) {
            if(vertex === start) {
                distances[vertex] = 0; // μμμ μμ μμμ μΌλ‘ κ°λ κ±°λ¦¬λ 0
                nodes.enqueue(vertex, 0); // PQ 
            } else {
                distances[vertex] = Infinity; // λ€λ₯Έ κ±°λ¦¬λ λ¬΄νμΌλ‘ μ€μ 
                nodes.enqueue(vertex, Infinity); 
            }
            previous[vertex] = null;  // μ΅λ¨κ±°λ¦¬ λ°©λ¬Έμ μν μ§μ  λΈλ
        }

        // β¨ 2. as long as there is something to visit
        let smallest;
        while(nodes.values.length) { // PQ μ κ°μ΄ μλ ν
            smallest = nodes.dequeue().val;
            // console.log('π distances - ', distances);
            // console.log('π previous - ', previous);
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
                    // A->E μΌ λ A->B (4) + B->E(3) = 7
                    let candidate = distances[smallest] + nextNode.weight; 
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]) { // μμμ κ΅¬ν κ°μ Eλ‘μ μ΅λ¨κ±°λ¦¬μ λΉκ΅
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
        let idx = this.values.length-1; // μλ‘ μ½μλ μμ (λ§μ§λ§ μΈλ±μ€);
        const element = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx-1) / 2); // λΆλͺ¨μ μΈλ±μ€
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority ) break; // elementμ μ°μ μμκ° parent λ³΄λ€ ν¬λ©΄ λ£¨νλ₯Ό κΉ¬λ€

            this.values[parentIdx] = element; // swap
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue() {
        const min = this.values[0]; // root element = μ΅λκ°
        const end = this.values.pop(); // λ§¨ λ€μ κ°
        
        if (this.values.length > 0 ) { // λ°°μ΄μ΄ λΉμ΄μμ§ μμ λλ§
            this.values[0] = end; // μλ¦¬ λ°κΏ
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0]; // μλλ‘ μ?κ²¨μΌ νλ κ°

        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild; // λ§μ½ μμλΈλκ° μλ κ²½μ° μλ¬κ° λ°μνλ―λ‘ μ μΈλ§ ν΄λλ€
            let swap = null; // μλ¦¬λ°κΎΈκΈ°λ₯Ό νλ μλ¦¬λ₯Ό μΆμ νλ€

            if(leftChildIdx < length) { // μΈλ±μ€κ° κΈΈμ΄λ³΄λ€ ν¬κ±°λ κ°λ€λ©΄ λ²μλ₯Ό λ²μ΄λ κ²
                leftChild = this.values[leftChildIdx]; // μ ν¨μ± κ²μ¬μ ν΅κ³Όνλ©΄ κ°μ λΆμ¬νλ€
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild.priority < element.priority)     
                || (swap !== null && rightChild.priority < leftChild.priority )){ // μ€λ₯Έμͺ½ μμκ³Ό μΌμͺ½ μμμ ν¬κΈ° λΉκ΅

                    swap = rightChildIdx;
                }
            }

            if (swap === null) break; // μλ¦¬ λ°κΎΈκΈ°κ° μλ μν©μ΄ λ£¨νλ₯Ό κΉ¨λ μ‘°κ±΄μ΄λ€

            this.values[idx] = this.values[swap]; // μλ¦¬ λ°κΎΈκΈ°
            this.values[swap] = element;
            idx = swap;
        }
    }
}


class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority; // μ°μ μμμ κΈ°λ°νμ¬ λΉκ΅ν΄μΌ νλ€
        this.insertTime = Date.now(); // μ°μ μμκ° κ°μ κ²½μ° λ¨Όμ  λ€μ΄μ¨ κ²μ μ²λ¦¬
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



console.log('π graph - ', graph.Dijkstra("A", "E")); // μμλλ‘ λΈλλ₯Ό κ°μ§κ³  μλ λ°°μ΄
