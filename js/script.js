'use strict';

const min = document.querySelector('.minutes');
const sec = document.querySelector('.seconds');

const getYear = new Date().getFullYear();
document.querySelector('.year').textContent = getYear;

let minCount = 0;
let secCount = 10;

document.querySelector('.start').addEventListener('click', function () {
  const interval = setInterval(() => {
    min.textContent = minCount <= 9 ? `${0}${minCount}` : minCount;
    sec.textContent = secCount <= 9 ? `${0}${secCount}` : secCount;

    secCount--;
    if (secCount < 0) {
      minCount--;
      secCount = 59;
      if (minCount < 0) clearInterval(interval);
    }
  }, 1000);
});
