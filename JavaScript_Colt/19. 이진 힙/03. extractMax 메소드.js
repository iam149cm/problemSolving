/** ๐ Removing from a heap
 * - remove the root
 * - replace with the most recently added
 * - Adjust ( sink down )
 * 
 * [ 41 ๐ , 39, 33, 18, 27, 12 ]
 * [ 12 ๐, 39, 33, 18, 27 ]          ---- 41 ๐ removed!
 * [ 39, 12 ๐, 33, 18, 27 ]          ---- swap
 * [ 39, 27, 33, 18, 12 ๐ ]
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
        let idx = this.values.length-1; // ์๋ก ์ฝ์๋ ์์ (๋ง์ง๋ง ์ธ๋ฑ์ค);
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx-1) / 2); // ๋ถ๋ชจ์ ์ธ๋ฑ์ค
            let parent = this.values[parentIdx];
            if (element <= parent ) break; // element๊ฐ parent ๋ณด๋ค ์์ผ๋ฉด ๋ฃจํ๋ฅผ ๊นฌ๋ค

            this.values[parentIdx] = element; // swap
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    extractMax() {
        const max = this.values[0]; // root element = ์ต๋๊ฐ
        const end = this.values.pop(); // ๋งจ ๋ค์ ๊ฐ
        
        if (this.values.length > 0 ) { // ๋ฐฐ์ด์ด ๋น์ด์์ง ์์ ๋๋ง
            this.values[0] = end; // ์๋ฆฌ ๋ฐ๊ฟ
            this.sinkDown();
        }
        return max;
    }

    //  [ 33, 39, 41, 18, 27, 12 ]
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0]; // ์๋๋ก ์ฎ๊ฒจ์ผ ํ๋ ๊ฐ

        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild; // ๋ง์ฝ ์์๋ธ๋๊ฐ ์๋ ๊ฒฝ์ฐ ์๋ฌ๊ฐ ๋ฐ์ํ๋ฏ๋ก ์ ์ธ๋ง ํด๋๋ค
            let swap = null; // ์๋ฆฌ๋ฐ๊พธ๊ธฐ๋ฅผ ํ๋ ์๋ฆฌ๋ฅผ ์ถ์ ํ๋ค

            if(leftChildIdx < length) { // ์ธ๋ฑ์ค๊ฐ ๊ธธ์ด๋ณด๋ค ํฌ๊ฑฐ๋ ๊ฐ๋ค๋ฉด ๋ฒ์๋ฅผ ๋ฒ์ด๋ ๊ฒ
                leftChild = this.values[leftChildIdx]; // ์ ํจ์ฑ ๊ฒ์ฌ์ ํต๊ณผํ๋ฉด ๊ฐ์ ๋ถ์ฌํ๋ค
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild > element)     
                || (swap !== null && rightChild > leftChild )){ // ์ค๋ฅธ์ชฝ ์์๊ณผ ์ผ์ชฝ ์์์ ํฌ๊ธฐ ๋น๊ต

                    swap = rightChildIdx;
                }
            }

            if (swap === null) break; // ์๋ฆฌ ๋ฐ๊พธ๊ธฐ๊ฐ ์๋ ์ํฉ์ด ๋ฃจํ๋ฅผ ๊นจ๋ ์กฐ๊ฑด์ด๋ค

            this.values[idx] = this.values[swap]; // ์๋ฆฌ ๋ฐ๊พธ๊ธฐ
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