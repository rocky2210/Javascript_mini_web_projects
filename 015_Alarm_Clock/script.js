const time = document.getElementById("time");
const dateInput = document.getElementById("alarmDate");
const timeInput = document.getElementById("alarmTime");
const button = document.getElementById("setAlarm");
const contan = document.getElementById("alarms");

// Constants
const maxValue = 3;
let count = 0;
let alarmTimesArray = [];
let alarmSound;

// Update time display
function updateTime() {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    time.textContent = formattedTime;
}

// Set alarm function
function setAlarm() {
    const alarmDateValue = dateInput.value.trim();
    const alarmTimeValue = timeInput.value.trim();

    // Just validating the data before setting alarm
    if (!alarmDateValue || !alarmTimeValue) {
        alert("Please select both a date and a time for the alarm.");
        return;
    }

    const now = new Date();
    const selectedDate = new Date(alarmDateValue + "T" + alarmTimeValue);

    if (selectedDate <= now) {
        alert("Invalid time. Please select a future date and time.");
        return;
    }
    if (alarmTimesArray.includes(selectedDate.toString())) {
        alert("You cannot set multiple alarms for the same time.");
        return;
    }
    if (count >= maxValue) {
        alert("You can only set a maximum of 3 alarms.");
        return;
    }

    const timeUntilAlarm = selectedDate - now;
    const alarmDiv = createAlarmDiv(selectedDate);
    scheduleAlarm(alarmDiv, selectedDate, timeUntilAlarm);
    alarmTimesArray.push(selectedDate.toString());
    updateLocalStorage();
}


// Creating alarm element
function createAlarmDiv(selectedDate) {
    const alarmDiv = document.createElement("div");
    alarmDiv.classList.add("alarm");
    alarmDiv.innerHTML = `
        <span>${selectedDate.toLocaleString()}</span>
        <button class="delete-alarm btn btn-danger">Delete</button>
    `;

    alarmDiv.querySelector(".delete-alarm").addEventListener("click", () => {
        deleteAlarm(alarmDiv, selectedDate);
    });

    return alarmDiv;
}

// Function for Scheduling alarm to trigger
function scheduleAlarm(alarmDiv, selectedDate, timeUntilAlarm) {
    const interVal = setTimeout(() => {
        playAlarmSound();
        deleteAlarm(alarmDiv, selectedDate);
    }, timeUntilAlarm);

    contan.appendChild(alarmDiv);
    count++;
}

// Function for delete the alarm
function deleteAlarm(alarmDiv, selectedDate) {
    alarmDiv.remove();
    count--;
    const alarmIndex = alarmTimesArray.indexOf(selectedDate.toString());
    if (alarmIndex !== -1) {
        alarmTimesArray.splice(alarmIndex, 1);
    }
    updateLocalStorage();
}

// Function to update local storage
function updateLocalStorage() {
    localStorage.setItem('alarmTimes', JSON.stringify(alarmTimesArray));
}

// Function to retrieve alarm times from local storage
function retrieveFromLocalStorage() {
    const storedAlarms = localStorage.getItem('alarmTimes');
    if (storedAlarms) {
        alarmTimesArray = JSON.parse(storedAlarms);
        alarmTimesArray.forEach(timeString => {
            const selectedDate = new Date(timeString);
            const timeUntilAlarm = selectedDate - new Date();
            if (timeUntilAlarm > 0) {
                const alarmDiv = createAlarmDiv(selectedDate);
                scheduleAlarm(alarmDiv, selectedDate, timeUntilAlarm);
                count++;
            }else{
                deleteAlarmFromStorage(timeString);
            }
        });
    }
}

// delete alarm function
function deleteAlarmFromStorage(timeString) {
    const index = alarmTimesArray.indexOf(timeString);
    if (index !== -1) {
        alarmTimesArray.splice(index, 1);
        updateLocalStorage();
    }
}

// Function for initialize the alarm sound
function initializeAlarmSound() {
    const audio = new Audio('alarm.mp3');
    // Preload the audio to ensure it plays immediately when triggered
    audio.preload = 'auto';
    return audio;
}

// Function for play the sound
function playAlarmSound() {
    if (alarmSound.paused) {
        alarmSound.play();
    } else {
        alarmSound.currentTime = 0;
    }
}

// function to initialize
function initialize() {
    updateTime();
    setInterval(updateTime, 1000);
    button.addEventListener("click", setAlarm);
    retrieveFromLocalStorage();
    alarmSound = initializeAlarmSound();
}

initialize();
