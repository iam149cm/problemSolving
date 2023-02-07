/** 🌟 무방향 그래프  A <-----> B 
 * - 정점과 간선을 제거한다.
 * - 정점 삭제 시 해당하는 간선과 연결된 정점의 리스트에서 제거 후 정점을 삭제한다.
 * 
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

    removeEdge(vertex1, vertex2) {
        // vertex1 의 리스트에서 vertex2 만 제거한다
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2);

        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1);
    }

    removeVertex(vertex) {
        // 다른 정점과 간선이 있다면 모두 삭제해야 한다
        while(this.adjacencyList[vertex].length) { // key 에 있는 배열 길이만큼
            const adjacentVertex = this.adjacencyList[vertex].pop(); // 1. key 에 속한 리스트를 pop 하고
            this.removeEdge(vertex, adjacentVertex); // 2. 각 vertex 에 있는 key를 제거
        }
        delete this.adjacencyList[vertex]; // 3. key를 삭제 해 준다

    }
}

var g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Hong Kong");
g.addVertex("Los Angeles");
g.addVertex("Dallas");
g.addVertex("Aspen");
// console.log('👉 Graph - ', g);
g.addEdge("Tokyo", "Dallas")
g.addEdge("Tokyo", "Hong Kong");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Hong Kong", "Los Angeles");
g.addEdge("Los Angeles", "Dallas");

g.addEdge("Aspen", "Dallas")
// console.log('👉 Graph - ', g);

// g.removeEdge("Tokyo", "Dallas");
g.removeVertex("Hong Kong");
console.log('👉 Graph - ', g);
