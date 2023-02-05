/** 🌟 Removing from a heap
 * - remove the root
 * - replace with the most recently added
 * - Adjust ( sink down )
 * 
 * [ 41 👈 , 39, 33, 18, 27, 12 ]
 * [ 12 👈, 39, 33, 18, 27 ]          ---- 41 👈 removed!
 * [ 39, 12 👈, 33, 18, 27 ]          ---- swap
 * [ 39, 27, 33, 18, 12 👈 ]
 *  * 
 */


class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }

    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length-1; // 새로 삽입된 요소 (마지막 인덱스);
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx-1) / 2); // 부모의 인덱스
            let parent = this.values[parentIdx];
            if (element <= parent ) break; // element가 parent 보다 작으면 루프를 깬다

            this.values[parentIdx] = element; // swap
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    extractMax() {
        const max = this.values[0]; // root element = 최대값
        const end = this.values.pop(); // 맨 뒤의 값
        
        if (this.values.length > 0 ) { // 배열이 비어있지 않을 때만
            this.values[0] = end; // 자리 바꿈
            this.sinkDown();
        }
        return max;
    }

    //  [ 33, 39, 41, 18, 27, 12 ]
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0]; // 아래로 옮겨야 하는 값

        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild; // 만약 자식노드가 없는 경우 에러가 발생하므로 선언만 해둔다
            let swap = null; // 자리바꾸기를 하는 자리를 추적한다

            if(leftChildIdx < length) { // 인덱스가 길이보다 크거나 같다면 범위를 벗어난 것
                leftChild = this.values[leftChildIdx]; // 유효성 검사에 통과하면 값을 부여한다
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild > element)     
                || (swap !== null && rightChild > leftChild )){ // 오른쪽 자식과 왼쪽 자식의 크기 비교

                    swap = rightChildIdx;
                }
            }

            if (swap === null) break; // 자리 바꾸기가 없는 상황이 루프를 깨는 조건이다

            this.values[idx] = this.values[swap]; // 자리 바꾸기
            this.values[swap] = element;
            idx = swap;
        }
    }

}


// [ 41, 39, 33, 18, 27, 12, 55 ]
//    0   1   2   3   4   5   6

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

heap.extractMax();
console.log(heap.values);