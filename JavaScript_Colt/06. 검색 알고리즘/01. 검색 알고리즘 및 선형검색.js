/** π κ²μ μκ³ λ¦¬μ¦
 * - ex) νΉμ  λ¬Έμμ΄μ΄ μλκ°? νΉμ  μ¬μ©μλͺμ΄ μ΄λ―Έ μ¬μ©λκ³  μλκ°?
 * π "string".indexOf() ...
 * 
 * π μ ν κ²μ Linear Search
 * - λ°°μ΄μ μ²μλΆν° λκΉμ§ μ΄λνλ©΄μ μνλ κ°μ΄ μλμ§ μ°Ύλλ€.
 * - μλ°μ€ν¬λ¦½νΈμλ μ΄λ―Έ λ΄μ₯ν¨μκ° μλ€ (indexOf, includes, find, findIndex)
 */

// μμ± ν΄ λ³΄μ
function linearSearch1(arr, val) {

    // 3.
    for (let i = 0; i < arr.length; i++) {   
        if (arr[i] == val) {
            return i;
        }else if (i-1 == arr.length) {
            return -1;
        }
    }
    
    // 1. ------------------
    // return arr.indexOf(val);

    // 2.
    // if(arr.includes(val)) {
    //     return arr.indexOf(val);
    // } else {
    //     return -1;
    // }

}


// console.log(linearSearch1([1,2,3,4,5], 5));




// π νμ΄ ------------------- μκ°λ³΅μ‘λ : O(N)
function linearSearch2(arr , val) {

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
        
    }
    return -1;
}


console.log(linearSearch2([34, 56, 1, 2] , 23));


/** π μ νκ²μ Big-O
 * - O(1) ::: Best Case
 * - O(N) ::: Worst / Average Case
 * 
 */