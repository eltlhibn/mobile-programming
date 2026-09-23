function showExercise2(num) {

    if (num === 1) {
        alert("Welcome to JavaScript!");
        console.log("This is my first JS program.");
    }

    if (num === 2) {
        let name = "Ella";
        let age = 19;
        let isStudent = true;
        console.log(name, age, isStudent);
    }

    if (num === 3) {
        let num1 = 10;
        let num2 = 5;
        console.log("Sum:", num1 + num2);
        console.log("Difference:", num1 - num2);
        console.log("Product:", num1 * num2);
        console.log("Quotient:", num1 / num2);
    }

    if (num === 4) {
        let userName = prompt("Enter your name:");
        let favNumber = prompt("Enter your favorite number:");
        alert("Hello " + userName + "! Your favorite number is " + favNumber);
    }

    if (num === 5) {
        let userAge = prompt("Enter your age:");
        if (userAge >= 18) {
            alert("You are eligible.");
        } else {
            alert("You are not eligible.");
        }
    }

    if (num === 6) {
        console.log("For loop:");
        for (let i = 1; i <= 10; i++) {
            console.log(i);
        }
    }

    if (num === 7) {
        alert("Button Clicked!");
    }
}


function showExercise3(num) {

    const content = document.getElementById("content");

    if (num === 1) {
        content.innerHTML = `
        <div class="card">
            <h2>Change Background Color</h2>
            <button id="colorBtn">Toggle Color</button>
        </div>`;

        document.getElementById("colorBtn").onclick = function () {
            document.body.style.backgroundColor =
            document.body.style.backgroundColor === "skyblue"
            ? "#f4f6f9"
            : "skyblue";
        };
    }

    if (num === 2) {
        content.innerHTML = `
        <div class="card">
            <h2>Dark Mode Toggle</h2>
            <button id="darkBtn">Toggle Dark Mode</button>
        </div>`;

        document.getElementById("darkBtn")
        .addEventListener("click", () => {

            document.body.style.backgroundColor = "";

            document.body.classList.toggle("dark-mode");
        });
    }

    if (num === 3) {
        content.innerHTML = `
        <div class="card">
            <h2>Add List Item</h2>
            <ul id="list"></ul>
            <button id="addItem">Add Item</button>
        </div>`;

        document.getElementById("addItem").onclick = function () {
            let li = document.createElement("li");
            li.textContent = "New Item";
            document.getElementById("list").appendChild(li);
        };
    }

    if (num === 4) {
        content.innerHTML = `
        <div class="card">
            <h2>Remove Paragraph</h2>
            <p id="para">This paragraph will be removed.</p>
            <button id="removeBtn">Remove</button>
        </div>`;

        document.getElementById("removeBtn").onclick = function () {
            let para = document.getElementById("para");
            if (para) para.remove();
        };
    }

    if (num === 5) {
        content.innerHTML = `
        <div class="card">
            <h2>Character Counter</h2>
            <input type="text" id="inputText">
            <p>Characters: <span id="count">0</span></p>
        </div>`;

        document.getElementById("inputText").oninput = function () {
            document.getElementById("count").textContent =
            this.value.length;
        };
    }

    if (num === 6) {
        content.innerHTML = `
        <div class="card">
            <h2>Addition Calculator</h2>
            <input type="number" id="num1">
            <input type="number" id="num2">
            <button id="calcBtn">Add</button>
            <p id="result"></p>
        </div>`;

        document.getElementById("calcBtn").onclick = function () {
            let n1 = Number(document.getElementById("num1").value);
            let n2 = Number(document.getElementById("num2").value);
            document.getElementById("result").textContent =
            "Result: " + (n1 + n2);
        };
    }

    if (num === 7) {
        content.innerHTML = `
        <div class="card">
            <h2>Change Image</h2>
            <img id="myImage" src="images/image1.jpg" width="250">
            <br><br>
            <button id="imgBtn">Change Image</button>
        </div>`;

        document.getElementById("imgBtn").onclick = function () {
            let img = document.getElementById("myImage");
            img.src = img.src.includes("image1.jpg")
            ? "images/image2.jpg"
            : "images/image1.jpg";
        };
    }

    if (num === 8) {
        content.innerHTML = `
        <div class="card">
            <h2>Mini To-Do List</h2>
            <input type="text" id="todoInput">
            <button id="addTodo">Add</button>
            <ul id="todoList"></ul>
        </div>`;

        document.getElementById("addTodo").onclick = function () {

            let task = document.getElementById("todoInput").value.trim();
            if (task === "") return;

            let li = document.createElement("li");
            li.textContent = task;

            document.getElementById("todoList").appendChild(li);

            document.getElementById("todoInput").value = "";
        };
    }
}




function showExercise4() {

const content = document.getElementById("content");

content.innerHTML = `
<div class="card">

<h2>Student Grade Calculator</h2>

<input type="number" id="quiz" placeholder="Quiz Average (0-100)">
<br>

<input type="number" id="exam" placeholder="Exam Score (0-100)">
<br>

<input type="number" id="mco" placeholder="MCO Score (0-100)">
<br><br>

<button id="calcGrade">Calculate Grade</button>
<button id="resetGrade">Reset</button>

<p id="finalGrade"></p>
<p id="gradeLetter"></p>

</div>
`;

document.getElementById("calcGrade")
.addEventListener("click", () => {

let quiz = Number(document.getElementById("quiz").value);
let exam = Number(document.getElementById("exam").value);
let mco = Number(document.getElementById("mco").value);

let grade = (quiz * 0.20) + (exam * 0.30) + (mco * 0.50);

let letter = "";

if (grade >= 90) letter = "A";
else if (grade >= 80) letter = "B";
else if (grade >= 70) letter = "C";
else if (grade >= 60) letter = "D";
else letter = "F";

document.getElementById("finalGrade").textContent =
"Final Grade: " + grade.toFixed(2);

document.getElementById("gradeLetter").textContent =
"Grade Equivalent: " + letter;

});


document.getElementById("resetGrade")
.addEventListener("click", () => {

document.getElementById("quiz").value = "";
document.getElementById("exam").value = "";
document.getElementById("mco").value = "";

document.getElementById("finalGrade").textContent = "";
document.getElementById("gradeLetter").textContent = "";

});

}


function toggleEx2() {
const menu = document.getElementById("ex2Menu");
menu.style.display =
menu.style.display === "none" ? "block" : "none";
}

function toggleEx3() {
const menu = document.getElementById("ex3Menu");
menu.style.display =
menu.style.display === "none" ? "block" : "none";
}

function toggleEx4() {
const menu = document.getElementById("ex4Menu");
menu.style.display =
menu.style.display === "none" ? "block" : "none";
}