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