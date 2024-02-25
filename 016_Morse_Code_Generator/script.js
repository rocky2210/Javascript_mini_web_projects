// Morse codes

document.addEventListener("DOMContentLoaded",function(){

    const morseCode = {
        A: ".-",
        B: "-...",
        C: "-.-.",
        D: "-..",
        E: ".",
        F: "..-.",
        G: "--.",
        H: "....",
        I: "..",
        J: ".---",
        K: "-.-",
        L: ".-..",
        M: "--",
        N: "-.",
        O: "---",
        P: ".--.",
        Q: "--.-",
        R: ".-.",
        S: "...",
        T: "-",
        U: "..-",
        V: "...-",
        W: ".--",
        X: "-..-",
        Y: "-.--",
        Z: "--..",
        0: "-----",
        1: ".----",
        2: "..---",
        3: "...--",
        4: "....-",
        5: ".....",
        6: "-....",
        7: "--...",
        8: "---..",
        9: "----.",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "'": ".----.",
        "!": "-.-.--",
        "/": "-..-.",
        "(": "-.--.",
        ")": "-.--.-",
        "&": ".-...",
        ":": "---...",
        ";": "-.-.-.",
        "=": "-...-",
        "+": ".-.-.",
        "-": "-....-",
        _: "..--.-",
        '"': ".-..-.",
        $: "...-..-",
        "@": ".--.-.",
        " ": "/",
    };

    const reverseMorseCode = {};
    // Creating a reverse mapping of morse code to characters
    Object.keys(morseCode).forEach(key => {
        const value = morseCode[key];
        reverseMorseCode[value] = key;
    });

    // Function for transtlate text to the morse code
    function textToMorse(text){
        return text.toUpperCase().split("").map(char => {
            return morseCode[char] || ""; // using morse code mapping , or empty string if not found
        }).join(" "); // joining all with space
    };

    // Functio to translate morse code to the text
    function morseToText(morse){
        return morse.split(" ").map(code=>{
            return reverseMorseCode[code] || ""; // using reverseMorseCode mapping, or empty string if not found
        }).join("");
    }

    // Function to handle translation button click
    document.getElementById("translate").addEventListener("click", function(){
        const inputText = document.getElementById("input").value.trim();
        let outputTranslation;
        if(inputText.startsWith(".") || inputText.startsWith("-")){
            outputTranslation = morseToText(inputText);
        }else{
            outputTranslation = textToMorse(inputText);
        }

        document.getElementById("output").value = outputTranslation;
    });

    // Copy button
    document.getElementById("copyButton").addEventListener("click",function(){
        const outputValue = document.getElementById("output");
        outputValue.select();
        document.execCommand("copy");
        alert("Copied to clipboard!✅");
    })
});