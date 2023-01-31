/**  🌟 What is a linked list ? ( https://visualgo.net/en/list )
 * - 일반 어레이의 경우 각 요소에 인덱스가 부여된다. 
 * - linked list 의 경우 다음 데이터 엘레멘트를 가리키는 인덱스 없이 그냥 다수의 데이터 엘리먼트로 구성된다. (기차같음)
 * - Linked lists consist of nodes, and each node has a value and a pointer to another node or null
 * - 링크드 리스트는 다수의 노드들로 구성되고, 각각의 노드는 문자열 혹은 숫자와 같은 하나의 데이터 엘리먼트를 저장한다.
 * - 각 노드들은 다음 노드를 가리키는 정보 역시 저장하고 있어야 하며, 더이상 다음 노드가 없을 경우 null 을 저장한다.
 * - 단지 다음 노드들을 기다리고 있는 수많은 노드들이라고 보면 된다.
 * 
 * - 노드 : [ head ] -  []  - []  - [] - [ tail ] 
 * 
 * - array : 엘리베이터가 있는 고층 건물. 5층으로 데려다 줘 하면 5층으로 갈 수 있다
 * - linked list : 엘리베이터가 없는 고층 건물. 각 층을 연결하는 계딴만 있기 때문에 5층에 가기 위해서는 순서대로 올라가야 한다.
 * 
 * - 단방향 연결리스트 : 각 노드가 다음 노드로 오직 단일 방향으로만 연결되었다는 사실에서 유래한다.
 * - insert 의 경우 : 모든 엘리먼트에 인덱스를 할당하는 어레이와 달리 헤드가 새로운 노드를 가리키게 하고 새로운 노드가 헤드가 이전에 가리키던 노드를 가리키게 하면 된다.
 * 👉 즉 새로운 항목을 추가하거나 기존 항목을 제거할 경우 연결 리스트를 사용하면 편리하다.
 * 
 * 🌟 Linked list
 * - Do not have indexes
 * - Connected via nodes with a next pointer
 * - Random aacess is not allowed
 * 
 * 🌟 Arrays
 * - Indexed in order
 * - Insertion and deletion can be expensive
 * - Can quickly be accessed at a specific index
 * 
 * 🌟 Big-O
 * - Insertion : O(1) - 몇개의 노드가 있던 관계없음
 * - Removal : It depends where removing from ... 맨앞-O(1) or 맨뒤/중간-O(N) 
 * - Searching : O(N)
 * - Access : O(N)
 * 
 */