// Calculator script

// Function to calculate Date
const calculateAge = () =>{

    // Get today's date
    const today = new Date();

    // Get the input birthdate from the user
    const inputDate = new Date(document.getElementById("data-input").value);

    // Input validation
    if(!inputDate || isNaN(inputDate)){
        alert("Please enter a valid date ❌");
        return;
    }

    // Extracting birth details (day, month, year)
    const birthDetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth() + 1,   // Months are starts from 0 index
        year: inputDate.getFullYear()
    };

    // Get current date details
    const currentDate = today.getDate();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();

    // Check if the birthdate is in the future
    if(isFutureDate(birthDetails, currentYear,currentMonth,currentDate)){
        alert("Not Born Yet 😵");
        displayResult("-","-","-")
        return;
    }

    // Calculate age
    const {years,months,days} = calculateAgeDetails(
        birthDetails,
        currentYear,
        currentMonth,
        currentDate
    );

    // Display the age
    displayResult(days, months, years)
}

// Function to check if the birthdate is in the future
const isFutureDate = (birthDetails, currentYear, currentMonth, currentDate) =>{
    return(
        birthDetails.year > currentYear ||
            (birthDetails.year === currentYear &&
                (birthDetails.month > currentMonth ||
                    (birthDetails.month === currentMonth &&
                        birthDetails.date > currentDate
                    )
                )
            )
        );
};

// Function to calculate age details (year, months, deays)
const calculateAgeDetails = (
    birthDetails,
    currentYear,
    currentMonth,
    currentDate
    )=>{
        let years = currentYear - birthDetails.year;
        let months, days;

    if(currentMonth < birthDetails.month){
        years--;
        months = 12 - (birthDetails.month - currentMonth);
    }else{
        months = currentMonth - birthDetails.month;
    }

    if (currentDate < birthDetails.date){
        months--;
        const lastmonth = currentMonth === 1 ? 12 : currentMonth - 1;
        const daysinLastMonth = getDaysInMonth(lastmonth,currentYear);
        days = daysinLastMonth - (birthDetails.date - currentDate);
    }else{
        days = currentDate - birthDetails.date;
    }
    return{years,months,days};
};

const getDaysInMonth = (month, year) =>{
    return new Date(year, month,0).getDate(); //the function creates a new Date object with the specified year and month (month is 0-based), and sets the day to 0. When the getDate() method is called on this date object, it returns the last day of the previous month, effectively giving us the number of days in the specified month
}

// Function to display the age
const displayResult = (bdate,bmonth,byear)=>{
    document.getElementById("years").textContent = byear;
    document.getElementById("months").textContent = bmonth;
    document.getElementById("days").textContent = bdate;
}

// Attach the calculateAge function to the button click event
document.getElementById("calculate-button").addEventListener("click",calculateAge);

// Copyright
const copyrightYear = new Date().getFullYear();
document.getElementById("copyright").textContent = copyrightYear;