let timeLeft = 0;
let timer = null;

const display = document.getElementById("display");
const minutesInput = document.getElementById("minutesInput");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

startBtn.addEventListener("click", () => {
  timeLeft = minutesInput.value * 60;
  
  clearInterval(timer);
  timer = setInterval(updateTimer, 1000);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timer);
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  timeLeft = 0;
  display.textContent = "00:00";
});

function updateTimer() {
  if (timeLeft <= 0) {
    clearInterval(timer);
    alert("Time's up!");
    return;
  }

  timeLeft--;

  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  display.textContent =
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
