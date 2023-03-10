/** π keys / values
 * - Loops through the hash table array and returns an array of keys (values) in the table
 * - values μ κ²½μ° κ²ΉμΉλ κ°μ΄ μμ κ°λ₯μ±μ΄ μλΉν λμλ°, μ΄κ²μ λν νΈλ€λ§λ νμνλ€.
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

    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if(!valuesArr.includes(this.keyMap[i][j][1])) { // λ¦¬ν΄νκ³ μ νλ λ°°μ΄μ κ°μ΄ μμΌλ©΄ push
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }
    
    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if(!keysArr.includes(this.keyMap[i][j][0])) {  
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
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
ht.set("purple", "#DDA0DD");
ht.set("violet", "#DDA0DD");
ht.set("violet", "#DDA0DD");
ht.set("violet", "#DDA0DD");


console.log("πht.values - ", ht.values());
console.log("πht.keys - ", ht.keys());

ht.keys().forEach(key => {
    console.log(ht.get(key));
});