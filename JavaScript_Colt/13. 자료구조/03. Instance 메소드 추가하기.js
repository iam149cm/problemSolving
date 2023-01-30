class Student { // ✨class 는 대문자로 시작
    constructor(firstName, lastName, year) {  // ✨ 생성자
     
        this.firstName = firstName;  // ✨ this keyword - 개별 클래스로부터 생성된 실제 인스턴스를 참조
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }

    fullName() {
        return `🚀 Your full name is ${this.firstName} ${this.lastName}`;
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
}

let firstStudent = new Student("Colt", "Steele", 1);
let secondStudent = new Student("Blue", "Steele", 2);

console.log(firstStudent.markLate(),'👉',firstStudent.markLate(),'👉',firstStudent.markLate());
console.log(secondStudent.addScore(92),'👉',secondStudent.addScore(82),'👉',secondStudent.calculateAverage());

