function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById('temperature-input').value);
    const fromUnit = document.getElementById('input-degree').value.toLowerCase();
    const toUnit = document.getElementById('output-degree').value.toLowerCase();
    const errorMessage = document.getElementById('error-message');

    if (isNaN(temperatureInput)) {
        errorMessage.innerText = 'Please enter a valid number for temperature.';
        document.getElementById('second-input').value = '';
        return;
    } else {
        errorMessage.innerText = ''; 
    }

    errorMessage.innerText = '';


    let convertedTemperature;

    if (fromUnit === 'celsius') {
        if (toUnit === 'fahrenheit') {
            convertedTemperature = (temperatureInput * 9/5) + 32;
        } else if (toUnit === 'kelvin') {
            convertedTemperature = temperatureInput + 273.15;
        } else {
            convertedTemperature = temperatureInput;
        }
    } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            convertedTemperature = (temperatureInput - 32) * 5/9;
        } else if (toUnit === 'kelvin') {
            convertedTemperature = (temperatureInput - 32) * 5/9 + 273.15;
        } else {
            convertedTemperature = temperatureInput;
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
            convertedTemperature = temperatureInput - 273.15;
        } else if (toUnit === 'fahrenheit') {
            convertedTemperature = (temperatureInput - 273.15) * 9/5 + 32;
        } else {
            convertedTemperature = temperatureInput;
        }
    }

    document.getElementById('second-input').value = convertedTemperature;
}

