// function Person(name,age){
//     this.name = name;
//     this.age = age;
//     this.talk();
// }

// Person.prototype.talk = function(){
//     console.log(`${this.name} saying Woff Woff`);
// }

        // Doing all the upper stuff using classes in a proper manner
        // Also using inheritance in furthur classes

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.talk();
    }

    talk(){
        console.log(`${this.name} saying woff woff`);
    }
}

class Student extends Person{
    constructor(name, age, marks){
        super(name,age);
        this.marks = marks;
    }
}

class Teacher extends Person {
    constructor(name, age,subject) {
        super(name,age);
        this.subject = subject;
    }
} 


let p1 = new Person("Rahul", 19);
let p2 = new Person("Sumir", 19);
let p3 = new Person("Yashasvi", 19);