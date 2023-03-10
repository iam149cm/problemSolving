/** π λ¬΄λ°©ν₯ κ·Έλν  A <-----> B 
 * - μ μ κ³Ό κ°μ μ μΆκ°νλ€.
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
console.log('π Graph - ', g);
g.addEdge("Tokyo", "Dallas")
g.addEdge("Aspen", "Dallas")
console.log('π Graph - ', g);