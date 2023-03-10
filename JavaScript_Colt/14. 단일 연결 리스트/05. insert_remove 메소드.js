/** ๐ Insert - Adding a node to the Linked List at a specific position
 * - index ์ ๊ฐ์ ๋ฐ์ ์ฃผ์ด์ง ์์น์ ์๋กญ๊ฒ ์ฝ์ํ๋ค. 
 * - ๋ง์ฝ ์ธ๋ฑ์ค๊ฐ ๋ฆฌ์คํธ์ ๊ธธ์ด์ ๊ฐ์ผ๋ฉด ๋งจ ๋ง์ง๋ง์ ์ฝ์ํ๋ฉด ๋๊ธฐ ๋๋ฌธ์ push() ๋ฅผ ํธ์ถํ๋ฉด ๋๋ค.
 * - ์ ๋ธ๋์ ์์น๋ฅผ ๋ฐ๊ณ  ์ด์  ๋ธ๋๊ฐ ์ ๋ธ๋๋ฅผ ๋ฐ๋ผ๋ณด๊ฒ ์๋ฐ์ดํธ
 * - ์ ๋ธ๋๋ฅผ ๋ค์ ๋ธ๋์ ์ฐ๊ฒฐํ๋ค. true / false ๋ฐํํ๋ค.
 * 
 * ๐ Remove - Removing a node from the Linked List at a specific position
 * - ์ธ๋ฑ์ค๋ฅผ ์ธ์๋ก ๋ฐ์์ ํด๋น ์ธ๋ฑ์ค์ ์๋ ๋ธ๋๋ฅผ ์ ๊ฑฐํ๊ณ  ์ฃผ์์ ์๋ ๊ฒ๋ค์ ์ฐ๊ฒฐํ๋ค.
 * - ์ธ๋ฑ์ค๊ฐ ๋ฐฐ์ด๊ธธ์ด -1 ์ ๊ฐ๋ค๋ฉด pop() ํธ์ถ, ์ธ๋ฑ์ค๊ฐ 0์ด๋ผ๋ฉด shift ํธ์ถ
 * 
 */

class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList{ //interface
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else { 
            this.tail.next = newNode; 
            this.tail = newNode;
        }
        this.length ++;
        return this; 
    }

    pop(){
        if (!this.head) return undefined; // ๋ฆฌ์คํธ๊ฐ ๋น์ด์๋ ๊ฒฝ์ฐ
        var current = this.head;
        var newTail = current;
        while (current.next) { // ๋ค์๋ธ๋๊ฐ ์์ ๋ ๊น์ง
            newTail = current; // pop ํ์ ์๋ก์ด tail
            current = current.next; // pop ๋  ๊ฐ
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {  // ๋ฆฌ์คํธ๊ฐ ๋น์์ ๊ฒฝ์ฐ 
            this.head = null;
            this.tail = null;}
        return current
    }

    shift() {
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) {  // ๋ฆฌ์คํธ๊ฐ ๋น์์ ๊ฒฝ์ฐ 
            this.head = null;
            this.tail = null;}
        return currentHead; // old head;
    }
    
    unshift(val) {
        var newNode = new Node(val);
        if(!this.head) { // ์ด๊ธฐ์ ์๋ฌด ๊ฐ๋ ๋ฆฌ์คํธ์ ์๋ ๊ฒฝ์ฐ
            this.head = newNode;
            this.tail = this.head;
        } else { // ๋ฆฌ์คํธ์ ๊ฐ์ด ์๋ ๊ฒฝ์ฐ
            newNode.next = this.head; // node ๊ฐ connection ์ ๋งบ์ด์ค๋ค
            this.head = newNode; // head ๋ฅผ ์ด๋ ํด ์ค๋ค
        }
        this.length++;
        return this; // list ๋ฅผ ๋ฆฌํดํ๋ค
    }
    
    get(index) {
        if(index < 0 || index >= this.length) return null; // ์ธ๋ฑ์ค ์ ํจ์ฑ ๊ฒ์ฌ
        var counter = 0;
        var current = this.head; // ๋ง์ง๋ง์ ๋ฐํ๋  ๊ฐ
        while (counter != index ) { 
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode) { // ์ฐพ๋ node ๊ฐ ์์ ๊ฒฝ์ฐ
            foundNode.val = val; // ์๋ก์ด ๊ฐ์ผ๋ก ์๋ฐ์ดํธ
            return true;
        } 
        return false;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val); // !! = true (boolean ํ์)๋ฅผ ๋ฐํํ๋ค
        if (index === 0) return !!this.unshift(val); // ๐ boolean ํ์์ผ๋ก ๋ฐํํ๊ฒ ๋ง์ถ๊ธฐ ์ํจ

        var newNode = new Node(val); // ์ ๋ธ๋ ์์ฑ
        var prev = this.get(index -1); // ์ด์  ๋ธ๋ ๊ฒ์
        var temp = prev.next; // ์ด์  ๋ธ๋-๋ค์ ๋ธ๋์ ์ฐ๊ฒฐ์ ๋ณด๋ฅผ ์์ ์ ์ฅ
        prev.next = newNode; // ์ด์  ๋ธ๋์ ์ ๋ธ๋๋ฅผ ์ฐ๊ฒฐ
        newNode.next = temp; // ์ ๋ธ๋์ ๋ค์ ๋ธ๋๋ฅผ ์ฐ๊ฒฐ

        this.length++;
        return true;
    }

    remove (index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length -1) return this.pop();
        
        var prevNode = this.get(index-1); // ์ ๊ฑฐํ๋ ค๋ ๋ธ๋์ ์ด์  ๋ธ๋ ์ฐพ๊ธฐ;
        var removed = prevNode.next; // ์ ๊ฑฐํ๋ ค๋ ๋ธ๋
        prevNode.next = removed.next; // ์ด์  ๋ธ๋์ ๋ค์๋ธ๋ ์ฐ๊ฒฐ
        this.length--;

        return removed;
    }
}

var list = new SinglyLinkedList();
list.push(100);
list.push(200);
list.push(300);
list.push(400);
list.push(500);

// console.log(list.get(2), '๐ insert ๐ ',list.insert(2, 310), list.get(2));
// console.log(list.get(6), '๐ insert ๐ ',list.insert(6, 555), list.get(6));

console.log(list.remove(0),'๐ removed ๐ ', list.get(0) );
console.log(list.remove(3),'๐ removed ๐ ', list.get(3) );
