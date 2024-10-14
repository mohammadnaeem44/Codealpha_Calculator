// Get the display element
const display = document.getElementById("display");

// Append the value to the display when a button is clicked
function appendToDisplay(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Calculate the result
function calculateResult() {
  try {
    // Use eval to compute the result
    display.value = eval(display.value);
  } catch (e) {
    // If there is an error, clear the display
    display.value = "Error";
  }
}
