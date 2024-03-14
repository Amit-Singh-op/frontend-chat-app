// socket.js
const socket = io("https://backend-chat-app-zoni.onrender.com/");

let name = prompt("What is your name?");

// Function to validate the name
function isValidName(input) {
  // Basic validation: Name should not be empty and should only contain letters
  return input.trim() !== "" && /^[a-zA-Z]+$/.test(input);
}

// Keep prompting until a valid name is entered
while (!isValidName(name)) {
  alert("Please enter a valid name (letters only).");
  name = prompt("What is your name?");
}

export { socket, name };
