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
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15); // 루트보다 큰 값
tree.root.left = new Node(7); // 루트보다 작은 값
tree.root.left.right = new Node(9);

console.log(tree, '🎄 root - ',tree.root);