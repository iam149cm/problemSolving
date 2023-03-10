/** π Static ν€μλ
 * - class ν€μλμ μ’μλλ λ°λ©΄ ν΄λμ€μ κ°λ³ μΈμ€ν΄μ€ λ©μλμλ λ°λμ μ’μμ μΌ νμκ° μλ λ©μλ νΉμ κΈ°λ₯λ€μ μμ±
 * - μ€νν± λ©μλλ ν΄λμ€μ μΈμ€ν΄μ€ν μμ΄λ νΈμΆλ  μ μμΌλ©° ν΄λμ€ μΈμ€ν΄μ€λ₯Ό ν΅ν΄μλ νΈμΆλ  μ μλ€
 * - μ΄λ€μ μ΄νλ¦¬μΌμ΄μμ μν μ νΈλ¦¬ν° κΈ°λ₯μ μμ±νκΈ° μν΄ μ¬μ©λλ€ (κ°λ³ μΈμ€ν΄μ€μλ κ΄κ³ μλ€)
 */


class Student {  
    constructor(firstName, lastName, year) { 
     
        this.firstName = firstName; 
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }

    fullName() {
        return `π Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardies += 1;
        if (this.tardies >= 3) {
            return 'You are expelled!'
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage() {
        let sum = this.scores.reduce(function(a,b) { return a+b;})
        return sum / this.scores.length; 
    }

    static EnrollStudents() {
        return "π Enrolling Students .... ";
    }
}

let firstStudent = new Student("Colt", "Steele", 1);
let secondStudent = new Student("Blue", "Steele", 2);

console.log(Student.EnrollStudents()); // κ°λ³ μΈμ€ν΄μ€ (firstStudent λ±) λ‘λ νΈμΆν  μ μλ€


// β¨β¨β¨β¨β¨β¨β¨β¨β¨β¨β¨β¨β¨β¨β¨β¨β¨β¨β¨β¨β¨β¨β¨β¨β¨β¨β¨β¨

class Point {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
    static distance (a,b) { 
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy); // κ±°λ¦¬λ₯Ό μνκΈ° μν κ³΅μ
    }
}

const p1 = new Point ( 5, 5);
const p2 = new Point (10, 10);

console.log(Point.distance(p1, p2));


/** π Recap 
 * - Classes are blueprints that when created make objects known as instances
 * - Classes are created with the new keyword
 * - The constructor function is a special function that gets run when the class is instantiated
 * - Instance methods can be added to classes similar to methods in objects
 * - Class methods can be added using the static keyword
 * 
 */