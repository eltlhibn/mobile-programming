console.log("========================================");
console.log("     STUDENT INFORMATION DASHBOARD");
console.log("========================================\n");

// Student information variables using let because values can be updated
let studentName = "John";
let studentAge = 20;
let studentCourse = "BSCS";
let studentYear = 2;
let studentSection = "A";
let tuitionFee = 15000;
let units = 24;
let averageGrade = 91;
let status = "Regular";
let adviser = "Mr. Cruz";

// School information stored as constants that should not change
const school = "ABC University";
const semester = "1st Semester";
const schoolYear = "2026-2027";
const passingGrade = 75;
const maxUnits = 30;
const minUnits = 12;
const dean = "Dr. Santos";
const department = "College of Computing";
const campus = "Main Campus";
const country = "Philippines";

// Arrow functions used for mathematical operations and greetings
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const greet = name => `Welcome, ${name}!`;
const isPassing = grade => grade >= passingGrade;

// Arrays containing student-related data
const grades = [95, 88, 92, 76, 85];
const subjects = ["Programming", "Database", "Networking"];
const students = ["John", "Maria", "Kevin"];

console.log("========================================");
console.log("STUDENT PROFILE");
console.log("========================================");

console.log(`Student Name : ${studentName}`);
console.log(`Age          : ${studentAge}`);
console.log(`Course       : ${studentCourse}`);
console.log(`Year Level   : ${studentYear}`);
console.log(`Section      : ${studentSection}`);
console.log(`Tuition Fee  : ${tuitionFee}`);
console.log(`Units        : ${units}`);
console.log(`Average      : ${averageGrade}`);
console.log(`Adviser      : ${adviser}`);
console.log(`School       : ${school}`);

// Array destructuring to extract values into separate variables
const [grade1, grade2, grade3] = grades;
const [subject1, subject2] = subjects;
const [student1, student2] = students;

console.log("\n========================================");
console.log("DESTRUCTURED ARRAYS");
console.log("========================================");

console.log("Grades   :", grade1, grade2, grade3);
console.log("Subjects :", subject1, subject2);
console.log("Students :", student1, student2);

const studentInfo = {
    id: 1,
    name: "John",
    course: "BSCS"
};

const teacherInfo = {
    id: 101,
    name: "Mr. Cruz",
    subject: "Programming"
};

const courseInfo = {
    code: "CS101",
    title: "Introduction to Computing"
};

// Object destructuring to access object properties easily
const { id, name, course } = studentInfo;
const { subject } = teacherInfo;
const { code, title } = courseInfo;

console.log("\n========================================");
console.log("DESTRUCTURED OBJECTS");
console.log("========================================");

console.log("Student :", id, name, course);
console.log("Subject :", subject);
console.log("Course  :", code, title);

// Spread operator used to create new arrays with additional elements
const moreStudents = [...students, "Sarah", "Mark"];
const moreGrades = [...grades, 90, 93];

console.log("\n========================================");
console.log("SPREAD OPERATOR (ARRAYS)");
console.log("========================================");

console.log(moreStudents);
console.log(moreGrades);

// Spread operator used to copy and update object properties
const updatedStudent = {
    ...studentInfo,
    year: 2
};

const updatedTeacher = {
    ...teacherInfo,
    department: "IT Department"
};

console.log("\n========================================");
console.log("SPREAD OPERATOR (OBJECTS)");
console.log("========================================");

console.log(updatedStudent);
console.log(updatedTeacher);

// map() creates a new array by transforming each element
const doubledGrades = grades.map(grade => grade * 2);
const upperSubjects = subjects.map(subject => subject.toUpperCase());

console.log("\n========================================");
console.log("MAP()");
console.log("========================================");

console.log("Doubled Grades:", doubledGrades);
console.log("Uppercase Subjects:", upperSubjects);

// filter() creates a new array containing only matching elements
const passedGrades = grades.filter(grade => grade >= 80);
const longNames = students.filter(student => student.length > 4);

console.log("\n========================================");
console.log("FILTER()");
console.log("========================================");

console.log("Passed Grades:", passedGrades);
console.log("Long Names:", longNames);

const studentProfile = {
    personal: {
        contact: {
            email: "john@email.com"
        }
    }
};

const teacherProfile = {
    personal: {
        address: {
            city: "Manila"
        }
    }
};

console.log("\n========================================");
console.log("OPTIONAL CHAINING");
console.log("========================================");

// Optional chaining safely accesses nested properties
console.log(studentProfile?.personal?.contact?.email);
console.log(teacherProfile?.personal?.address?.city);

console.log("\n========================================");
console.log("ARROW FUNCTIONS");
console.log("========================================");

console.log("Addition:", add(5, 3));
console.log("Subtraction:", subtract(10, 4));
console.log("Multiplication:", multiply(6, 2));
console.log(greet(studentName));
console.log("Passing Status:", isPassing(85));

console.log("\n========================================");
console.log("SCHOOL INFORMATION");
console.log("========================================");

console.log(`Semester    : ${semester}`);
console.log(`School Year : ${schoolYear}`);
console.log(`Dean        : ${dean}`);
console.log(`Department  : ${department}`);
console.log(`Campus      : ${campus}`);
console.log(`Country     : ${country}`);

console.log("\n========================================");
console.log("END OF REPORT");
console.log("========================================");