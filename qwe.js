// //Завдання 1
// function propsCount(currentObject) {
//     return Object.keys(currentObject).length;
// }
// let mentor = {
//     course: "JS fundamental",
//     duration: 3,
//     direction: "web-development"
// };
// console.log(propsCount(mentor));

// //Завдання 2
// function showProps(obj) {
//     console.log(Object.keys(obj));
//     console.log(Object.values(obj));
// }
// let obj = {
//     q: 3,
//     w: "wasd",
//     e: "qweq"
// }
// showProps(obj);

// //Завдання 3
// class Person {
//     constructor(name, surname) {
//         this.surname = surname;
//         this.name = name;
//     }
//     showFullName() {
//         console.log("Name: " + this.name);
//         console.log("Surname: " + this.surname);
//     }
// }
// class Student extends Person {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }
//     showFullName(middleName) {
//         super.showFullName();
//         console.log("MiddleName: " + middleName);
//     }
//     showCourse() {
//         let course = this.year - 2011;
//         return course;
//     }
// }
// const stud1 = new Student("Petro", "Petrenko", 2015);
// console.log(stud1.showFullName("Petrovych"));
// console.log("Current course: " + stud1.showCourse());

// //Завдання 4
// class Worker {
//     constructor(fullName, dayRate, workingDays) {
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//     }
//     showSalary() {
//         let salary = this.dayRate * this.workingDays;
//         console.log("Salary: " + salary);
//     }
//     #experience = 1.2;
//     showSalaryWithExperience() {
//         let salary = (this.dayRate * this.workingDays) * this.#experience;
//         console.log("Salary with experience: " + salary)
//     }
//     setExperience(experience) {
//         this.#experience = experience;
//     }
//     getExperience() {
//         return this.#experience;
//     }
// }
// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// worker1.showSalary();
// worker1.showSalaryWithExperience();
// worker1.setExperience(1.5);
// console.log(worker1.getExperience());
// worker1.showSalaryWithExperience();

// let worker2 = new Worker("Tom Tomson", 48, 22);
// console.log(worker2.fullName);
// worker2.showSalary();
// worker2.showSalaryWithExperience();
// worker2.setExperience(1.5);
// console.log(worker2.getExperience());
// worker2.showSalaryWithExperience();

// let worker3 = new Worker("Andy Ander", 29, 23);
// console.log(worker3.fullName);
// worker3.showSalary();
// worker3.showSalaryWithExperience();
// worker3.setExperience(1.5);
// console.log(worker3.getExperience());
// worker3.showSalaryWithExperience();

// //Завдання 5
// class GeometricFigure {
//     getArea() {
//         return 0;
//     }

//     toString() {
//         return Object.getPrototypeOf(this).constructor.name;
//     }
// }
// class Triangle extends GeometricFigure {
//     constructor (a, b, c) {
//         super();
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
//     getArea() {
//         let p = (this.a + this.b + this.c) / 2;
//         let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
//         return area;
//     }
// }
// class Square extends GeometricFigure {
//     constructor (a) {
//         super()
//         this.a = a;
//     }
//     getArea() {
//         let area = Math.pow(this.a, 2);
//         return area;
//     }
    
// }
// class Circle extends GeometricFigure {
//     constructor(r) {
//         super()
//         this.r = r;
//     }
//     getArea() {
//         let area = Math.PI * Math.pow(this.r, 2);
//         return area;
//     }
// }
// function handleFigures(figures) {
//         let res = 0;
//         for(let i = 0; i < figures.length; i++) {
//             res += figures[i].getArea();
//             console.log("Geometrical figure: " + figures[i].toString() + " - area: " + figures[i].getArea());
//         }
//         return res;
// }

// let figures = [new Triangle(3, 4, 5), new Square(7), new Circle (5)];

// console.log(handleFigures(figures));
