// Get the display element
const display = document.getElementById('display');

// Initialize variables to store the inputs and result
let currentInput = '';
let previousInput = '';
let operator = '';

// Function to update the display
function updateDisplay(value) {
    display.value = value;
}

// Handle button clicks
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.getAttribute('data-value');

        // If it's an operator
        if (value === '/' || value === '*' || value === '-' || value === '+') {
            if (currentInput !== '') {
                previousInput = currentInput;
                currentInput = '';
            }
            operator = value;
            updateDisplay(operator);
        } else if (value === '=') {
            // Perform the calculation
            if (operator !== '' && previousInput !== '' && currentInput !== '') {
                const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
                updateDisplay(result);
                currentInput = result;
                previousInput = '';
                operator = '';
            }
        } else {
            // Append numbers or decimal to the current input
            currentInput += value;
            updateDisplay(currentInput);
        }
    });
});

// Handle the clear button
const clearButton = document.querySelector('.btn-clear');
clearButton.addEventListener('click', () => {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay('');
});

// Function to perform arithmetic operations
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 0;
    }
}
