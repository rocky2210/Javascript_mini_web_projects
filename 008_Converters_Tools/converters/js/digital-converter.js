function convertDigital(){
    const digitalInput = document.getElementById('first-input').value.trim();
    const fromUnit = document.getElementById('first-digital').value.toLowerCase();
    const toUnit = document.getElementById('output-digital').value.toLowerCase();
    const errorMessage = document.getElementById('error-message');

    let numericDigital;

    // parse input as a float
    if(!isNaN(parseFloat(digitalInput))){
        numericDigital = parseFloat(digitalInput);
    }else{
        errorMessage.innerText = "Please enter a valid number for digital storage.";
        document.getElementById('second-input').value = '';
        return;
    }

    errorMessage.innerText = '';

    let convertedDigital;

    if(fromUnit === 'byte'){
        if(toUnit === 'kilobyte'){
            convertedDigital = numericDigital / 1024;
        }else if(toUnit === 'megabyte'){
            convertedDigital = numericDigital / (1024 * 1024);
        }else if(toUnit === 'gigabyte'){
            convertedDigital = numericDigital / (1024 * 1024 * 1024);
        }else if(toUnit === 'terabyte'){
            convertedDigital = numericDigital / (1024 * 1024 * 1024 * 1024);
        }else if(toUnit === 'petabyte'){
            convertedDigital = numericDigital / (1024 * 1024 * 1024 * 1024 * 1024);
        }else{
            convertedDigital = numericDigital;
        }
    }else if(fromUnit === 'kilobyte'){
        if(toUnit === 'byte'){
            convertedDigital = numericDigital * 1024;
        }else if(toUnit === 'megabyte'){
            convertedDigital = numericDigital / 1024;
        }else if(toUnit === 'gigabyte'){
            convertedDigital = numericDigital / (1024 * 1024);
        }else if(toUnit === 'terabyte'){
            convertedDigital = numericDigital / (1024 * 1024 * 1024);
        }else if(toUnit === 'petabyte'){
            convertedDigital = numericDigital / (1024 * 1024 * 1024 * 1024);
        }else{
            convertedDigital = numericDigital;
        }
    }else if(fromUnit === 'megabyte'){
        if(toUnit === 'byte'){
            convertedDigital = numericDigital * (1024 * 1024);
        }else if(toUnit === 'kilobyte'){
            convertedDigital = numericDigital * 1024;
        }else if(toUnit === 'gigabyte'){
            convertedDigital = numericDigital / 1024;
        }else if(toUnit === 'terabyte'){
            convertedDigital = numericDigital / (1024 * 1024);
        }else if(toUnit === 'petabyte'){
            convertedDigital = numericDigital / (1024 * 1024 * 1024);
        }else{
            convertedDigital = numericDigital;
        }
    }else if(fromUnit === 'gigabyte'){
        if(toUnit === 'byte'){
            convertedDigital = numericDigital * (1024 * 1024 * 1024);
        }else if(toUnit === 'kilobyte'){
            convertedDigital = numericDigital * (1024 * 1024);
        }else if(toUnit === 'megabyte'){
            convertedDigital = numericDigital * 1024;
        }else if(toUnit === 'terabyte'){
            convertedDigital = numericDigital / 1024;
        }else if(toUnit === 'petabyte'){
            convertedDigital = numericDigital / (1024 * 1024);
        }else{
            convertedDigital = numericDigital;
        }
    }else if(fromUnit === 'terabyte'){
        if(toUnit === 'byte'){
            convertedDigital = numericDigital * (1024 * 1024 * 1024 * 1024);
        }else if(toUnit === 'kilobyte'){
            convertedDigital = numericDigital * (1024 * 1024 * 1024);
        }else if(toUnit === 'megabyte'){
            convertedDigital = numericDigital * (1024 * 1024);
        }else if(toUnit === 'gigabyte'){
            convertedDigital = numericDigital * 1024;
        }else if(toUnit === 'petabyte'){
            convertedDigital = numericDigital / 1024;
        }else{
            convertedDigital = numericDigital;
        }
    }else if(fromUnit === 'petabyte'){
        if(toUnit === 'byte'){
            convertedDigital = numericDigital * (1024 * 1024 * 1024 * 1024 * 1024);
        }else if(toUnit === 'kilobyte'){
            convertedDigital = numericDigital * (1024 * 1024 * 1024 * 1024);
        }else if(toUnit === 'megabyte'){
            convertedDigital = numericDigital * (1024 * 1024 * 1024);
        }else if(toUnit === 'gigabyte'){
            convertedDigital = numericDigital * (1024 * 1024);
        }else if(toUnit === 'terabyte'){
            convertedDigital = numericDigital * 1024;
        }else{
            convertedDigital = numericDigital;
        }
    }else{
        convertedDigital = numericDigital;
    }

    document.getElementById('second-input').value = convertedDigital.toFixed(2) ;
}
