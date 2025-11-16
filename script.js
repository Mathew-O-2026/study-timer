let timeLeft = 0;
let totalTime = 0;
let timer = null;
let isRunning = false;

const display = document.getElementById("display");
const minutesInput = document.getElementById("minutesInput");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const darkModeBtn = document.getElementById("darkModeBtn");
const progressBar = document.getElementById("progressBar");
const alarmSound = document.getElementById("alarmSound");

// Automatically focus input for accessibility
window.onload = () => {
  minutesInput.focus();
};

startBtn.addEventListener("click", () => {
  if (!isRunning && timeLeft === 0) {
    timeLeft = minutesInput.value * 60;
    totalTime = timeLeft;
  }

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
  progressBar.style.width = "0%";
});

// DARK MODE TOGGLE
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

function updateTimer() {
  if (timeLeft <= 0) {
    clearInterval(timer);
    isRunning = false;
    display.textContent = "00:00";

    // Play alarm instead of alert
    alarmSound.play();
    return;
  }

  timeLeft--;

  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  display.textContent =
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Update progress bar
  let progressPercent = 100 - (timeLeft / totalTime) * 100;
  progressBar.style.width = progressPercent + "%";
}
