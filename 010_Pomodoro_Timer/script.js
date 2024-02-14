document.addEventListener("DOMContentLoaded",function(){
    const audioBeep = document.getElementById('beep');
    let breakLength = 5;
    let sessionLength = 25;
    let currentTimerInSec = 1500;
    let isWorking = true;
    let isRunning = false;
    let timerInterval;

    // Function for time format
    function formatTime(seconds){
        const min = Math.floor(seconds/60);
        const sec = seconds % 60;
        return `${min < 10 ? "0" : "" }${min}:${sec < 10 ? "0" : ""}${sec}`;
    }

    // Function for increment
    function Increment(type){

        // Session increment
        if(type === "s"){
            if(sessionLength >= 60) return;
            sessionLength++;
            if(isWorking){
                currentTimerInSec = sessionLength * 60;
                if(isRunning){
                    isRunning = false;
                }
            }
        }// break  length
        else{
            if(breakLength >= 60) return;
            breakLength++;
            if(!isWorking){
                currentTimerInSec = breakLength * 60;
                if(isRunning){
                    isRunning = false;
                }
            }
        }
        document.getElementById("session-length").innerHTML = sessionLength;
        document.getElementById("break-length").innerHTML = breakLength;
        if(!isRunning){
            document.getElementById("time-left").innerHTML = formatTime(currentTimerInSec);
        }
    }

    // Function for decrement
    function Decrement(type){
        // session length
        if(type === "s"){
            if(sessionLength <= 2){ 
            // alert("Error: Session time must be 2 minutes or longer.");
            document.getElementById("errorMessage").innerHTML = "Session time must be 2 minutes or longer.";
            // Creating a instance modal
            let errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
            errorModal.show();
            return;
            }
            sessionLength--;
            if(isWorking){
                currentTimerInSec = sessionLength * 60;
                if(isRunning){
                    isRunning = false;
                }
            }
        }
        // break length
        else{
            if(breakLength <= 2){ 
                // alert("Error: break time must be 2 minutes or longer.");
                document.getElementById("errorMessage").innerHTML = "Break time must be 2 minutes or longer.";
                let errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
                errorModal.show();
                return;
            } 
            breakLength--;
            if(!isWorking){
                currentTimerInSec = breakLength * 60;
                if(isRunning){
                    isRunning = false;
                }
            }
        }
        document.getElementById("session-length").innerText = sessionLength;
        document.getElementById("break-length").innerHTML = breakLength;
        if(!isRunning){
            document.getElementById("time-left").innerHTML = formatTime(currentTimerInSec);
        }
    }

    // Function for play and pause time
    function PlayPause() {
        isRunning = !isRunning;
        const playIcon = document.getElementById("play-icon");
        if (isRunning) {
            playIcon.classList.remove("fa-solid", "fa-circle-play");
            playIcon.classList.add("fa-solid", "fa-pause");
            timerInterval = setInterval(() => {
                if (isRunning && currentTimerInSec > 0) {
                    currentTimerInSec--;
                    document.getElementById("time-left").innerHTML = formatTime(currentTimerInSec);
                } else if (currentTimerInSec === 0 && audioBeep) {
                    audioBeep.play();
                    isWorking = !isWorking;
                if (isWorking) {
                    currentTimerInSec = sessionLength * 60;
                    document.getElementById("timer-label").innerHTML = "Session";
                    notify("Session Complete!", "Time to take a break");
                } else {
                    currentTimerInSec = breakLength * 60;
                    document.getElementById("timer-label").innerHTML = "Break";
                    notify("Break Time!", "Your break is starting now.");
                }
                clearInterval(timerInterval);
                PlayPause();
            }
        }, 1000);
            } else {
                playIcon.classList.remove("fa-pause");
                playIcon.classList.add("fa-circle-play");
                clearInterval(timerInterval);
        }
    }

    // Function for reset
    function Reset(){
        if(audioBeep){
            audioBeep.pause();
            audioBeep.currentTime = 0;
        }
        clearInterval(timerInterval);
        isRunning = false;
        isWorking = true;
        breakLength = 5;
        sessionLength = 25;
        currentTimerInSec = isWorking ? sessionLength * 60 : breakLength * 60;
        document.getElementById("session-length").innerHTML = sessionLength;
        document.getElementById("break-length").innerHTML = breakLength;
        document.getElementById("time-left").innerHTML = formatTime(currentTimerInSec);
        document.getElementById("timer-label").innerHTML = isWorking ? "Session": "Break";
    }

    // Function for notify
    function notify(title,message){
        // checking if the browser supports notification
        if(!("Notification" in window)){
            alert("This browser does not support system notification");
        }else if(Notification.permission === "granted"){
            new Notification(title,{body: message});
        }else if (Notification.permission === "denied"){
            Notification.requestPermission().then(function(permission){
                if(permission === "granted"){
                    new Notification(title,{body: message});
                }
            });
        }
    }

    // Eventlisteners
    document.getElementById("session-increment").addEventListener("click",() => Increment("s"));
    document.getElementById("session-decrement").addEventListener("click",() => Decrement("s"));
    document.getElementById("break-increment").addEventListener("click",() => Increment("b"));
    document.getElementById("break-decrement").addEventListener("click",() => Decrement("b"));
    document.getElementById("start-stop").addEventListener("click",PlayPause);
    document.getElementById("reset").addEventListener("click",Reset);

    // Calling Reset() function to initialize session and break length on page load.
    Reset();
})
