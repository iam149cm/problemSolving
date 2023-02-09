/** 🌟 Weighted graph .. 간선에 값을 부여하기 위한 가중치 그래프
 * { "A" :  [ { node : "B", weight : 10 }, .. ],
 *   "B" : .. 동일
 * }
 */

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


console.log('👉 graph - ', graph.adjacencyList); // 간선의 순서대로 나온다.
