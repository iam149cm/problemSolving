/** ๐ Adding to a MaxBinaryHeap
 * - add to the end
 * - bubble up : ์๋ง๋ ์๋ฆฌ์ ๊ฐ ๋ ๊น์ง ์๋ฆฌ๋ฅผ ์ด๋์ํจ๋ค
 * 
 * [ 41, 39, 33, 18, 27, 12 , 55 ๐ ]  --- 55 ๋ฅผ ๋ถ๋ชจ (33) ์ ๋น๊ต ํ ๋ถ๋ชจ๋ณด๋ค ํฌ๋ฉด ์๋ฆฌ ๋ฐ๊พผ๋ค
 * [ 41, 39, 55 ๐, 18, 27, 12 , 33 ]
 * [ 55 ๐, 39, 41, 18, 27, 12 , 33 ]
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
}


// [ 41, 39, 33, 18, 27, 12, 55 ]
//    0   1   2   3   4   5   6

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(1);
heap.insert(45);

console.log(heap.values);