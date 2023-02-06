/** 🌟 keys / values
 * - Loops through the hash table array and returns an array of keys (values) in the table
 * - values 의 경우 겹치는 값이 있을 가능성이 상당히 높은데, 이것에 대한 핸들링도 필요하다.
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

    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if(!valuesArr.includes(this.keyMap[i][j][1])) { // 리턴하고자 하는 배열에 값이 없으면 push
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


console.log("👉ht.values - ", ht.values());
console.log("👉ht.keys - ", ht.keys());

ht.keys().forEach(key => {
    console.log(ht.get(key));
});