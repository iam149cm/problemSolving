/** ๐ Insert - ๊ฐ์ ์๋ ฅํ๋ฉด ํธ๋ฆฌ๊ฐ ์ ๋นํ ์๋ฆฌ์ ๊ฐ์ ์ถ๊ฐํ๋ค.
 * - ๊ทธ ์ซ์๊ฐ ๋ฌด์์ธ์ง์ ๋ฐ๋ผ ์๋ก์ด ๋ธ๋๋ฅผ ๋ง๋ค์ด ํด๋นํ๋ ์๋ฆฌ์ ๊ทธ ๋ธ๋๋ฅผ ๋๋๋ค.
 * 
 *      10
 *   5    13
 * 2  7  11 16
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

console.log('๐ root - ',tree.root, '๐ณ tree - ', tree);
console.log('๐ insert ? ', tree.insert(10));