/* --CALCULATE DAYS BETWEEN DATES-- */

/* STEP 1: Define important things
- date1
- date2
- today
- result
*/
const date1 = document.getElementById('date1');
const date2 = document.getElementById('date2');

const today1Button = document.getElementById('today1');
const today2Button = document.getElementById('today2');

const calculateDaysButton = document.getElementById('calculate-days');
const result = document.getElementById('result');

/*STEP 2a: Add event listeners to "Today" buttons */

today1Button.addEventListener('click', setToday1);
today2Button.addEventListener('click', setToday2);

/*STEP 2b: Add functions that set the dates to today's date*/

function setToday1() {
  const currentDate = new Date();
  date1.valueAsDate = currentDate;
  checkInputs();
}

function setToday2() {
  const currentDate = new Date();
  date2.valueAsDate = currentDate;
  checkInputs();
}

/* STEP 3a: Add event listeners to the input fields  */

date1.addEventListener('input', checkInputs);
date2.addEventListener('input', checkInputs);

/* STEP 3b: Add a function that 
1. checks whether both inputs are filled
2. if both are filled, the button is enabled (disabled=false)
2. if one or both are not filled, the button is disabled (disabled=true)
*/

function checkInputs() {
  if (date1.value && date2.value) {
    calculateDaysButton.disabled = false;
  } else {
    calculateDaysButton.disabled = true;
  }
}

/* STEP 4a: Add an 'on click' event listener to the 'calculate days' button */
calculateDaysButton.addEventListener('click', calculateDaysDifference);

/* STEP 4b Add a function that calculates the days */
function calculateDaysDifference() {
  const firstdate = moment(date1.value, "YYYY-MM-DD");
  const seconddate = moment(date2.value, "YYYY-MM-DD");
  const daysDifference = Math.abs(firstdate.diff(seconddate, 'days'));
  result.textContent = daysDifference;
}
