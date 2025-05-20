'use strict';

// Select elements
const minDisplay = document.querySelector('.minutes');
const secDisplay = document.querySelector('.seconds');
const btnContainer = document.querySelector('.btn-container');
const circle = document.querySelector('circle');

// Circle settings
const radius = 100;
const circumference = 2 * Math.PI * radius;
circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

// Year update
document.querySelector('.year').textContent = new Date().getFullYear();

// Timer state
let minCount = 19;
let secCount = 59;
let interval = null;
let isRunning = false;

// Update time display
function updateDisplay(min, sec) {
  minDisplay.textContent = min < 10 ? `0${min}` : `${min}`;
  secDisplay.textContent = sec < 10 ? `0${sec}` : `${sec}`;
}

// Reset timer
function resetTimer(initialMin = 20, initialSec = 0) {
  clearInterval(interval);
  isRunning = false;
  minCount = initialMin;
  secCount = initialSec;
  updateDisplay(minCount, secCount);
  circle.classList.remove('animate');
}

// Start timer
function startTimer() {
  if (isRunning) return;
  isRunning = true;
  circle.classList.add('animate');

  interval = setInterval(() => {
    updateDisplay(minCount, secCount);

    if (secCount === 0) {
      if (minCount === 0) {
        resetTimer();
        toggleButtons();
        return;
      }
      minCount--;
      secCount = 59;
    } else {
      secCount--;
    }
  }, 1000);
}

// Toggle button visibility
function toggleButtons() {
  const startBtn = document.querySelector('[data-state="start"]');
  const stopBtn = document.querySelector('[data-state="stop"]');
  startBtn.classList.toggle('hidden');
  stopBtn.classList.toggle('hidden');
}

// Button handler
btnContainer.addEventListener('click', (e) => {
  const target = e.target;

  if (target.classList.contains('start')) {
    toggleButtons();
    startTimer();
  } else if (target.classList.contains('stop')) {
    toggleButtons();
    resetTimer();
  }
});
