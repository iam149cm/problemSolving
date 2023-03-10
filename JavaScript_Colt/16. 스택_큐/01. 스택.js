/** π Stack ? .. is just a concept. 
 * - λ°μ΄ν°μ λͺ¨μ. νμμ μΆ μμΉμ λ°λ₯΄λ λ°μ΄ν° νμ. Last in First Out
 * - κ°μ₯ λμ€μ μΆκ°λ κ²μ΄ λ¨Όμ  μ κ±°λλ€. .... λΌλ κ·μΉμ κ°μ§κ³  μλ λ°μ΄ν° νμμ κ°λμ΄λ€. 
 * - μμ : μ¬κ·μμ λ³Έ call stack, ν¬ν μ΅ undo/redo , λΈλΌμ°μ  λ€λ‘κ°κΈ° ...
 */

var stack = [];  
stack.push("google");
stack.push("instagram");
stack.push("youtube");

console.log("π pop 1", stack.pop()); // λ€μμλΆν° μ κ±° ν΄ μ£Όλ λ©μλ
console.log("π pop 2", stack.pop(), ' π ', stack.pop()); 

stack.unshift("01. create new file");
stack.unshift("02. resize file");
stack.unshift("03. cloned out wrinkle");

// unshift λ‘ λ£μμ κ²½μ° κ°μ₯ λ§μ§λ§μ λ£μ κ²μ λ½μλ΄κ³  μΆμΌλ©΄ shift λ₯Ό μ°λ©΄ λλ€
console.log("π shift 1", stack.shift(), 'π' , stack.shift());

/**  π λ°μ΄ν°λ₯Ό μΆκ°νκ³  μ κ±°νλ λ°©λ²μ΄ νμμ μΆ κ·μΉμ λ§κΈ°λ§ νλ©΄ λλ€.
* - λ°°μ΄λ μ€νμΌλ‘ μ¬μ© ν  μ μλ€. push, pop μ΄λ shift, unshift λ₯Ό μ¬μ©νλ€λ©΄.
* - push / pop VS shift / unshift π array μμλ μμͺ½μ index μ μΆκ°νλ κ²μ΄ μκ°λ³΅μ‘λ μμΌλ‘ μ’μ§ μλ€.
*/