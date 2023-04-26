
// --CALCULATE DAYS BETWEEN DATES-- 
// define important things: date 1, date 2, and result

const date1 = document.getElementById('date1');
const date2 = document.getElementById('date2');

const result = document.getElementById('result');
const resultstext = document.getElementById("resultstext");

let now = moment();
console.log(now.format("YYYY MM DD"));

function calculateDays() {
     /* Booger's birthday is "March 18, 2015"
    Simba's birthday is "September 8, 2017". 
    It's hard to do the math just by looking at these dates.
    This converts the dates into a format the computer work with:
    the number of miliseconds that passed since 01/01/1970. Why?
    "Early Unix engineers picked that date arbitrarily because they needed to set a 
    uniform date for the start of time, and New Year's Day, 1970, seemed most convenient."
    Booger's birthday (March 18, 2015): 1426636800000 miliseconds since 01/01/1970
    Simba's birthday (September 8, 2017): 1504828800000 miliseconds since 01/01/1970 */

    const date1Value = new Date(date1.value);
    const date2Value = new Date(date2.value);
   
    console.log("Date 1:" + date1Value)
    console.log("Date 2:" + date2Value)

    console.log(date1.value)
    let firstdate = moment(date1.value, "YYYY-MM-DD");
    console.log(firstdate.format("YYYY MM DD - hh:mm:ss a"));

    console.log(date2.value)
    let seconddate = moment(date2.value, "YYYY-MM-DD");
    console.log(seconddate.format("YYYY MM DD - hh:mm:ss a"));

    console.log(firstdate.diff(seconddate,'days'))
    resultstext.textContent = firstdate.diff(seconddate,'days') + " days"

    /*
    "Difference" — subtract the 2 values
    "Math.abs" — to make sure the difference is a positive number (not negative).
    */

    const timeDifference = Math.abs(date2Value - date1Value);

    /* (Booger's birthday) 1426636800000 - (Simba's birthday) 1504828800000 = 78192000000
    
    divide this by miliseconds in a day

    10000 miliseconds in a second
    60 seconds in a minute
    60 minutes in an hour
    24 hours in a day

    78192000000 / (1000 * 60 * 60 * 24) = 904.6666666666666

    ^ That's not a whole number, so use 'Math.ceil()' a JavaScript thingy that rounds a number to the nearest whole number.*/

    const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    if (!isNaN(days)) {
        result.textContent = `${days} Days`;
    } else {
        result.textContent = "";
    }
     
    let daysbetweendiv= document.getElementById('daysbetweendiv');
    let resultsdiv= document.getElementById('resultsdiv');

    document.getElementById("daysbetweendiv").classList.add("hidden");
    document.getElementById("resultsdiv").classList.remove("hidden");
    
    }

    /* checks if there are values in both date fields
    if both date fields are filled, the button is enabled
    otherwise, the button is disabled  */

function checkInput() {
    if (date1.value && date2.value) {
        calculateButton.disabled = false;
    } else {
        calculateButton.disabled = true;
    }
    }

    /* Whenever you put in or remove a date, the checkInput() 
    function is called to check if the button should be enabled or disabled. */

    date1.addEventListener("change", checkInput);
    date2.addEventListener("change", checkInput);

    /*finds the button on the page*/
    const calculateButton = document.getElementById("calculateButton");

    /*like tying the 'calculateButton' button and to the 'CalculateDays' function, and the string is only pulled when the button is clicked*/

    calculateButton.addEventListener("click", calculateDays);





function goblue() {
  console.log("goblue")
  resultstext.className = 'blue-text';
}

function goyellow() {
  console.log("goyellow")
  resultstext.className = 'yellow-text';
}

// --ADD/SUBTRACT DAYS TO A DATE-- 

/* define important things: 
- the ADD button
- the SUBTRACT button
- the DAYS input
- the DATE input
- the CALCULATE button
- the RESULT
*/

const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const daysInput = document.getElementById("days");
const inputDate = document.getElementById("inputDate");
const calculateNewDateButton = document.getElementById("calculateNewDate");
const newDateResult = document.getElementById("newDateResult");



const bluebutton = document.getElementById("bluebutton");
const yellowbutton = document.getElementById("yellowbutton");

bluebutton.addEventListener("click", goblue);
yellowbutton.addEventListener("click", goyellow);

/* Operation is an empty box that has no content until the user clicks add or subttract */

let operation = "";

/* listen for when someone clicks the 'Add' button, */
addButton.addEventListener("click", () => {
    operation = "add";
    checkNewDateInput();
    });

subtractButton.addEventListener("click", () => {
    operation = "subtract";
    checkNewDateInput();
    });

    daysInput.addEventListener("input", checkNewDateInput);
    inputDate.addEventListener("change", checkNewDateInput);

function checkNewDateInput() {
    if (operation && daysInput.value && inputDate.value) {
    calculateNewDateButton.disabled = false;
    } else {
    calculateNewDateButton.disabled = true;
    }
    }

    calculateNewDateButton.addEventListener("click", () => {
    const days = parseInt(daysInput.value);
    const date = new Date(inputDate.value);

    if (operation === "add") {
    date.setDate(date.getDate() + days);
    } else if (operation === "subtract") {
    date.setDate(date.getDate() - days);
    }

    const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
    });

    const inputDateFormatted = new Date(inputDate.value).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    const operationWord = operation === "add" ? "after" : "before";
    newDateResult.textContent = `${days} days ${operationWord} ${inputDateFormatted} is ${formattedDate}`;

    });

// TABS

const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const browserWindow1 = document.getElementsByClassName("tab-content")[0];
const browserWindow2 = document.getElementsByClassName("tab-content")[1];

tab1.addEventListener("click", () => {
  tab1.classList.add("active");
  tab2.classList.remove("active");
  browserWindow1.classList.remove("hidden");
  browserWindow2.classList.add("hidden");
});

tab2.addEventListener("click", () => {
  tab2.classList.add("active");
  tab1.classList.remove("active");
  browserWindow1.classList.add("hidden");
  browserWindow2.classList.remove("hidden");
});

// TODAY BUTTON

const todayButton1 = document.getElementById("todayButton1");
const todayButton2 = document.getElementById("todayButton2");

function setToday(inputField) {
  const today = new Date();
  const todayISOString = today.toISOString().substring(0, 10);
  inputField.value = todayISOString;
}

todayButton1.addEventListener("click", () => {
  setToday(date1);
  checkInput();
});

todayButton2.addEventListener("click", () => {
  setToday(date2);
  checkInput();
});

//--------------

