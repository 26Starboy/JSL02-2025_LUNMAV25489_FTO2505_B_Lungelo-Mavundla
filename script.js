// Prompt the user to enter task 1 title
const title1 = prompt("Enter Task 1 title:");
// Prompt the user to enter task 1 description
const description1 = prompt("Enter Task 1 description:");
// Prompt and validate task 1 status
let status1 = prompt("Enter Task 1 status (todo, doing, done):").toLowerCase();
while (status1 !== "todo" && status1 !== "doing" && status1 !== "done") {
  alert("Invalid status. Please enter either 'todo', 'doing', or 'done'.");
  status1 = prompt("Re-enter Task 1 status (todo, doing, done):").toLowerCase();
}
// Repeat prompts for task 2
const title2 = prompt("Enter Task 2 title:");
const description2 = prompt("Enter Task 2 description:");
let status2 = prompt("Enter Task 2 status (todo, doing, done):").toLowerCase();
while (status2 !== "todo" && status2 !== "doing" && status2 !== "done") {
  alert("Invalid status. Please enter either 'todo', 'doing', or 'done'.");
  status2 = prompt("Re-enter Task 2 status (todo, doing, done):").toLowerCase();
}
// Check if any task is completed (status: done)
let anyDone = false;
if (status1 === "done") {
  console.log(`✅ Completed Task: ${title1}`);
  anyDone = true;
}
if (status2 === "done") {
  console.log(`✅ Completed Task: ${title2}`);
  anyDone = true;
}
// Show motivational message if no task is done
if (!anyDone) {
  console.log("🚀 No tasks completed, let's get to work!");
}