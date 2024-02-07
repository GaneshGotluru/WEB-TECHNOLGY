document.getElementById("connectToBot").addEventListener("click", startChat);
document.getElementById("sendMessage").addEventListener("click", sendMessage);
document.getElementById("savedMessages").addEventListener("click", loadSavedMessage);
document.getElementById("endChat").addEventListener("click", endChat);
document.getElementById("signOut").addEventListener("click", signOut);

function startChat() {
    // Send a request to your Node.js backend to initiate a chat
    // You can use AJAX or the fetch API
    fetch("/startChat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(response => response.json())
        .then(data => {
            // Handle the chat initiation response, update the UI, etc.
        });
}

function sendMessage() {
    const userMessage = document.getElementById("userMessage").value;
   
    // Display user message in the chat history
    appendToChatHistory("user", userMessage);

    // Send the message to the backend for processing
    fetch("/sendMessage", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the backend or BARD API
            const botResponse = data.response;

            // Display bot response in the chat history
            appendToChatHistory("bot", botResponse);
        });
}

function loadSavedMessage() {
    // Load a saved message when a user clicks on it
    const savedMessage = "This is a saved message."; // Replace with your saved message
    document.getElementById("userMessage").value = savedMessage;
}

function endChat() {
    // End the chat and disconnect from the BARD API
    // Implement as needed
}

function signOut() {
    // Implement user sign-out functionality
    // Implement as needed
}

function appendToChatHistory(sender, message) {
    const chatHistory = document.getElementById("chatHistory");
    const messageElement = document.createElement("div");
    messageElement.className = sender;
    messageElement.textContent = message;
    chatHistory.appendChild(messageElement);
}