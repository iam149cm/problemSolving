/** π QUEUE ν΄λμ€ κ΅¬ν
 * - λ§¨ λ€μ μΆκ°νκ³  λ§¨ μμμ μ κ±° or λ§¨ μμ μΆκ°νκ³  λ§¨ λ€μμ μ κ±°
 * - μΈλ±μ€κ° μμ΄ λͺ¨λ  λͺλ Ήμ΄ μμκ° O(1) μ΄κΈ° λλ¬Έμ μμ£Ό μ»€μ Έλ λλ€.
 * 
 * π Big-O
 * - Insertion : O(1) / Removal : O(1)
 * - Searching : O(N) / Access : O(N)
 */

class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue{
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) { // νμ λ§¨ λ€μ μΆκ°νκ³  μ¬μ΄μ¦λ₯Ό λ°ννλ€
        var newNode = new Node(val);
        if(!this.first) { // λΉ λ°°μ΄μΌ λ
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode; // last pointer λ₯Ό newNode λ‘ μ΄λμν¨λ€
        }
        return ++this.size;
    }

    dequeue() { // νμ λ§¨ μμ κ²μ μ κ±°νκ³  μ κ±°ν κ°μ λ°ννλ€
        if(!this.first) return null;
        var temp = this.first; // λ§μ§λ§μ μ κ±°ν  κ°

        if(this.first === this.last) { // λ°°μ΄μ κ°μ΄ νλλ°μ μμ λ
            this.last = null;
        } 
        this.first = this.first.next; // first pointer λ₯Ό κ·Έ λ€μ κ°μΌλ‘ μ΄λμν¨λ€
        this.size--;

        return temp.value;

    }
}


var queue = new Queue();
queue.enqueue('πFIRST');
queue.enqueue('πSECOND');
queue.enqueue('πTHIRD');
console.log(queue);

console.log('π dequeue - ' , queue.dequeue(), queue.dequeue(), queue.dequeue(),queue.dequeue());
