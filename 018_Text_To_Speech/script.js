// Function for convert to speech
function convertToSpeech(){
    let text = document.getElementById("text-to-convert").value;
    let voiceSelect = document.getElementById("voice-select");
    let selectVoice = voiceSelect.options[voiceSelect.selectedIndex].value;

    // Check if browser supports speech synthesis
    if('speechSynthesis' in window){
        // Create speechSynthesisUtterance Object
        let utterance = new SpeechSynthesisUtterance(text);

        // Set voice
        let voice = window.speechSynthesis.getVoices();
        utterance.voice = voice[selectVoice];

        // speak text
        window.speechSynthesis.speak(utterance)
    }else{
        alert("Sorry , your browser doesn't support text-to-speech!");
    }
}

// Function for stop speaking
function stopSpeaking(){
    window.speechSynthesis.cancel()
}

// Populate voice options 
function populateVoiceList(){
    let voices = window.speechSynthesis.getVoices();
    let voiceSelect = document.getElementById("voice-select");
    voiceSelect.innerHTML = '';

    voices.forEach(function(voice,i){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = voice.name + '(' + voice.lang + ')';
        voiceSelect.appendChild(option);
    });
}

populateVoiceList();
if(speechSynthesis.onvoiceschanged !== undefined){
    speechSynthesis.onvoiceschanged = populateVoiceList;
}