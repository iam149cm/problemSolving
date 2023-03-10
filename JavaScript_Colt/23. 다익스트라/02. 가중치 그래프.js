/** π Weighted graph .. κ°μ μ κ°μ λΆμ¬νκΈ° μν κ°μ€μΉ κ·Έλν
 * { "A" :  [ { node : "B", weight : 10 }, .. ],
 *   "B" : .. λμΌ
 * }
 */

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


console.log('π graph - ', graph.adjacencyList); // κ°μ μ μμλλ‘ λμ¨λ€.
