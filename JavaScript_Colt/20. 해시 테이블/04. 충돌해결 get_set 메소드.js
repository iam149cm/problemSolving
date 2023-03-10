/** Dealing with Collisions
 * - Even with a large array and a great hash function, collisions are inevitable.
 * - There are many stategies for dealing with collisions, but we'll focus on two :
 * 
 * π μΆ©λ ν΄κ²°μ λ κ°μ§ λ°©λ²
 * 1. Separate Chaining κ°λ³ μ²΄μ΄λ
 * 2. Linear Probing μ§μ  νμλ²
 * 
 * π Separate chaining 
 * - With separate chaining, at each index in our array we store values 
 * using a more sophisticated data structure (e.g. an array or a linked list)
 * - This allows us to store multiple key-value pairs at the same index
 * 
 * - κΈ°λ³Έμ μΌλ‘ κ°μ μ₯μμ μ¬λ¬ λ°μ΄ν°λ₯Ό μ μ₯ν  λ λ°°μ΄μ΄λ μ°κ²° λ¦¬μ€νΈ λ±κ³Ό κ°μ κ²μ νμ©νμ¬ μ΄μ€ λ°μ΄ν° κ΅¬μ‘°λ₯Ό μ°λ κ².
 * - μ¬λ¬ κ°μ ν€-κ° μμ κ°μ μλ¦¬μ μ μ₯ν  μ μλ€.
 * 
 * π Linear Probing
 * - With linear probing, when we find a collision, we search through the array to find the next empty slot.
 * - Unlike with separate chaining, this allows us to store a single key-value at each index
 * 
 * - κ° μμΉμ νλμ λ°μ΄ν°λ§ μ μ₯νλ€λ κ·μΉμ μ§ν¨λ€. μΆ©λμ΄ μΌλ¨ λ°μνλ©΄ λ€μ λΉ μΉΈμ΄ μ΄λμΈμ§ νμΈνλ€.
 * - array μ κΈΈμ΄λ§νΌλ§ μ μ₯ν  μ μλ€.
 * 
 * 
 * π νκΈ°μμλ Separate chaining λ₯Ό μ¬μ©νλ€.
 * π Set / Get method
 * 1. Accepts a key and a value (ex. "pink" : #0f0f0f )
 * 2. Hashes the key
 * 3. Stores / retrieves the key-value pair in the hash table array via separate chaining
 * 
 */


class HashTable{
    constructor(size = 53) { // νμ΄λΈμ ν¬κΈ° κΈ°λ³Έκ° (μμ)
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
        if(!this.keyMap[index]) { // λ°°μ΄μ΄ λΉμ΄ μμΌλ©΄
            this.keyMap[index] = [];
        }

        this.keyMap[index].push([key, value]);
        // return index;
    }

    get (key) {
        let index = this._hash(key);
        if(this.keyMap[index]) {
            // ν΄λΉ μΈλ±μ€μ λ°μ΄ν°κ° μμΌλ©΄ κ°λ€μ μννμ¬ μ°Ύλλ€
            for(let i = 0; i < this.keyMap[index].length; i++ ) {
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]; //  [ 'yellow', '#FFFF00' ]
                }
            }
        }
        return undefined; // ν΄λΉ μΈλ±μ€μ λ°μ΄ν°κ° μμΌλ©΄ undefined
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


console.log("πht.get - ", ht.get("yellow"));
console.log("πht.get - ", ht.get("maroon"));