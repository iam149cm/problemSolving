// https://cs.slides.com/colt_steele/es2015-class-syntax

/** 🌟 What is a class ?
 * - A blueprint for creating objects with pre-defined properties and methods
 * - 사전에 정의된 속성 및 메소드들을 이용해 객체를 생성하기 위한 청사진
 * 
 * - The method to create new objects must be called construtor
 * - The class keyword creates a constant, so you can not redefine it. Watch out for the syntax as well!!
 */

// 새로운 스튜던트를 인스턴스 화 시킬 때 사용되는 특별한 메소드. 청사진 혹은 mold라고 보면 된다
class Student { // class 는 대문자로 시작
    constructor(firstName, lastName, year) { 
        // constructor 내부에서 사용되는 this = 개별 클래스 인스턴스, 즉 개별 Student 인스턴스를 지칭
        this.firstName = firstName; 
        this.lastName = lastName;
        this.grade = year;
    }
}

// class 를 정의하는 것 자체로는 아무 일이 생기지 않고 new 키워드를 사용해 해당 클래스의 인스턴스를 생성해야 한다
let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");
let emil = new Student("Emil", "Katz", 3)

console.log("original : ", emil, emil.firstName);

emil.firstName = "E-mail";
console.log("updated : ", emil, emil.firstName);