'use strict';

const min = document.querySelector('.minutes');
const sec = document.querySelector('.seconds');

const year = document.querySelector('.year');
const date = new Date();
const getYear = date.getFullYear();
year.textContent = getYear;

console.log(+min.textContent);
// setTimeout(() => console.log('delayed 3 secs'), 3000);
let minCount = +min.textContent;
let secCount = +sec.textContent;
const interval = setInterval(() => {
  secCount--;
  const interval2 = setInterval(() => {
    if (secCount === 0) minCount--;
  }, 1000);
  console.log(minCount, secCount);
}, 1000);
