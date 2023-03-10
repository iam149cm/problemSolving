/**  ๐ DFS ์ํ - ์ฌ๊ท์  ์ฉ๋ฒ
 * 1. ์์ํ๋ ์ ์  ํ๋๋ฅผ ์๋ ฅํ๋ค  (ex - A )
 * 2. base case : ์ ์ ์ด ๋น์์ ๋. --> ๋๋ด๊ณ  ๋์จ๋ค. null ๋ฑ์ ๋ฆฌํดํ๋ค
 * 3. ๊ทธ์ธ - ์ ์ ์ result ๋ฆฌ์คํธ์ ์ถ๊ฐ ํด ์ค๋ค.
 * 4. โจ ๋ฐฉ๋ฌธํ ์ ์ ์ mark ํ๋ค. ex - "A" : true
 * 5. A ์ ๋ชจ๋  ์ธ์ ์ ์ ๋ํด ํด๋น ์ธ์ ์ ์ ๋ฐฉ๋ฌธํ์ง ์์๋ค๋ฉด ์ฌ๊ท๋ฐฉ์์ผ๋ก DFS ๋ฅผ ํด๋น ์ธ์ ์ ์ ๋ํด ํธ์ถ
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
        // vertex1 ์ ๋ฆฌ์คํธ์์ vertex2 ๋ง ์ ๊ฑฐํ๋ค
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2);

        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1);
    }

    removeVertex(vertex) {
        // ๋ค๋ฅธ ์ ์ ๊ณผ ๊ฐ์ ์ด ์๋ค๋ฉด ๋ชจ๋ ์ญ์ ํด์ผ ํ๋ค
        while(this.adjacencyList[vertex].length) { // key ์ ์๋ ๋ฐฐ์ด ๊ธธ์ด๋งํผ
            const adjacentVertex = this.adjacencyList[vertex].pop(); // 1. key ์ ์ํ ๋ฆฌ์คํธ๋ฅผ pop ํ๊ณ 
            this.removeEdge(vertex, adjacentVertex); // 2. ๊ฐ vertex ์ ์๋ key๋ฅผ ์ ๊ฑฐ
        }
        delete this.adjacencyList[vertex]; // 3. key๋ฅผ ์ญ์  ํด ์ค๋ค
    }

    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList; // A : ["B", "C"] ์ ํ์๋ฆฌ์คํธ

        (function dfs(vertex) {  // ๐ helper function
            if(!vertex)return null; // vertex ๊ฐ ์์ผ๋ฉด null ์ ๋ฆฌํด
            visited[vertex] = true; 
            result.push(vertex);

            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) { // ๋ฐฉ๋ฌธํ์ง ์์๋ค๋ฉด ์ฌ๊ทํธ์ถ
                    return dfs(neighbor)
                }
            })

        })(start); // ---> ํจ์๋ฅผ ์ ์ํ๊ณ  ๋ฐ๋ก ํธ์ถํ๋๋ฐฉ๋ฒ
        return result;
    }
}

var g = new Graph();
g.addVertex("A");       //     A
g.addVertex("B");       //   /   ๏ผผ
g.addVertex("C");       //  B      C 
g.addVertex("D");       //  |      |
g.addVertex("E");       //  D------E
g.addVertex("F");       //  ๏ผผ    /
g.addEdge("A", "B");    //     F
g.addEdge("A", "C");
g.addEdge("B", "E");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log('๐ depthFirstRecursive - ', g.depthFirstRecursive("A"));