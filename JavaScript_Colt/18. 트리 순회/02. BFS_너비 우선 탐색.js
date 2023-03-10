/** ๐ BFS Breadth-first Search
 * - ๊ฐ์ ๋ ๋ฒจ์ ์๋ ๋ชจ๋  ๋ธ๋๋ค์ ๊ฑฐ์น๋ค. ์์ ๋ธ๋๋ฅผ ๋ณด๊ธฐ ์ ์ ํ์  ๋ธ๋๋ฅผ ๋จผ์  ๋ณธ๋ค. 
 *  
 * 1.       10            ์ํ ์์ :  [ 10, 6, 15, 3, 8, 20 ]
 * 2.     6   15
 * 3.   3  8     20
 * 
 */


class Node{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor () {
        this.root = null;
    }

    insert(value) {
        var newNode = new Node(value);
        if(this.root === null ) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;

            while(true) {
                if(value === current.value) return undefined; // ์ด๋ฏธ ํธ๋ฆฌ์ ์๋ ๊ฐ์ insert ํ๋ฉด 

                if (value < current.value) { // ๊ฐ์ด ์์ผ๋ฉด - ์ผ์ชฝ์ผ๋ก ๊ฐ์ผ ํ๋ค
                    if (current.left === null) { // ์๋ฌด๊ฒ๋ ์์ผ๋ฉด ๊ฑฐ๊ธฐ์ ์ฝ์
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left; // ๊ฐ์ด ์์ผ๋ฉด ํ์นธ ์ผ์ชฝ์ผ๋ก ์ด๋
                    }
                } else if (value > current.value) { // ๊ฐ์ด ํฌ๋ฉด - ์ค๋ฅธ์ชฝ์ผ๋ก ๊ฐ์ผ ํ๋ค
                    if (current.right === null) { 
                        current.right = newNode;
                        return this;
                    }else {
                        current = current.right;
                    }
                }
            }
        }
    }

    contains(value) {
        if(this.root === null) return false; // ํธ๋ฆฌ์ ์๋ฌด๊ฒ๋ ์์ผ๋ฉด false ๋ฆฌํด
        var current = this.root;
        var found = false;

        while(current && !found) { // ๋ฃจํ๋ฅผ ๋ ์์๋ ์๋๋ฐ ์์ง ๊ฐ์ ์ฐพ์ง ๋ชปํ ๊ฒฝ์ฐ
            if(value < current.value) { // ์ฐพ๋ ๊ฐ์ด ํ์ฌ ๊ฐ๋ณด๋ค ์์ผ๋ฉด ์ผ์ชฝ์ผ๋ก 
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else { // ๊ฐ์ ์ฐพ์ผ๋ฉด
               return true;
            }
        }
        return false;
    }

    // ์ด์ง ํ์ ํธ๋ฆฌ์ ์ฝ๋์์ ์ด์ด ์ด๋ค
    BFS() {
        var data = [],  // ๋งจ ๋ง์ง๋ง์ ์ถ๋ ฅ ํ  ๊ฐ
            queue = [], // ์ํ ์์  ๊ฐ
            node = this.root;

        // root ๋ฅผ queue ์ ๋ฃ๋๋ค.
        queue.push(node);
        while(queue.length) { // falsy ํ ๋๊น์ง. ์ฆ, queue ์ ๊ธธ์ด๊ฐ 0์ด ๋  ๋ ๊น์ง
            node = queue.shift(); // queue ์ ๋งจ ์์์ ์ ๊ฑฐ. ์ ์์ ์ถ์ ์งํค๊ธฐ ์ํจ
            data.push(node.value);
            if (node.left) queue.push(node.left); // node ํ์ ์ผ์ชฝ์ ๊ฐ์ด ์์ผ๋ฉด queue ์ ํด๋น ๊ฐ์ ๋ฃ์ด์ ์ํ์์ 
            if (node.right) queue.push(node.right);
        }
        return data;
    }

}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log('๐ BFS - ',tree.BFS());