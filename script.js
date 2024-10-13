// Define necessary variables
const box = document.getElementById("box");
const startBtn = document.getElementById("startBtn");
const result = document.getElementById("result");
const restartBtn = document.getElementById("restartBtn");

// Variable to store the start time
let startTime;

// Event listener for box clicks
box.addEventListener("click", () => {
    if (box.style.backgroundColor === "yellowgreen") {
        const endTime = Date.now();
        const elapsedTime = endTime - startTime;
        result.textContent = `Your Reaction Time: ${elapsedTime} ms`;
    }
});

// Event listener for starting the game
startBtn.addEventListener("click", () => {
    box.style.backgroundColor = "red"; // Change color to red

    // Generate a random time between 3 and 10 seconds
    const randomTime = Math.floor(Math.random() * 8) + 3;

    setTimeout(() => {
        box.style.backgroundColor = "yellowgreen"; // Change color to green
        startTime = Date.now(); // Record the start time
        restartBtn.removeAttribute("disabled"); // Enable the restart button
    }, randomTime * 1000);
});

// Event listener for the restart button
restartBtn.addEventListener("click", () => {
    box.style.backgroundColor = '#ccc'; // Reset box color
    restartBtn.setAttribute("disabled", true); // Disable the restart button
    result.textContent = ""; // Clear the result text
});
