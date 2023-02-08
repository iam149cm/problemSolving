/**  🌟 DFS 순회 - 재귀적 용법
 * 1. 시작하는 정점 하나를 입력한다  (ex - A )
 * 2. base case : 정점이 비었을 때. --> 끝내고 나온다. null 등을 리턴한다
 * 3. 그외 - 정점을 result 리스트에 추가 해 준다.
 * 4. ✨ 방문한 정점을 mark 한다. ex - "A" : true
 * 5. A 의 모든 인접점에 대해 해당 인접점을 방문하지 않았다면 재귀방식으로 DFS 를 해당 인접점에 대해 호출
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

    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList; // A : ["B", "C"] 의 하위리스트

        (function dfs(vertex) {  // 👉 helper function
            if(!vertex)return null; // vertex 가 없으면 null 을 리턴
            visited[vertex] = true; 
            result.push(vertex);

            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) { // 방문하지 않았다면 재귀호출
                    return dfs(neighbor)
                }
            })

        })(start); // ---> 함수를 정의하고 바로 호출하는방법
        return result;
    }
}

var g = new Graph();
g.addVertex("A");       //     A
g.addVertex("B");       //   /   ＼
g.addVertex("C");       //  B      C 
g.addVertex("D");       //  |      |
g.addVertex("E");       //  D------E
g.addVertex("F");       //  ＼    /
g.addEdge("A", "B");    //     F
g.addEdge("A", "C");
g.addEdge("B", "E");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log('👉 depthFirstRecursive - ', g.depthFirstRecursive("A"));