/** 🌟 Adjacency Matrix 인접 행렬 : 행과 열에 맞춰 정보를 저장한다.
 * - Takes up more space (in sparse graphs)
 * - Slower to iterate over all edges
 * - Faster to lookup specific edge
 * -🌟 특정 간선이 있는지 확인하는 것이 빠르다  O(1)
 * 
 * - |V| - number of vertices  /  |E| - number of edges
 * - 공간 복잡도 : O(|V²|) - 정점의 개수에 따라 증가한다
 * - 데이터가 퍼져있고 즉, 간선이 많지 않으면 행렬을 사용하지 않는 것이 낫다
 * - 🌟 존재하지 않는 것에 대해서도 공간을 차지한다 (존재:1 / 존재x:0)
 * 
 *                     -  A  B  C  D  E  F
 *      A              A  0  1  0  0  0  1            
 *  F /    ↖ B         B  1  0  1  0  0  0
 *  |        |         C  0  1  0  1  0  0
 *  E        C         D  0  0  1  0  1  0
 *    ↖ D ／           E  0  0  0  1  0  1
 *                     F  1  0  0  0  1  0
 * 
 * 
 * 🌟 Adjacency list 인접 리스트
 * - Can take up less space (in sparse graphs)
 * - Faster to iterate over all edges
 * - Can be slower to lookup specific edge
 * - 특정 간선이 있는 것을 확인하려면 느리다. (연결이 몇 개인지에 따라 배열 전체를 순화할 수도 있다 ) O(|V|+|E|)
 * 
 * 👉 Most data in the real-world tends to lend itself to sparser and/or larger graphs
 * - 위키피디아나 SNS 상 실제 데이터들은 퍼져있는 경우가 더 많다.
 * - 노드의 개수, 즉 정점의 개수는 아주 많지만 그게 서로 다 연결이 되어 있지는 않은 경우가 더 많다.
 * - 그래서 Adjacency list 가 더 많이 사용된다
 *  
 * - 공간 복잡도 : O(|V| + |E|) 간선과 정점의 개수에 비례해서 증가 - 리스트의 사이즈는 간선의 개수에 따라 증가하므로
 *  
 * 
 * - 3과 이어진 것을 보고 싶으면 인덱스 3으로 간다. 2, 4와 연결되어 있는 것을 확인 할 수 있다.
 * 
 * 숫자의 경우 리스트를 사용하고, 문자의 경우 해쉬 테이블을 사용하면 된다 ( { A:["B" , "F"] , ... } )
 * 👉 숫자의 경우
 *  [  
 * 0  [1, 5] , 
 * 1  [0, 2] ,
 * 2  [1, 3] ,
 * 3  [2, 4] ,
 * 4  [3, 5] ,
 * 5  [4, 0] ,
 * ]
 */