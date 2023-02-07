/** 🌟 무방향 그래프  A <-----> B 
 * - 정점과 간선을 추가한다.
 */

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
}

var g = new Graph();
g.addVertex("Tokyo");
g.addVertex("San Fransisco");
g.addVertex("Dallas");
g.addVertex("Aspen");
console.log('👉 Graph - ', g);
g.addEdge("Tokyo", "Dallas")
g.addEdge("Aspen", "Dallas")
console.log('👉 Graph - ', g);