/** 🌟 GRAPHS - 주로 SNS 나 쇼핑 추천 알고리즘에서 사용된다.
 * - 그래프는 노드나 노드들의 연결을 모은 것. Nodes + Connections = Graphs
 * - 트리는 그래프의 일종이다. (트리 : 두 개의 정점이 하나의 경로로 이어져있다는 점이 그래프와 차이난다)
 * - 그래프 자체는 부모노드라는 개념이 없다. 모든 노드가 동일하게 취급되고 연결되어 있다.
 * 
 * - Social networks, Location / Maping , Routing Algorithms, Visual Hierarchy, .... 위키피디아 시각화
 * - 구글맵은 그래프를 가지고 최단경로를 보여준다. 스포티파이, 넷플릭스 추천 이 모든 데이터를 그래프 관계로 저장한다.
 * 
 * 🌟 Essential graph terms 그래프 용어
 * - Vertex (정점) - a node. 
 * - Edge (간선) - connetion between nodes
 * - Weighted / Unweighted (가중/비가중) - values assigned to distances between vertices
 * - 비가중 그래프 : 간선에 부여된 값이 없다. A <---> B
 * - 가중 그래프 : 간선에 부여된 값이 있다. 연결 그 자체에 대한 정보가 있다. A --[17]-- B
 * - 구글지도의 경우 : 간선에 거리들이 있으므로 가중 그래프이다.
 *  
 * 
 * - Directd / Undirected (방향/무방향) - directions assigned to distanced between vertices 
 * - 무방향 그래프에는 방향이나 양극, 음극이 없다. 양방향 연결이 존재하는 샘이다. (페이스북)
 * - 방향 그래프는 보통 방향을 의미하는 화살표로 표현된다. (인스타그램) 
 */

