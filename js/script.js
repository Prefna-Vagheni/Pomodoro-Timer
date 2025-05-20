'use strict';

const min = document.querySelector('.minutes');
const sec = document.querySelector('.seconds');
const btn = document.querySelector('.btn-container');

const getYear = new Date().getFullYear();
document.querySelector('.year').textContent = getYear;

let minCount = 19;
let secCount = 59;
let interval;
let canStart = true;

const reset = function (m = '00', s = '00') {
  clearInterval(interval);
  min.textContent = m;
  sec.textContent = s;
  canStart = true;
};

btn.addEventListener('click', function (e) {
  if (e.target.classList.contains('start')) {
    e.target.classList.add('hidden');
    document.querySelector('[data-state="stop"]').classList.remove('hidden');
    if (btn.classList.contains('hidden')) btn.classList.toggle('hidden');
    if (canStart) {
      canStart = false;
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
