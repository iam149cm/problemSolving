/** 🌟 Find - 이진트리를 가지고 해당 값이 트리에 있는지 탐색한다
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

    contains(value) {
        if(this.root === null) return false; // 트리에 아무것도 없으면 false 리턴
        var current = this.root;
        var found = false;

        while(current && !found) { // 루프를 돌 요소는 있는데 아직 값을 찾지 못한 경우
            if(value < current.value) { // 찾는 값이 현재 값보다 작으면 왼쪽으로 
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else { // 값을 찾으면
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

// console.log('🎄 root - ',tree.root, '🌳 tree - ', tree);
console.log('🙄 find 10 ? ', tree.contains(10));
console.log('🙄 find 2 ? ', tree.contains(2));
console.log('🙄 find 100 ? ', tree.contains(100));