/** 🌟 Static 키워드
 * - class 키워드에 종속되는 반면 클래스의 개별 인스턴스 메소드에는 반드시 종속적일 필요가 없는 메소드 혹은 기능들을 생성
 * - 스태틱 메소드는 클래스의 인스턴스화 없이도 호출될 수 있으며 클래스 인스턴스를 통해서는 호출될 수 없다
 * - 이들은 어플리케이션을 위한 유틸리티 기능을 생성하기 위해 사용된다 (개별 인스턴스와는 관계 없다)
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

    static EnrollStudents() {
        return "📜 Enrolling Students .... ";
    }
}

let firstStudent = new Student("Colt", "Steele", 1);
let secondStudent = new Student("Blue", "Steele", 2);

console.log(Student.EnrollStudents()); // 개별 인스턴스 (firstStudent 등) 로는 호출할 수 없다


// ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨

class Point {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
    static distance (a,b) { 
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy); // 거리를 위하기 위한 공식
    }
}

const p1 = new Point ( 5, 5);
const p2 = new Point (10, 10);

console.log(Point.distance(p1, p2));


/** 🌟 Recap 
 * - Classes are blueprints that when created make objects known as instances
 * - Classes are created with the new keyword
 * - The constructor function is a special function that gets run when the class is instantiated
 * - Instance methods can be added to classes similar to methods in objects
 * - Class methods can be added using the static keyword
 * 
 */