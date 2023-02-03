/** 🌟 Trees  : A data structure that consists of nodes in a parent / child relationship.
 * - 하나의 상위 노드는 0 개 ~ 여러개의 하위 노드를 가리킬 수 있다.
 * - 노드는 부모-자식 관계에 의해 부모 --> 자식만 가능. 자식이 부모를 가리키면 안된다.
 * - 즉, 부모->부모 or 자식->부모 는 불가능하다. 형제를 가리키는 것도 불가능하다.
 * - 루트는 하나여야 한다.
 * 
 * 🌟 Tree terminology
 * - Root - The top node node in a tree
 * - Child - A node directly connected to another node when moving away from the Root
 * - Parent - The converse notion of a child.
 * - Siblings - A group of nodes with the same parent.
 * - Leaf - a node with no children.
 * - Edge - The connection between one node and another.  (화살표)
 * 
 * - Lists : linear (한 갈래의 길 밖에 없다)
 * - Trees - nonlinear (여러 갈래의 경로가 존재한다)
 * 
 * 🌟 Real world use cases of the tree 
 * - HTML DOM
 * - JSON
 * - Network Routing
 * - Abstract syntax tree
 * - Artifical Intelligence (ex. 틱텍토 게임하는 경우 상대방의 수에 따른 다음 수 .. )
 * - Folders in Operating Systems (디렉토리 시스템)
 * 
 * 
 * 🌟 Binary trees
 * - 각 노드가 최대 두 개의 자식을 가져야 한다는 특별한 조건이 있다. ( 자식 갯수 : 0 ~ 2개 )
 * - 순회가 쉽다는 장점이 있다.
 * 
 * 🌟 Binary Search trees (BST)
 * - 데이터가 순서에 따라 정렬되어 있고, 순서를 매기는 방법 (규칙) 이 있어야 한다.
 * - 왜 사용하는가? - 검색을 빠르고 쉽게 만들어준다. 추가하는 것가 노드의 자리를 찾는 것도 쉽게 해 준다.
 * - 정렬되지 않은 트리에 비해 특정 값을 찾는 것이 굉장히 빠르다. (찾는 값이 현재 노드보다 작냐/크냐 ? 작으면-왼쪽, 크면-오른쪽)
 * 
 * - Every parent node has at most two children
 * - Every node to the left of a parent node is always less tan the parent
 * - Every node to right of a parent node is always greater than the parent
 * 
 * 🌟 Big O of BST  (not guaranteed 😢)
 * - Insertion : O(log n) ... 성능이 괜찬은 편이다. O(1) 과 거의 다를 바 없음
 * - Searching - O(log n)
 * 
 * - O(log n) 은 평균적인 경우와 최고의 경우에 트리가 가지는 시간복잡도. 이것보다 더 빠를 수는 없다.
 * - 그러나 최악의 경우 어떤 경우는 아주 느릴 수 있다. 
 * - (연결 리스트나 다를바 없는 형태의 -한쪽으로 치우친- 이진트리의 경우 ... O(N) 이 될것이다)
 * - 노드가 한 단계 상승한다면 검색해야 하는 값이 2배로 늘지만 검색 횟수는 한 번만 더 늘어난다.
 * 
 */