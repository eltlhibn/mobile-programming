console.log("========================================");
console.log("      STUDENT MANAGEMENT SYSTEM");
console.log("========================================\n");

// School information stored as objects
const school = {
    name: "ABC University",
    location: "Philippines"
};

// Semester details for the current academic year
const semester = {
    term: "1st Semester",
    year: 2026
};

// Parent class representing a generic person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log("Hi, I am " + this.name);
    }
}

// Student class inherits properties and methods from Person
class Student extends Person {
    // Private field used for encapsulation
    #gpa;

    constructor(name, age, course, gpa) {
        super(name, age);
        this.course = course;
        this.#gpa = gpa;
    }

    // Getter method provides controlled access to GPA
    getGPA() {
        return this.#gpa;
    }

    study() {
        console.log(this.name + " is studying.");
    }

    // Demonstration of polymorphism through method overriding
    introduce() {
        console.log("I am " + this.name + ", a student of " + this.course + ".");
    }
}

// Teacher class demonstrating another inherited class
class Teacher extends Person {
    // Private field to protect salary information
    #salary;

    constructor(name, age, subject, salary) {
        super(name, age);
        this.subject = subject;
        this.#salary = salary;
    }

    teach() {
        console.log(this.name + " teaches " + this.subject + ".");
    }

    getSalary() {
        return this.#salary;
    }
}

// Course class representing a school course
class Course {
    constructor(courseName) {
        this.courseName = courseName;
    }

    displayCourse() {
        console.log("Course Offered: " + this.courseName);
    }
}

const students = ["John", "Maria", "Kevin"];
const subjects = ["Programming", "Database", "Networking"];
const grades = [95, 88, 91];

// Creating objects from the Student, Teacher, and Course classes
const student1 = new Student("John", 20, "BSCS", 1.50);
const student2 = new Student("Maria", 19, "BSIT", 1.75);
const teacher1 = new Teacher("Mr. Cruz", 40, "Programming", 50000);
const course1 = new Course("Computer Science");

console.log("School: " + school.name);
console.log("Location: " + school.location);
console.log("Semester: " + semester.term);
console.log("Academic Year: " + semester.year);

console.log("\n========================================");
console.log("STUDENT RECORDS");
console.log("========================================\n");

console.log("Student #1");
console.log("Name   : " + student1.name);
console.log("Age    : " + student1.age);
console.log("Course : " + student1.course);

console.log("\nStudent #2");
console.log("Name   : " + student2.name);
console.log("Age    : " + student2.age);
console.log("Course : " + student2.course);

console.log("\n========================================");
console.log("TEACHER INFORMATION");
console.log("========================================\n");

console.log("Teacher : " + teacher1.name);
console.log("Subject : " + teacher1.subject);

console.log("\n========================================");
console.log("COURSE INFORMATION");
console.log("========================================\n");

course1.displayCourse();

console.log("\n========================================");
console.log("SYSTEM ACTIVITIES");
console.log("========================================\n");

student1.study();
student2.study();
teacher1.teach();
student1.introduce();

console.log("\n========================================");
console.log("PERFORMANCE EVALUATION");
console.log("========================================\n");

// Conditional statements used for performance evaluation
if (grades[0] >= 90) {
    console.log("✓ John is an Honor Student");
}

if (student1.getGPA() < 2.0) {
    console.log("✓ John passed with good standing");
}

if (teacher1.getSalary() > 40000) {
    console.log("✓ Teacher salary is above 40,000");
}

console.log("\n========================================");
console.log("ENROLLED STUDENTS");
console.log("========================================\n");

// Loop used to display all enrolled students
for (let i = 0; i < students.length; i++) {
    console.log((i + 1) + ". " + students[i]);
}

console.log("\n========================================");
console.log("AVAILABLE SUBJECTS");
console.log("========================================\n");

let count = 0;

// While loop used to display all available subjects
while (count < subjects.length) {
    console.log(subjects[count]);
    count++;
}

console.log("\n========================================");
console.log("GRADE REPORT");
console.log("========================================\n");

// For...of loop used to display all grades
for (const grade of grades) {
    console.log(grade);
}

console.log("\n========================================");
console.log("PRIVATE INFORMATION");
console.log("========================================\n");

// Displaying encapsulated data through getter methods
console.log("John's GPA: " + student1.getGPA());
console.log("Teacher Salary: " + teacher1.getSalary());

console.log("\n========================================");
console.log("END OF REPORT");
console.log("========================================");