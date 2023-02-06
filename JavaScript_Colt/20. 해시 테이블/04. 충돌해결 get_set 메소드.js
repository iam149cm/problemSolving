/** Dealing with Collisions
 * - Even with a large array and a great hash function, collisions are inevitable.
 * - There are many stategies for dealing with collisions, but we'll focus on two :
 * 
 * 🌟 충돌 해결의 두 가지 방법
 * 1. Separate Chaining 개별 체이닝
 * 2. Linear Probing 직선 탐색법
 * 
 * 🌟 Separate chaining 
 * - With separate chaining, at each index in our array we store values 
 * using a more sophisticated data structure (e.g. an array or a linked list)
 * - This allows us to store multiple key-value pairs at the same index
 * 
 * - 기본적으로 같은 장소에 여러 데이터를 저장할 때 배열이나 연결 리스트 등과 같은 것을 활용하여 이중 데이터 구조를 쓰는 것.
 * - 여러 개의 키-값 쌍을 같은 자리에 저장할 수 있다.
 * 
 * 🌟 Linear Probing
 * - With linear probing, when we find a collision, we search through the array to find the next empty slot.
 * - Unlike with separate chaining, this allows us to store a single key-value at each index
 * 
 * - 각 위치에 하나의 데이터만 저장한다는 규칙을 지킨다. 충돌이 일단 발생하면 다음 빈 칸이 어디인지 확인한다.
 * - array 의 길이만큼만 저장할 수 있다.
 * 
 * 
 * 👉 하기에서는 Separate chaining 를 사용한다.
 * 🌟 Set / Get method
 * 1. Accepts a key and a value (ex. "pink" : #0f0f0f )
 * 2. Hashes the key
 * 3. Stores / retrieves the key-value pair in the hash table array via separate chaining
 * 
 */


class HashTable{
    constructor(size = 53) { // 테이블의 크기 기본값 (소수)
        this.keyMap = new Array(size);
    }

    _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++ ) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = ( total * WEIRD_PRIME + value ) % this.keyMap.length; 
    }
    return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index]) { // 배열이 비어 있으면
            this.keyMap[index] = [];
        }

        this.keyMap[index].push([key, value]);
        // return index;
    }

    get (key) {
        let index = this._hash(key);
        if(this.keyMap[index]) {
            // 해당 인덱스에 데이터가 있으면 값들을 순회하여 찾는다
            for(let i = 0; i < this.keyMap[index].length; i++ ) {
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]; //  [ 'yellow', '#FFFF00' ]
                }
            }
        }
        return undefined; // 해당 인덱스에 데이터가 없으면 undefined
    }
}


let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");


console.log("👉ht.get - ", ht.get("yellow"));
console.log("👉ht.get - ", ht.get("maroon"));