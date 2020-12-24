const inputSection = document.querySelector('.input-section');
const factBtn = document.querySelector('.fact-button');
const outputSection1 = document.querySelector('.output-section-1');
const outputSection2 = document.querySelector('.output-section-2');

function getFact() {
  if (inputSection.value === '') {
    outputSection.innerText = 'No Year No Fact, please enter your birth year.';
  }
  checkPrime(parseInt(inputSection.value));
  checkLeapYear(parseInt(inputSection.value));
}

function checkPrime(year) {
  let check = true;

  if (year === 0 || year === 1) {
    check = false;
  } else {
    for (let i = 2; i < year; i++) {
      if (year % i === 0) {
        check = false;
        break;
      }
    }
  }
  if (check) {
    outputSection1.innerText = 'Your birth year is a prime number!';
  } else {
    outputSection1.innerText = 'Your birth year is not a prime number!';
  }
}

function checkLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)) {
    outputSection2.innerText = 'Your birth year is a leap year!';
  } else {
    outputSection2.innerText = 'Your birth year is not a leap year!';
  }
}

factBtn.addEventListener('click', getFact);
