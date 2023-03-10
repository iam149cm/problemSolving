/** ๐ BREATH First - Visit neighbors at current depth first!
 * - ์ฃผ์ด์ง ๋ธ๋์ ๋ชจ๋  ํ์ ๋ฅผ ๋ฐฉ๋ฌธ ํ ์๋๋ก ๋ด๋ ค๊ฐ๊ฑฐ๋ ๊ทธ ์ด์์ผ๋ก ๊ฐ๋ ๊ฒ. 
 * - ๋ชจ๋  ๊ฒ์ ์ ์ฅํ  ํ๋ฅผ ๋ง๋  ํ ๊ฑฐ๊ธฐ์ ์ฒซ๋ฒ์งธ ๋ธ๋๋ฅผ ๋ฃ๋๋ค.
 * - ํ์ ๋ฌด์์ธ๊ฐ ๋ค์ด์๋ ํ ์ฒซ๋ฒ์งธ ์์๋ฅผ ์ ๊ฑฐ ํด ์ค๋ค. ๊ทธ๋ฐ ๋ค์ ๊ทธ๊ฑธ result ์ ์ถ๊ฐ
 * - ์ธ์ ์ ์ ํ์ธ ํ ๋ฐฉ๋ฌธํ์ง ์์์ผ๋ฉด ๋ฐฉ๋ฌธํ์๋ฅผ ํ๊ณ  ํ์ push ํ ํ ๋ฐ๋ณตํ๋ค.
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

    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length){ // ์คํ์ ๋ฌด์์ด ์๋ ํ ๋ฐ๋ณต
            console.log(stack);
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) { // ๋ฐฉ๋ฌธํ์ง ์์๋ค๋ฉด
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }     
        return result;   
    }

    breadthFirst(start) {
        const queue = [start];
        const result = [];
        const visited = {}; // ๋ฐฉ๋ฌธํ ๊ณณ์ ์ถ์ 
        visited[start] = true;

        let currentVertex;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex); // ์ฒซ๋ฒ์งธ ์์๋ฅผ ๊บผ๋ด์ ๋งจ ๋ง์ง๋ง์ ๋๋ ค์ฃผ๋ ๋ฐฐ์ด์ ๋ฃ๋๋ค

            this.adjacencyList[currentVertex].forEach(neighbor => {
            // this.adjacencyList[currentVertex].slice().reverse().forEach(neighbor => { // ๊ฐ์ ์ ์ญ์์ผ๋ก ์ํํ๊ณ  ์ถ์ ๋ 
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}

var g = new Graph();
g.addVertex("A");       //     A
g.addVertex("B");       //   /   ๏ผผ
g.addVertex("C");       //  B      C 
g.addVertex("D");       //  |      |
g.addVertex("E");       //  D ---- E
g.addVertex("F");       //  ๏ผผ    /
g.addEdge("A", "B");    //     F
g.addEdge("A", "C");
g.addEdge("B", "E");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log('๐ breadthFirst - ', g.breadthFirst("A")); // ๊ฐ์ ์ ์์๋๋ก ๋์จ๋ค.
