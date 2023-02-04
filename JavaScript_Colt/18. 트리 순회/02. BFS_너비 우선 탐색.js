/** 🌟 BFS Breadth-first Search
 * - 같은 레벨에 있는 모든 노드들을 거친다. 자식 노드를 보기 전에 형제 노드를 먼저 본다. 
 *  
 * 1.       10            순회 순서 :  [ 10, 6, 15, 3, 8, 20 ]
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

    // 이진 탐색 트리의 코드에서 이어 쓴다
    BFS() {
        var data = [],  // 맨 마지막에 출력 할 값
            queue = [], // 순회 예정 값
            node = this.root;

        // root 를 queue 에 넣는다.
        queue.push(node);
        while(queue.length) { // falsy 할때까지. 즉, queue 의 길이가 0이 될 때 까지
            node = queue.shift(); // queue 의 맨 앞에서 제거. 선입선출을 지키기 위함
            data.push(node.value);
            if (node.left) queue.push(node.left); // node 하위 왼쪽에 값이 있으면 queue 에 해당 값을 넣어서 순회예정
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

console.log('👉 BFS - ',tree.BFS());