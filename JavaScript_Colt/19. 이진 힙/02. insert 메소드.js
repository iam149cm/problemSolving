/** 🌟 Adding to a MaxBinaryHeap
 * - add to the end
 * - bubble up : 알맞는 자리에 갈 때 까지 자리를 이동시킨다
 * 
 * [ 41, 39, 33, 18, 27, 12 , 55 👈 ]  --- 55 를 부모 (33) 와 비교 후 부모보다 크면 자리 바꾼다
 * [ 41, 39, 55 👈, 18, 27, 12 , 33 ]
 * [ 55 👈, 39, 41, 18, 27, 12 , 33 ]
 * 
 * 
 */


class MaxBinaryHeap {
    constructor(){
        // this.values = [];
        this.values = [ 41, 39, 33, 18, 27, 12 ];
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
}


// [ 41, 39, 33, 18, 27, 12, 55 ]
//    0   1   2   3   4   5   6

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(1);
heap.insert(45);

console.log(heap.values);