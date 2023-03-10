// https://cs.slides.com/colt_steele/es2015-class-syntax

/** π What is a class ?
 * - A blueprint for creating objects with pre-defined properties and methods
 * - μ¬μ μ μ μλ μμ± λ° λ©μλλ€μ μ΄μ©ν΄ κ°μ²΄λ₯Ό μμ±νκΈ° μν μ²­μ¬μ§
 * 
 * - The method to create new objects must be called construtor
 * - The class keyword creates a constant, so you can not redefine it. Watch out for the syntax as well!!
 */

// μλ‘μ΄ μ€νλνΈλ₯Ό μΈμ€ν΄μ€ ν μν¬ λ μ¬μ©λλ νΉλ³ν λ©μλ. μ²­μ¬μ§ νΉμ moldλΌκ³  λ³΄λ©΄ λλ€
class Student { // class λ λλ¬Έμλ‘ μμ
    constructor(firstName, lastName, year) { 
        // constructor λ΄λΆμμ μ¬μ©λλ this = κ°λ³ ν΄λμ€ μΈμ€ν΄μ€, μ¦ κ°λ³ Student μΈμ€ν΄μ€λ₯Ό μ§μΉ­
        this.firstName = firstName; 
        this.lastName = lastName;
        this.grade = year;
    }
}

// class λ₯Ό μ μνλ κ² μμ²΄λ‘λ μλ¬΄ μΌμ΄ μκΈ°μ§ μκ³  new ν€μλλ₯Ό μ¬μ©ν΄ ν΄λΉ ν΄λμ€μ μΈμ€ν΄μ€λ₯Ό μμ±ν΄μΌ νλ€
let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");
let emil = new Student("Emil", "Katz", 3)

console.log("original : ", emil, emil.firstName);

emil.firstName = "E-mail";
console.log("updated : ", emil, emil.firstName);