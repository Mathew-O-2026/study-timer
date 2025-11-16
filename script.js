let timeLeft = 0;
let timer = null;
let isRunning = false; // track if timer is currently active

const display = document.getElementById("display");
const minutesInput = document.getElementById("minutesInput");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

startBtn.addEventListener("click", () => {

  // Only set the timer if it has not started yet
  if (!isRunning && timeLeft === 0) {
    timeLeft = minutesInput.value * 60;
  }

  // Start/resume the countdown
  clearInterval(timer);
  timer = setInterval(updateTimer, 1000);
  isRunning = true;
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  timeLeft = 0;
  isRunning = false;
  display.textContent = "00:00";
});

function updateTimer() {
  if (timeLeft <= 0) {
    clearInterval(timer);
    alert("Time's up!");
    isRunning = false;
    return;
  }

  timeLeft--;

  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  display.textContent =
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
