// Prompt the user to enter task 1 title
const title1 = prompt("Enter Task 1 title:"); // 👈 Gets the name of the first task from the user

// Prompt the user to enter task 1 description
const description1 = prompt("Enter Task 1 description:"); // 👈 Gets a short description for task 1

// Prompt and validate task 1 status
let status1 = prompt("Enter Task 1 status (todo, doing, done):").toLowerCase(); // 👈 Ask for status and make lowercase
while (status1 !== "todo" && status1 !== "doing" && status1 !== "done") {
  alert("Invalid status. Please enter either 'todo', 'doing', or 'done'."); // 👈 Validate input
  status1 = prompt("Re-enter Task 1 status (todo, doing, done):").toLowerCase();
}

// Repeat prompts for task 2
const title2 = prompt("Enter Task 2 title:"); // 👈 Ask for second task title
const description2 = prompt("Enter Task 2 description:"); // 👈 Ask for second task description
let status2 = prompt("Enter Task 2 status (todo, doing, done):").toLowerCase(); // 👈 Ask and normalize status
while (status2 !== "todo" && status2 !== "doing" && status2 !== "done") {
  alert("Invalid status. Please enter either 'todo', 'doing', or 'done'."); // 👈 Repeat if input invalid
  status2 = prompt("Re-enter Task 2 status (todo, doing, done):").toLowerCase();
}

// Check if any task is completed (status: done)
let anyDone = false; // 👈 Flag to track if a task is completed

if (status1 === "done") {
  console.log(`✅ Completed Task: ${title1}`); // 👈 Log completed task 1
  anyDone = true;
}

if (status2 === "done") {
  console.log(`✅ Completed Task: ${title2}`); // 👈 Log completed task 2
  anyDone = true;
}

// Show motivational message if no task is done
if (!anyDone) {
  console.log("🚀 No tasks completed, let's get to work!"); // 👈 Encourage the user to finish something
}
