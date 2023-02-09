/**
 * 🌟 접근방법 (Q. A --> E 로 가는 최단거리 구하기)
 * 1. 가장 작은 거리 값을 가진 노드를 골라 먼저 방문한다
 * 2. 일단 그 노드로 이동한 후 그 인접점들을 보면서 그 각각에 대해 A에서 해당 이넞ㅂ점까지의 거리를 합을 내어 구한다
 * 3. 우리가 현재 알고 있는 것 보다 더 작은 거리값이 나오면 파일을 최신화 해 준다
 * 4. 루프
 * 
 * 0. 저장할 정보는 Visited, Previous, Shortest Distance ( 초기값 null )
 * 1. A --> A 최단거리는 0이다. Visited 에 A를 추가한다. A 의 이웃은 B, C 이다.
 * 2. A --> B, C, D .. 최단거리를 알 수 없다. 초기값은 모두 Infinity 이다.
 * 3. A --> B 최단거리는 4라는 걸 찾았다. 최단거리를 4로 업데이트 한다. 
 * 4. B에 가는 경로는 A를 거친다.  Previous 에 B: "A"  를 업데이트 한다. (B 바로 전에 들렀던 경로. B는 A에서 왔다는 뜻) 
 * 5. A --> C 최단거리는 2이고 최단거리와 Previous 를 업데이트 한다. A의 두 개의 인접점을 모두 확인했다.
 * 
 * 6. A-C 가 짧으므로 C로 이동하여 (visited 업데이트) 인접점을 확인한다. 
 * 7. C-D 는 2인것을 확인하고, (A-C-D 를 확인한다. 2+2 = 4 이다.) 
 * 8. A-C-F 는 6이다. A --> F 까지 거리 (2+4 = 6을 업데이트 한다.
 * 
 * ... 루프
 * 최단경로를 찾으면 Visited 와 Previous 를 업데이트 해 준다.
 * 
 * 매번 방문하지 않은 노드 중 짧은 거리의 노드를 고르고 인접점들을 조사해서 가각에 대해 새로은 최단거리를 계산한다.
 * 현재 저장하고 있는 것보다 작다면 저장되어 있는 것을 최신화 해 준다.
 * 
 */

class PriorityQueue{ // PQ 를 사용하는 것은 O(N * log(N)) 이다
    constructor() {
        this.values = [];
    }
    enqueue (val, priority) {
        this.values.push({val, priority});
        this.sort();
    };
    dequeue() {
        return this.values.shift();
    };

    sort(){
        this.values.sort((a,b) => a.priority - b.priority);
    }
}

var q = new PriorityQueue();
q.enqueue("B", 3);
q.enqueue("C", 5);
q.enqueue("D", 2);
q.enqueue("Q", 20);

console.log('👉 q - ',q);
console.log('👉 dequeue - ', q.dequeue()); // 가장 우선순위가 적은 값이 나온다.