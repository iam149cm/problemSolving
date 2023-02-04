/** 🌟 Tree traversal 트리 순회
 * - How to we visit every node once ?
 * 1. Breadth-first Search (BFS - 너비 우선 탐색)
 * - root --> node 1.1 --> node 1.2 --> node 2.1 ---> node 2.2 ....
 * 
 * - Depth-first Searh (DFS - 깊이 우선 탐색)
 * - 기본적으로 일차적인 진행 방향이 트리의 수직 방향 끝이고 거기까지 간 다음에 다시 올라온다. 
 * - 정위 순회 (DFS - inOrder) / 전위 순회 (DFS - preOrder) / 후위 순회 (DFS - PostOrder)
 * 
 * 
 * 🌟 BFS? DFS? Which is better? 어떤 것을 사용해야 하는가?
 * - 그때 그때 다르다! 무엇을 사용할지는 트리의 구조에 달려 있다.
 * 
 * 🌟 1. 깊이보다 너비가 넓은 트리의 경우 (거의 대부분의 트리)
 * - 깊이 우선 탐색이 더 적은 공간을 점유한다. (공간복잡도) 
 * - 깊이 우선 탐색은 정해진 가지에 있는 노드를 따라 가장 아래까지만 내려가면 된다. 더 적은 공간을 점유한다.
 * 
 * - 너비 우선 탐색은 다음 방문할 노드들을 큐에 전부 저장하므로 비효율적이다. 사용되는 공간이 많다.
 * - ex. 100 레벨 정도 깊이로 내려가면 큐에 엄청나게 많은 데이터가 저장된다.
 * 
 * 
 * 🌟 2. 우울한 이진탐색 트리 
 * - 너비 우선 탐색을 하면 메모리에서 사용되는 공간은 없다. (1 노드 당 1개의 값.. 큐-shift 반복)
 * - 깊이 우선 탐색을 하면 아래로 내려가야 하는 레벨이 아주 많고 처리하고 있는 레벨의 위 레벨 데이터가 메모리에 저장된다.
 * 
 * 
 * ✨ 깊이 우선 탐색 3종류는 각각 언제 사용해야 하는가? (전위preOrder/후위postOrder/정위inOrder)
 *  1. 정위 : 모든 노드가 정렬되어 나온다. (root 기준 왼쪽은 root보다 작고 오른쪽은 root 보다 큰 값이므로)
 *  2. 전위 : 트리를 재구성할 때 사용할 수 있다 (맨 앞의 값이 루트이고 / 루트보다 작은 값이 left / 큰 값이 right)
 *  
 * 🌟 RECAP
 * - Trees are non-linear data structures that contain a root and child nodes
 * - Binary Trees can have values of any type, but at most two children for each parent
 * - Binary Search Trees are a more specific version of binary trees where every node to the left of a parent
 * is less than it's value and every node to the right is greater
 * - We can search through Trees using BFS and DFS
 * 
 */