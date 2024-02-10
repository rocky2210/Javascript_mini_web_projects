function convertWeight() {
    const weightInput = document.getElementById('weight-input').value.trim();
    const fromUnit = document.getElementById('input-weight').value.toLowerCase();
    const toUnit = document.getElementById('output-weight').value.toLowerCase();
    const errorMessage = document.getElementById('error-message');

    let numericWeight;

    // parse input as a float
    if (!isNaN(parseFloat(weightInput))) {
        numericWeight = parseFloat(weightInput);
    } else {
        errorMessage.innerText = "Please enter a valid number for weight.";
        document.getElementById('output-input').value = '';
        return;
    }

    errorMessage.innerText = '';

    let convertedWeight;

    if (fromUnit === 'kilogram') {
        if (toUnit === 'gram') {
            convertedWeight = numericWeight * 1000;
        } else if (toUnit === 'milligram') {
            convertedWeight = numericWeight * 1e+6;
        } else if (toUnit === 'tonne') {
            convertedWeight = numericWeight / 1000;
        } else if (toUnit === 'pound') {
            convertedWeight = numericWeight * 2.20462;
        } else if (toUnit === 'ounce') {
            convertedWeight = numericWeight * 35.274;
        } else {
            convertedWeight = numericWeight;
        }
    } else if (fromUnit === 'gram') {
        if (toUnit === 'kilogram') {
            convertedWeight = numericWeight / 1000;
        } else if (toUnit === 'milligram') {
            convertedWeight = numericWeight * 1000;
        } else if (toUnit === 'tonne') {
            convertedWeight = numericWeight / 1e+6;
        } else if (toUnit === 'pound') {
            convertedWeight = numericWeight / 453.592;
        } else if (toUnit === 'ounce') {
            convertedWeight = numericWeight / 28.3495;
        } else {
            convertedWeight = numericWeight;
        }
    } else if (fromUnit === 'milligram') {
        if (toUnit === 'kilogram') {
            convertedWeight = numericWeight / 1e+6;
        } else if (toUnit === 'gram') {
            convertedWeight = numericWeight / 1000;
        } else if (toUnit === 'tonne') {
            convertedWeight = numericWeight / 1e+9;
        } else if (toUnit === 'pound') {
            convertedWeight = numericWeight / 453592;
        } else if (toUnit === 'ounce') {
            convertedWeight = numericWeight / 28350;
        } else {
            convertedWeight = numericWeight;
        }
    } else if (fromUnit === 'tonne') {
        if (toUnit === 'kilogram') {
            convertedWeight = numericWeight * 1000;
        } else if (toUnit === 'gram') {
            convertedWeight = numericWeight * 1e+6;
        } else if (toUnit === 'milligram') {
            convertedWeight = numericWeight * 1e+9;
        } else if (toUnit === 'pound') {
            convertedWeight = numericWeight * 2204.62;
        } else if (toUnit === 'ounce') {
            convertedWeight = numericWeight * 35274;
        } else {
            convertedWeight = numericWeight;
        }
    } else if (fromUnit === 'pound') {
        if (toUnit === 'kilogram') {
            convertedWeight = numericWeight / 2.20462;
        } else if (toUnit === 'gram') {
            convertedWeight = numericWeight * 453.592;
        } else if (toUnit === 'milligram') {
            convertedWeight = numericWeight * 453592;
        } else if (toUnit === 'tonne') {
            convertedWeight = numericWeight / 2204.62;
        } else if (toUnit === 'ounce') {
            convertedWeight = numericWeight * 16;
        } else {
            convertedWeight = numericWeight;
        }
    } else if (fromUnit === 'ounce') {
        if (toUnit === 'kilogram') {
            convertedWeight = numericWeight / 35.274;
        } else if (toUnit === 'gram') {
            convertedWeight = numericWeight * 28.3495;
        } else if (toUnit === 'milligram') {
            convertedWeight = numericWeight * 28350;
        } else if (toUnit === 'tonne') {
            convertedWeight = numericWeight / 35274;
        } else if (toUnit === 'pound') {
            convertedWeight = numericWeight / 16;
        } else {
            convertedWeight = numericWeight;
        }
    } else {
        convertedWeight = numericWeight;
    }

    document.getElementById('second-input').value = convertedWeight;
}
