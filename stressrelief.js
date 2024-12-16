document.addEventListener("DOMContentLoaded", function () {
    const relaxButton = document.getElementById("relieve-stress");
    const exerciseDisplay = document.getElementById("exercise-display");

    relaxButton.addEventListener("click", function () {
        fetch("/get_exercise")
            .then((response) => response.json())
            .then((data) => {
                exerciseDisplay.textContent = `Try this: ${data.exercise}`;
            })
            .catch((error) => {
                console.error("Error:", error);
                exerciseDisplay.textContent = "Oops! Couldn't fetch an exercise. Please try again.";
            });
    });
});

// stressrelief.js

document.addEventListener("DOMContentLoaded", function() {
    const breathingCircle = document.getElementById("breathing-circle");

    let isBreathing = false;
    const breathingAnimation = () => {
        if (isBreathing) {
            breathingCircle.style.animationPlayState = "running";
            document.getElementById("breathing-animation").innerText = "Breathe In... Breathe Out...";
        } else {
            breathingCircle.style.animationPlayState = "paused";
            document.getElementById("breathing-animation").innerText = "Press 'Start' to begin.";
        }
    };

    // Button to start and stop the breathing exercise
    const breathingButton = document.createElement("button");
    breathingButton.innerText = "Start Breathing Exercise";
    breathingButton.style.marginTop = "20px";
    breathingButton.style.padding = "10px 20px";
    breathingButton.style.fontSize = "1.2rem";
    breathingButton.style.backgroundColor = "#ff66b2";
    breathingButton.style.color = "white";
    breathingButton.style.border = "none";
    breathingButton.style.borderRadius = "8px";
    breathingButton.style.cursor = "pointer";

    breathingButton.onclick = function() {
        isBreathing = !isBreathing;
        breathingAnimation();
    };

    // Append the button to the body
    document.querySelector(".stress-relief-container").appendChild(breathingButton);
});