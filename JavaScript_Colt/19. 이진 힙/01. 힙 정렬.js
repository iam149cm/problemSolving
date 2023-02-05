/** 🌟 Binary Heap 이진 힙?
 * - Very Similar to a binary search tree, but with some different rules!
 * - In a MaxBinaryHeap, parent nodes are always lager than child nodes. 
 * - In a MinBanaryHeap, parent nodes are always smaller than child nodes.
 * 
 * - 기본적으로 트리의 한 종류이나 부모자식간의 규칙이 존재한다. 
 * - 이진 검색 트리와 다르게 왼쪽 오른쪽 규칙은 없다.  
 * - 힙은 각 노드의 모든 줄 (left/right) 이 채워져야 한다.
 * 
 *      👇 이진힙           |   👇 이진 탐색 트리
 *         41              |          33
 *     39      33          |      18       [41] <--- 자식이 부모보다 크기 때문에 이진힙이 아니다
 *   28  37   12           |   12   27   39
 * 
 * 🌟 Max Binary Heap 
 * - Each parent has at most two child nodes
 * - The value of each parent node is always greater than its child nodes
 * - In a max Binary Heap the parent is greater than the children, 
 * but there are no guarentees between sibling nodes
 * - A Binary heap is as compact as possible. 
 * All the children of each nodes are as full as they can be and left children are filled out first
 * 
 * 🌟 Min Binary Heap
 * - Max Binary Heap 과 반대로 루트가 가장 작은 숫자이다  
 * 
 * 🌟 부모자식 관계를 찾는 공식 
 * - For any index of an array n .. 
 * - The left child is stored at 2n + 1 / The right child is at 2n + 2
 * 
 * - For any child node at index n ..
 * - Its parent is at index (n-1) / 2  & floor (내림)
 * 
 * 🌟 Big-O
 * - 이진 힙은 최대 힙이든 최소 힙이든 삽입, 삭제에 있어서 아주 성능이 좋다.
 * - 노드의 층이 하나씩 생길 때 마다 시간은 한 단위씩만 늘어난다. (64개의 노드라면 6번의 연산만 하면 된다)
 * - Insertion - O(log N)  --- 부모노드끼리만 한 단계씩 비교를 하면 됨
 * - Removal - O(log N)
 * - Search - O(N)         --- root 가 86 인 힙에서 1은 어디있는가? ---> 전부 다 봐야 함
 *
 * 🌟 RECAP
 * - 이진 힙은 힙의 한 종류이고, 힙은 트리의 한 종류이다
 * - Binary Heaps are very useful data structures for sorting, and implementing other data structures like priority queues.
 * - Binary Heaps are either MaxBinaryHeaps or MinBinaryHeaps with parents either being smaller or larger than their children.
 * - With just a little bit of math, we can represent heaps using arrays!
 * 
 * 
 */