/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay= 0
let daysSelected=0

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let monday= document.getElementById("monday")
let tuesday= document.getElementById("tuesday")
let wednesday= document.getElementById("wednesday")
let thursday= document.getElementById("thursday")
let friday= document.getElementById("friday")

function clickedMon() {
    monday.classList.toggle("clicked");
    if ((monday.classList.contains("clicked") == true)) {
        daysSelected++;
    } else {
        daysSelected--;
    }
    recalculate();
}

function clickedTues() {
    tuesday.classList.toggle("clicked");
    if ((tuesday.classList.contains("clicked") == true)) {
        daysSelected++;
    } else {
        daysSelected--;
    }
    recalculate();
}

function clickedWed() {
    wednesday.classList.toggle("clicked");
    if ((wednesday.classList.contains("clicked") == true)) {
        daysSelected++;
    } else {
        daysSelected--;
    }
    recalculate();
}

function clickedThurs() {
    thursday.classList.toggle("clicked");
    if ((thursday.classList.contains("clicked") == true)) {
        daysSelected++
    } else {
        daysSelected--
    }
    recalculate();
}

function clickedFri() {
    friday.classList.toggle("clicked");
    if ((friday.classList.contains("clicked") == true)) {
        daysSelected++
    } else {
        daysSelected--
    }
    recalculate();
}

monday.addEventListener("click", clickedMon);
tuesday.addEventListener("click", clickedTues);
wednesday.addEventListener("click", clickedWed);
thursday.addEventListener("click", clickedThurs);
friday.addEventListener("click", clickedFri);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clearButton= document.getElementById("clear-button")

function clearDays() {
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");
    daysSelected=0;
    clickedFull();
    recalculate();
}

clearButton.addEventListener("click", clearDays)



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

let halfDay= document.getElementById("half")
let fullDay= document.getElementById("full")

function clickedHalf() {
    halfDay.classList.add("clicked");
    fullDay.classList.remove("clicked");
    recalculate();
}

halfDay.addEventListener("click", clickedHalf)

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function clickedFull() {
    fullDay.classList.add("clicked");
    halfDay.classList.remove("clicked");
    recalculate();
}

fullDay.addEventListener("click", clickedFull)


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
// price is also set here

function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    let totalCost;
    if (fullDay.classList.contains("clicked")) {
        totalCost = daysSelected * 35;
        halfDay.classList.remove("clicked");
    } else if (halfDay.classList.contains("clicked")) {
        totalCost = daysSelected * 20;
        fullDay.classList.remove("clicked");
    }

    costLabel.innerHTML=totalCost;
}
