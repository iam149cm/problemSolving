/** 🌟 Insert - 값을 입력하면 트리가 적당한 자리에 값을 추가한다.
 * - 그 숫자가 무엇인지에 따라 새로운 노드를 만들어 해당하는 자리에 그 노드를 놓는다.
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
                if(value === current.value) return undefined; // 이미 트리에 있는 값을 insert 하면 

                if (value < current.value) { // 값이 작으면 - 왼쪽으로 가야 한다
                    if (current.left === null) { // 아무것도 없으면 거기에 삽입
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left; // 값이 있으면 한칸 왼쪽으로 이동
                    }
                } else if (value > current.value) { // 값이 크면 - 오른쪽으로 가야 한다
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

console.log('🎄 root - ',tree.root, '🌳 tree - ', tree);
console.log('🙄 insert ? ', tree.insert(10));