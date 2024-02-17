const chargeLevel = document.getElementById("charge-level");
const charge = document.getElementById("charge");
const chargeTime = document.getElementById("charging-time");

// Function to run when the window is loaded
window.onload = function(){

    // Checking if the browser supports the battery status API
        if(!navigator.getBattery){  // The navigator object contains information about the browser.The navigator object is a property of the window object
            alert("Battery Status Api Is Not Supported In Your Browser");
            return false;
    }
}

// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getBattery
// https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API
// Getting battery information using the battery status API
navigator.getBattery().then(function(battery){

    // Function to update all battery information
    function updateAllBatteryInfo(){
        updateChargingInfo();
        updateLevelInfo();
    }

    // Initial update of battery information
    updateAllBatteryInfo();

    // Event listener for changes in battery charging status
    battery.addEventListener("chargingchange",function(){
        updateAllBatteryInfo();
    });

    // Event listener for changes in battery level
    battery.addEventListener("levelchange",function(){
        updateAllBatteryInfo();
    });

    // Function to update charging information
    function updateChargingInfo(){
        if(battery.charging){
            charge.classList.add("active");
            chargeTime.innerHTML = "";
        }else{
            charge.classList.remove("active");
        
            // Display time left to discharge only when it is an integer value i.e not infinity
            if(parseInt(battery.dischargingTime)){
                let hr = parseInt(battery.dischargingTime/ 3600);
                let min = parseInt(battery.dischargingTime / 60 - hr * 60);
                chargeTime.innerHTML = `${hr}hr ${min}mins remaining`;
            }
        }
    }

    // Function to update battery level information
    function updateLevelInfo(){
        let batteryLevel = parseInt(battery.level * 100);
        let batteryGradient = "";

        // Set gradient based on battery level
        if (batteryLevel <= 20) {
            batteryGradient = "var(--gradient-color-red)";
        } else if (batteryLevel <= 50) {
            batteryGradient = "var(--gradient-color-orange)";
        } else if (batteryLevel <= 80) {
            batteryGradient = "var(--gradient-color-yellow)";
        } else {
            batteryGradient = "var(--gradient-color-green)";
        }

        charge.style.width = batteryLevel - 6 + "%";
        charge.style.background = batteryGradient;
        chargeLevel.textContent = batteryLevel + "%";
    }
});