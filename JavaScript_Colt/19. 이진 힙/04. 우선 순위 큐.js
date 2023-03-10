/** π Priority Que  μ°μ μμ ν
 * - A data structure where each element has a priority.
 * - Elements with higher priorities are served before elements with lower priorities.
 * 
 * - κ° μμκ° μ°μ μμλ₯Ό κ°μ§κ³  μκ³  μ°μ μμκ° λμ μμκ° λ¨Όμ  μ²λ¦¬λλ€.
 * - μμ : λ³μ μκΈμ€ - μ΄μ λ§κ³  λ³μμ μ¨ μ¬λμ λͺ©μ΄ μΉΌμΉΌν μ¬λλ³΄λ€λ λ¨Όμ  μ§λ£λ₯Ό λ°κ² λλ€.
 * - μ λμ€ ps command μμμ process id μμ μλ nice κ° μ°μ μμμ μ­ν μ νλ€.
 * 
 * - μ°μ μμ νλ νκ³Όλ λ³κ°μ μΆμμ μΈ κ°λμ΄λ€.
 * - κ·Έλ¬λ μ°μ μμ νλ₯Ό κ΅¬νν  λ νμ μ¬μ©νκΈ° λλ¬Έμ μ°κ΄μ§λ κ²½μ°κ° λ§λ€.
 * 
 */

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority; // μ°μ μμμ κΈ°λ°νμ¬ λΉκ΅ν΄μΌ νλ€
        this.insertTime = Date.now(); // μ°μ μμκ° κ°μ κ²½μ° λ¨Όμ  λ€μ΄μ¨ κ²μ μ²λ¦¬
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }
 
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length-1; // μλ‘ μ½μλ μμ (λ§μ§λ§ μΈλ±μ€);
        const element = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx-1) / 2); // λΆλͺ¨μ μΈλ±μ€
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority ) break; // elementμ μ°μ μμκ° parent λ³΄λ€ ν¬λ©΄ λ£¨νλ₯Ό κΉ¬λ€

            this.values[parentIdx] = element; // swap
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue() {
        const min = this.values[0]; // root element = μ΅λκ°
        const end = this.values.pop(); // λ§¨ λ€μ κ°
        
        if (this.values.length > 0 ) { // λ°°μ΄μ΄ λΉμ΄μμ§ μμ λλ§
            this.values[0] = end; // μλ¦¬ λ°κΏ
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0]; // μλλ‘ μ?κ²¨μΌ νλ κ°

        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild; // λ§μ½ μμλΈλκ° μλ κ²½μ° μλ¬κ° λ°μνλ―λ‘ μ μΈλ§ ν΄λλ€
            let swap = null; // μλ¦¬λ°κΎΈκΈ°λ₯Ό νλ μλ¦¬λ₯Ό μΆμ νλ€

            if(leftChildIdx < length) { // μΈλ±μ€κ° κΈΈμ΄λ³΄λ€ ν¬κ±°λ κ°λ€λ©΄ λ²μλ₯Ό λ²μ΄λ κ²
                leftChild = this.values[leftChildIdx]; // μ ν¨μ± κ²μ¬μ ν΅κ³Όνλ©΄ κ°μ λΆμ¬νλ€
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild.priority < element.priority)     
                || (swap !== null && rightChild.priority < leftChild.priority )){ // μ€λ₯Έμͺ½ μμκ³Ό μΌμͺ½ μμμ ν¬κΈ° λΉκ΅

                    swap = rightChildIdx;
                }
            }

            if (swap === null) break; // μλ¦¬ λ°κΎΈκΈ°κ° μλ μν©μ΄ λ£¨νλ₯Ό κΉ¨λ μ‘°κ±΄μ΄λ€

            this.values[idx] = this.values[swap]; // μλ¦¬ λ°κΎΈκΈ°
            this.values[swap] = element;
            idx = swap;
        }
    }
}


let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);

// λ£μ μμμ μκ΄μμ΄ μ°μ μμκ° λμ (μ«μκ° μ μ) μμΌλ‘ μΆλ ₯νλ€. μ΅μ μ΄μ§ ν
console.log('π dequeue - ', [ER.dequeue(), ER.dequeue(), ER.dequeue(), ER.dequeue(), ER.dequeue()]);