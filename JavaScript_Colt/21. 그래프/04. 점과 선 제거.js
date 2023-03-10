/** ๐ ๋ฌด๋ฐฉํฅ ๊ทธ๋ํ  A <-----> B 
 * - ์ ์ ๊ณผ ๊ฐ์ ์ ์ ๊ฑฐํ๋ค.
 * - ์ ์  ์ญ์  ์ ํด๋นํ๋ ๊ฐ์ ๊ณผ ์ฐ๊ฒฐ๋ ์ ์ ์ ๋ฆฌ์คํธ์์ ์ ๊ฑฐ ํ ์ ์ ์ ์ญ์ ํ๋ค.
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
}

var g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Hong Kong");
g.addVertex("Los Angeles");
g.addVertex("Dallas");
g.addVertex("Aspen");
// console.log('๐ Graph - ', g);
g.addEdge("Tokyo", "Dallas")
g.addEdge("Tokyo", "Hong Kong");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Hong Kong", "Los Angeles");
g.addEdge("Los Angeles", "Dallas");

g.addEdge("Aspen", "Dallas")
// console.log('๐ Graph - ', g);

// g.removeEdge("Tokyo", "Dallas");
g.removeVertex("Hong Kong");
console.log('๐ Graph - ', g);
