// ui.js
import { socket, name } from "./socket.js";

const messageContainer = document.getElementById("message-container");
const messageForm = document.getElementById("send-container");
const messageInput = document.getElementById("message-input");

appendMessage("You joined!");
socket.emit("new-user", name);

socket.on("chat-message", (data) => {
  appendMessage(`${data.name}: ${data.message}`);
});

socket.on("user-connected", (name) => {
  appendMessage(`User ${name} connected`);
});

socket.on("user-disconnected", (name) => {
  appendMessage(`User ${name} disconnected`);
});

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value;
  appendMessage(`You: ${message}`);
  socket.emit("send-chat-message", message);
  messageInput.value = "";
});

function appendMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageContainer.append(messageElement);
}
