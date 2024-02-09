let currentInput = '';

// Function for append number 
function appendNumber(number){
    currentInput += number;
    updateResult();
}

// functions to append the operator
function operate(operator){
    currentInput += operator;
    updateResult();
}

// Function to Clear last input data
function clearInput(){
    currentInput = currentInput.slice(0,-1);
    updateResult();
}

// Function to clear all 
function clearAll(){
    currentInput = '';
    updateResult();
}

// Function to calculate input
function calculate(){
    try {
        const result = eval(currentInput);
        document.getElementById('result').value = result;
        currentInput = result.toString();
    } catch(error){
        document.getElementById('result').value = 'Error';
        currentInput = '';
    }
}

// Function for toggle sign
function toggleSign(){
    if(currentInput.charAt(0) === '-'){
        currentInput = currentInput.slice(1);
    } else {
        currentInput = '-' + currentInput;
    }
    updateResult();
}

// Function for append dot
function appendDot(){
    if(!currentInput.includes('.')){
        currentInput += '.';
        updateResult();
    }
}

// Function for modulus percentage
function modulus() {
    // Parse the current input as a number and divide it by 100
    const inputNumber = parseFloat(currentInput) || 0;
    const result = inputNumber / 100;
    document.getElementById('result').value = result;
    currentInput = result.toString();
}

// Function this update the ouput in the result box
function updateResult() {
    document.getElementById('result').value = currentInput || '0';
}
