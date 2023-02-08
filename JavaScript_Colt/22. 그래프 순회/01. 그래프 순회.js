/** 🌟 Traversal - 그래프에 있는 모든 정점을 방문한다. 
 * - 그래프를 순화하는 코드를 짤 때는 👉시작점을 지정 해 주어야 한다 (트리와의 차이점)
 * 
 * ✨ Graph traversal uses .. 그래프를 왜 신경써야 하는가 ?
 * - Peer to peer networking
 * - Web crawlers
 * - Finding "closest" matches / recommendations
 * - Shortest path problems 
 *   - GPS Navigation
 *   - Solving maxes
 *   - AI (shortest path to win the game)
 * 
 * 🌟 DFS Depth First Search 깊이 우선 순회 (Traversal)
 * - Explore as far as possible down one branch before "backtracking"
 * - 형제 노드를 방문하기 전에 자식 노드를 먼저 방문하는 것.
 *  
 * - 그래프에서 말하는 DFS 란? 한 인접점을 찾고 이어서 다른 인접점을 찾는다.
 * - ex) A 의 인접점을 보고, A의 인접점에 대한 이웃노드를 찾는다.
 * - 이미 방문했던 곳을 저장해야 한다.
 * {
 * "A" : ["B", "C"],  👉 인접한 곳을 알파벳 우선순으로 방문한다. 인접점을 따라가고 길이 막힐 때 까지 따라간다.
 * "B" : ["C", "D"]   👉 이미 방문했던 곳을 하나씩 X 쳐 가면서 없앤다.
 * ...
 * }
 * 
 */