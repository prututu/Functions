

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
    document.getElementById('result').style.fontSize = 'px';

    // hide tabs
    document.getElementById('daysbetween').style.display = 'none';
    document.getElementById('addsubdays').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('tabs').style.display = 'none';

}


/* --ADD/SUBTRACT DAYS-- */

/* STEP 1: Define important things
- base date
- number of days to add/subtract
*/

const baseDate = document.getElementById('base-date');
const numDays = document.getElementById('num-days');

/* STEP 2: Define buttons
- button to fill date feild with today's date
- add button
- subtract button
*/

const baseTodayButton = document.getElementById('base-today');
const addDaysButton = document.getElementById('add-days');
const subtractDaysButton = document.getElementById('subtract-days');

/* STEP 3: add event listeners
- when user clicks the today button, setBaseToday fuction is triggered
- when user inputs the base date or number of days, checkBaseInputs function is triggered
- when user clicks the add/subtract buttons, their respective functions are triggered 
*/

baseTodayButton.addEventListener('click', setBaseToday);

baseDate.addEventListener('input', checkBaseInputs);
numDays.addEventListener('input', checkBaseInputs);

addDaysButton.addEventListener('click', addDays);
subtractDaysButton.addEventListener('click', subtractDays);

/*STEP 4: Add functions 
- set the base date to today's date
- disables the add/subtract buttons unless both fields are filled in
- adds the days to the base date
- subtracts the days from the base date
*/

function setBaseToday() {
  const currentDate = new Date();
  baseDate.valueAsDate = currentDate;
  checkBaseInputs();
}

function checkBaseInputs() {

  console.log('Are both imputs filled?');

  if (baseDate.value && numDays.value) {
    console.log('Yes.')
    addDaysButton.disabled = false;
    subtractDaysButton.disabled = false;

  } else {
    console.log('No. One or both inputs are empty.')
    addDaysButton.disabled = true;
    subtractDaysButton.disabled = true;
  }
}

function addDays() {
  const baseMoment = moment(baseDate.value, "YYYY-MM-DD");
  const newDate = baseMoment.add(parseInt(numDays.value));
  displayResult(newDate.format('MMMM D, YYYY'));
}

function subtractDays() {
  const baseMoment = moment(baseDate.value, "YYYY-MM-DD");
  const newDate = baseMoment.subtract(parseInt(numDays.value));
  displayResult(newDate.format('MMMM D, YYYY'));
}

//RESULT 

function displayResult(resultText) {
  result.textContent = resultText;

  // hide tabs
  document.getElementById('daysbetween').style.display = 'none';
  document.getElementById('addsubdays').style.display = 'none';
  document.getElementById('result-container').style.display = 'block';
  document.getElementById('tabs').style.display = 'none';

//smaller font size
  document.getElementById('result').style.fontSize = '30px';
  

//hide 'days'
  console.log('hide days')
  document.getElementById('days').style.display = 'none';

}

/* --BACK BUTTON ON RESULTS "PAGE"-- */

// Add an event listener for the Back button
const backButton = document.getElementById('back');
backButton.addEventListener('click', goBack);

function goBack() {
  location.reload();
}


/* --RESULTS PAGE FILTERS--*/

const bluebutton = document.getElementById("bluebutton");
const yellowbutton = document.getElementById("yellowbutton");
const sharkbutton = document.getElementById("sharkbutton");

bluebutton.addEventListener("click", goblue);
yellowbutton.addEventListener("click", goyellow);
sharkbutton.addEventListener("click", goshark);


function goblue() {
  console.log("goblue");
  document.body.classList.remove('shark-text');
  document.body.classList.remove('yellow-text');
  document.body.classList.toggle('blue-text');

  document.getElementById('sharkbutton').style.borderColor = 'transparent'; // Set border color to transparent
  document.getElementById('yellowbutton').style.borderColor = 'transparent'; // Set border color to transparent
  document.getElementById('bluebutton').style.borderColor = 'white'; // Set border color to white

}

function goyellow() {
  console.log("goyellow")
  document.body.classList.remove('blue-text'); 
  document.body.classList.remove('shark-text');
  document.body.classList.toggle('yellow-text');

  document.getElementById('bluebutton').style.borderColor = 'transparent'; // Set border color to transparent
  document.getElementById('sharkbutton').style.borderColor = 'transparent'; // Set border color to transparent
  document.getElementById('yellowbutton').style.borderColor = 'white'; // Set border color to white
}

function goshark() {
  console.log("goshark")
  document.body.classList.remove('blue-text'); 
  document.body.classList.remove('yellow-text')
  document.body.classList.toggle('shark-text')

  document.getElementById('bluebutton').style.borderColor = 'transparent'; // Set border color to transparent
  document.getElementById('yellowbutton').style.borderColor = 'transparent'; // Set border color to transparent
  document.getElementById('sharkbutton').style.borderColor = 'white'; // Set border color to white
}




// TAB SWITCHING

const betweenDaysButton = document.getElementById('between-days');
const addSubDaysButton = document.getElementById('add-sub-days');

betweenDaysButton.addEventListener('click', showDaysBetween);
addSubDaysButton.addEventListener('click', showAddSubDays);

// function to update the tab states
function updateTabStates(selectedTab) {
  if (selectedTab === 'betweenDays') {
      betweenDaysButton.classList.add('selected-tab');
      betweenDaysButton.classList.remove('deselected-tab');

      addSubDaysButton.classList.add('deselected-tab');
      addSubDaysButton.classList.remove('selected-tab');
  } else {
      addSubDaysButton.classList.add('selected-tab');
      addSubDaysButton.classList.remove('deselected-tab');

      betweenDaysButton.classList.add('deselected-tab');
      betweenDaysButton.classList.remove('selected-tab');
  }
}
function showDaysBetween() {
  document.getElementById('daysbetween').classList.remove('hidden');
  document.getElementById('addsubdays').classList.add('hidden');
  updateTabStates('betweenDays');
}

function showAddSubDays() {
  document.getElementById('daysbetween').classList.add('hidden');
  document.getElementById('addsubdays').classList.remove('hidden');
  updateTabStates('addSubDays');
}


// CLEAR BUTTONs

// Clear button for the "between days" section
const clearButton1 = document.getElementById('clearButton1');
clearButton1.addEventListener('click', clearBetweenDaysInputs);

function clearBetweenDaysInputs() {
  document.getElementById('date1').value = '';
  document.getElementById('date2').value = '';
  calculateDaysButton.disabled = true; // Disable the calculate button
}

// Clear button for the "add/subtract days" section
const clearButton2 = document.getElementById('clearButton2');
clearButton2.addEventListener('click', clearAddSubDaysInputs);

function clearAddSubDaysInputs() {
  document.getElementById('base-date').value = '';
  document.getElementById('num-days').value = '';
  addDaysButton.disabled = true; // Disable the add button
  subtractDaysButton.disabled = true; // Disable the subtract button
}