/** ๐ Find - ์ด์งํธ๋ฆฌ๋ฅผ ๊ฐ์ง๊ณ  ํด๋น ๊ฐ์ด ํธ๋ฆฌ์ ์๋์ง ํ์ํ๋ค
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

}
/**        10
 *     5      13
 *   2   11      17
 *             16 
 */ 
var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(7);

// console.log('๐ root - ',tree.root, '๐ณ tree - ', tree);
console.log('๐ find 10 ? ', tree.contains(10));
console.log('๐ find 2 ? ', tree.contains(2));
console.log('๐ find 100 ? ', tree.contains(100));