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

  console.log('Are both imputs filled?');

  if (date1.value && date2.value) {
      console.log('Yes.');
      calculateDaysButton.disabled = false;
    
  } else {
      console.log('No. One or both inputs are empty.');
      calculateDaysButton.disabled = true;
  }
}

/* STEP 4a: Add an 'on click' event listener to the 'calculate days' button */
calculateDaysButton.addEventListener('click', calculateDaysDifference);

/* STEP 4b Add a function that calculates the days */
function calculateDaysDifference() {

    // Log the input field values
    console.log("Date 1: " + date1.value);
    console.log("Date 2: " + date2.value);

    // Create 'moments' from input field values and log the formatted dates
    const firstdate = moment(date1.value, "YYYY-MM-DD");
    const seconddate = moment(date2.value, "YYYY-MM-DD");
    
    console.log("Moment Date 1: " + firstdate.format("YYYY MM DD"));
    console.log("Moment Date 2: " + seconddate.format("YYYY MM DD"));

    // Calculate the days difference between date1 and date2
    const daysDifference = Math.abs(firstdate.diff(seconddate, 'days'));

    // Log the days difference and display the result
    console.log("Difference between days: " + daysDifference);
    result.textContent = daysDifference;

    document.getElementById('calculator-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
}

/* --BACK BUTTON ON RESULTS "PAGE"-- */

// Add an event listener for the Back button
const backButton = document.getElementById('back');
backButton.addEventListener('click', goBack);

function goBack() {
  document.getElementById('calculator-container').style.display = 'block';
  document.getElementById('result-container').style.display = 'none';
}