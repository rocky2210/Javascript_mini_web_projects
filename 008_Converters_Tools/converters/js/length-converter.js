function convertLength(){
    const lengthInput = document.getElementById('first-input').value.trim();
    const fromUnit = document.getElementById('first-length').value.toLowerCase();
    const toUnit = document.getElementById('output-length').value.toLowerCase();
    const errorMessage = document.getElementById('error-message');

    let numericLength;

    // parse input as a float
    if(!isNaN(parseFloat(lengthInput))){
        numericLength = parseFloat(lengthInput);
    }else{
        errorMessage.innerText = "Please enter a valid number for length";
        document.getElementById('second-input').value = '';
        return;
    }

    errorMessage.innerText = '';

    let convertedLength;

    if(fromUnit === 'meter'){
        if(toUnit === 'centimeter'){
            convertedLength = numericLength * 100;
        }else if(toUnit === 'millimeter'){
            convertedLength = numericLength * 1000;
        }else if(toUnit === 'kilometer'){
            convertedLength = numericLength / 1000;
        }else if(toUnit === 'mile'){
            convertedLength = numericLength / 1609.344;
        }else if(toUnit === 'yard'){
            convertedLength = numericLength * 1.09361;
        }else if(toUnit === 'inch'){
            convertedLength = numericLength * 39.3701;
        }else{
            convertedLength = numericLength;
        }
    }else if(fromUnit === 'centimeter'){
        if(toUnit === 'meter'){
            convertedLength = numericLength / 100;
        }else if(toUnit === 'millimeter'){
            convertedLength = numericLength * 10;
        }else if (toUnit === 'kilometer') {
            convertedLength = numericLength / 100000;
        } else if (toUnit === 'mile') {
            convertedLength = numericLength / 160934.4;
        } else if (toUnit === 'yard') {
            convertedLength = numericLength / 91.44;
        } else if (toUnit === 'inch') {
            convertedLength = numericLength / 2.54;
        } else {
            convertedLength = numericLength;
        }
    }else if (fromUnit === 'millimeter') {
        if (toUnit === 'meter') {
            convertedLength = numericLength / 1000;
        } else if (toUnit === 'centimeter') {
            convertedLength = numericLength / 10;
        } else if (toUnit === 'kilometer') {
            convertedLength = numericLength / 1000000;
        } else if (toUnit === 'mile') {
            convertedLength = numericLength / 1.609e+6;
        } else if (toUnit === 'yard') {
            convertedLength = numericLength / 914.4;
        } else if (toUnit === 'inch') {
            convertedLength = numericLength / 25.4;
        } else {
            convertedLength = numericLength;
        }
    }else if (fromUnit === 'kilometer') {
        if (toUnit === 'meter') {
            convertedLength = numericLength * 1000;
        } else if (toUnit === 'centimeter') {
            convertedLength = numericLength * 100000;
        } else if (toUnit === 'millimeter') {
            convertedLength = numericLength * 1e+6;
        } else if (toUnit === 'mile') {
            convertedLength = numericLength / 1.609;
        } else if (toUnit === 'yard') {
            convertedLength = numericLength * 1093.613;
        } else if (toUnit === 'inch') {
            convertedLength = numericLength * 39370.079;
        } else {
            convertedLength = numericLength;
        }
    } else if (fromUnit === 'mile') {
        if (toUnit === 'meter') {
            convertedLength = numericLength * 1609.344;
        } else if (toUnit === 'centimeter') {
            convertedLength = numericLength * 160934.4;
        } else if (toUnit === 'millimeter') {
            convertedLength = numericLength * 1.609e+6;
        } else if (toUnit === 'kilometer') {
            convertedLength = numericLength * 1.609;
        } else if (toUnit === 'yard') {
            convertedLength = numericLength * 1760;
        } else if (toUnit === 'inch') {
            convertedLength = numericLength * 63360;
        } else {
            convertedLength = numericLength;
        }
    } else if (fromUnit === 'yard') {
        if (toUnit === 'meter') {
            convertedLength = numericLength / 1.09361;
        } else if (toUnit === 'centimeter') {
            convertedLength = numericLength * 91.44;
        } else if (toUnit === 'millimeter') {
            convertedLength = numericLength * 914.4;
        } else if (toUnit === 'kilometer') {
            convertedLength = numericLength / 1093.613;
        } else if (toUnit === 'mile') {
            convertedLength = numericLength / 1760;
        } else if (toUnit === 'inch') {
            convertedLength = numericLength * 36;
        } else {
            convertedLength = numericLength;
        }
    } else if (fromUnit === 'inch') {
        if (toUnit === 'meter') {
            convertedLength = numericLength / 39.3701;
        } else if (toUnit === 'centimeter') {
            convertedLength = numericLength * 2.54;
        } else if (toUnit === 'millimeter') {
            convertedLength = numericLength * 25.4;
        } else if (toUnit === 'kilometer') {
            convertedLength = numericLength / 39370.079;
        } else if (toUnit === 'mile') {
            convertedLength = numericLength / 63360;
        } else if (toUnit === 'yard') {
            convertedLength = numericLength / 36;
        } else {
            convertedLength = numericLength;
        }
    } else {
        convertedLength = numericLength;
    }

    document.getElementById('second-input').value = convertedLength;
}
