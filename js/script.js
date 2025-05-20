'use strict';

const min = document.querySelector('.minutes');
const sec = document.querySelector('.seconds');
const btn = document.querySelector('.btn-container');
const circle = document.querySelector('circle');

// Circle progress bar
const radius = 100;
const circumference = 2 * Math.PI * radius;
console.log(circumference);
circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

// Dynamic full year
document.querySelector('.year').textContent = new Date().getFullYear();

let minCount = 19;
let secCount = 59;
let isRunning = true;
let interval;

const reset = function (initialMin = '00', initialSec = '00') {
  clearInterval(interval);
  min.textContent = initialMin;
  sec.textContent = initialSec;
  circle.classList.remove('animate');
  isRunning = true;
  minCount = 19;
  secCount = 59;
};

btn.addEventListener('click', function (e) {
  if (e.target.classList.contains('start')) {
    e.target.classList.add('hidden');
    document.querySelector('[data-state="stop"]').classList.remove('hidden');
    // if (btn.classList.contains('hidden')) btn.classList.toggle('hidden');

    if (isRunning) {
      isRunning = false;
      circle.classList.add('animate');
      console.log('clicked');
      interval = setInterval(() => {
        min.textContent = minCount <= 9 ? `${0}${minCount}` : minCount;
        sec.textContent = secCount <= 9 ? `${0}${secCount}` : secCount;

        secCount--;
        if (secCount < 0) {
          minCount--;
          secCount = 59;
          if (minCount < 0) reset();
        }
      }, 1000);
    }
  } else {
    e.target.classList.add('hidden');
    document.querySelector('[data-state="start"]').classList.remove('hidden');
    reset('20');
  }
});
