// Chatbot Functionality
async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput) return;

    const chatLog = document.getElementById("chat-log");
    chatLog.innerHTML += `<div class="user-message">${userInput}</div>`;

    const response = await fetch('/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput })
    });
    const data = await response.json();
    chatLog.innerHTML += `<div class="bot-message">${data.reply}</div>`;

    let breathingInterval;
function startBreathingExercise() {
    const circle = document.getElementById('breathing-circle');
    let scale = 1;
    let growing = true;

    breathingInterval = setInterval(() => {
        scale = growing ? scale + 0.1 : scale - 0.1;
        circle.style.transform = `scale(${scale})`;

        if (scale >= 1.5) growing = false;
        if (scale <= 1) growing = true;
    }, 100);
}

function stopBreathingExercise() {
    clearInterval(breathingInterval);
}
document.querySelector("button").addEventListener("click", async () => {
    const userMessage = document.getElementById("chat-input").value;
    const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage })
    });
    const data = await response.json();
    const botResponse = data.response;

    const chatLog = document.getElementById("chat-log");
    chatLog.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    chatLog.innerHTML += `<p><strong>Bot:</strong> ${botResponse}</p>`;
    document.getElementById("chat-input").value = "";
});

document.querySelector("#generate-timetable").addEventListener("click", async () => {
    const subjects = Array.from(document.querySelectorAll(".subject-input"))
        .map(input => input.value);

    const response = await fetch("http://127.0.0.1:5000/generate-timetable", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subjects })
    });
    const timetable = await response.json();

    const output = document.getElementById("generated-timetable");
    output.innerHTML = Object.entries(timetable)
        .map(([time, subject]) => `<p>${time}: ${subject}</p>`)
        .join("");
});
}

const words = ["care", "talk", "listen"]; // Words to randomly switch
    const wordElement = document.getElementById('changeable-word'); // Get the span element

    function changeWord() {
        const randomIndex = Math.floor(Math.random() * words.length); // Get random index
        wordElement.textContent = words[randomIndex]; // Change the text
    }

    setInterval(changeWord, 2000); // Change the word every 3 seconds