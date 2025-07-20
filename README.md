# Kanban Task Management Project

## Overview

This project is a simple Kanban-style task management board built with HTML, CSS, and JavaScript. It displays tasks categorized into three columns based on their status: TODO, DOING, and DONE. Users can input tasks and their statuses through JavaScript prompts, with validation and console feedback for completed tasks.

---

## Project Structure

- **index.html** — The main HTML file containing the structure of the Kanban board.
- **styles.css** — The stylesheet defining layout, colors, fonts, and responsiveness.
- **script.js** — JavaScript file handling user interaction, task input, validation, and console logging.

---

## HTML Explanation (`index.html`)📃

- The document starts with standard HTML5 doctype and includes essential meta tags for character encoding and responsive design.
- Google Fonts (Plus Jakarta Sans) is linked for consistent typography.
- The favicon and external CSS are linked in the `<head>`.
- The `<body>` contains a sidebar `<nav>` with the logo and board navigation.
- The main layout (`#layout`) contains a sticky header with the board title.
- The content area is divided into three Kanban columns (`TODO`, `DOING`, `DONE`), each with a colored status dot and header showing the count of tasks.
- Each column contains static sample tasks displayed in `.task-div` elements.
- The JavaScript file `script.js` is included at the bottom of the body.

---

## CSS Explanation (`styles.css`)🎨🖌️

- Uses CSS variables for consistent colors, fonts, and sizes.
- Applies a flexbox layout to arrange the sidebar and main content side-by-side.
- The sidebar has a fixed width, a white background, and vertical layout.
- The main layout fills the remaining space and contains a sticky header for board title.
- The Kanban columns are styled using CSS Grid to display three columns side-by-side with gaps.
- Status dots have distinct colors for TODO (blue), DOING (purple), and DONE (green).
- Task cards have padding, shadows, rounded corners, and hover cursor style.
- Responsive styles adjust layout and font sizes for tablets and mobile screens.
- On smaller screens, the sidebar is hidden and the columns stack vertically for better usability.

---

## JavaScript Explanation (`script.js`)⚡📜

- Prompts the user to enter titles, descriptions, and statuses for two separate tasks.
- Converts status inputs to lowercase for consistency.
- Validates the status input to only accept `"todo"`, `"doing"`, or `"done"`. Invalid inputs trigger an alert and a repeated prompt.
- Tracks if any task has a status of `"done"`.
- Logs completed tasks (status `"done"`) with a green checkmark in the console.
- If no tasks are completed, logs a motivational message:  
  `🚀 No tasks completed, let's get to work!`

---

## How to Use🪴

1. Open `index.html` in a modern web browser.
2. The Kanban board displays sample tasks in three columns.
3. When the page loads, JavaScript will prompt you to enter details for two new tasks.
4. Follow the prompts to input task title, description, and status.
5. If you enter an invalid status, you will be asked to re-enter it.
6. Open your browser console (F12 or right-click > Inspect > Console) to see the logged results:
   - Completed tasks will show with a ✅ checkmark.
   - If no tasks are completed, a motivational message will appear.

---

## Notes & Future Improvements📃⚒

- Currently, task inputs only log results to the console; future versions could dynamically update the Kanban board visually.
- The app uses simple prompt-based input; a form UI would improve usability.
- Tasks and states are not saved persistently. Integrating localStorage or a backend could allow data persistence.
- Responsive design ensures usability across devices, but accessibility improvements could be added.

---

## Author🧑🏾‍💻

Lungelo Mavundla

---

Feel free to reach out if you have any questions or feedback!

## References📃
Google Fonts — Plus Jakarta Sans
https://fonts.google.com/specimen/Plus+Jakarta+Sans

MDN Web Docs — HTML
https://developer.mozilla.org/en-US/docs/Web/HTML

MDN Web Docs — CSS
https://developer.mozilla.org/en-US/docs/Web/CSS

MDN Web Docs — JavaScript
https://developer.mozilla.org/en-US/docs/Web/JavaScript

Flexbox Guide (CSS Tricks)
https://css-tricks.com/snippets/css/a-guide-to-flexbox/

CSS Grid Guide (CSS Tricks)
https://css-tricks.com/snippets/css/complete-guide-grid/

Prompt Method (JavaScript)
https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

