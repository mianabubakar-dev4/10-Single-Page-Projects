
// Function to update the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to perform calculation
function calculate() {
    let display = document.getElementById('display').value;
    let result = eval(display); // Using eval() for simplicity; consider using a safer alternative in production
    document.getElementById('display').value = result;
}



