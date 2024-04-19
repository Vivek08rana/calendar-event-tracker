// JavaScript source code
// By: Vivek Rana

var currentDate = new Date(); //get the current date
//currentDate.setDate(currentDate.getDate()+1); //change date without changing windows settings
var theMonth = currentDate.getMonth();
var dayName;

var value1;
var value2;
var value3;
var value4;
var value5;
var value6;
var value7;

var calEvents = [];
var numEvents = 0;

var noUpcomingEvents = true;

//--------------------------------------------------------------------------------------
//PART 1: THE CALENDAR

//This function will update the innerhtml of the currentMonth element in the html file.
//It will change the default month of January to the current month
function setCurrentMonth() {
    /* 
     * getMonth only returns the int value of the month from 0 to 11, with 0 being January.
     * To get the actual month rather than a value we use an array to store a list of strings associated with each month
    */
    var monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = monthList[currentDate.getMonth()]; //store the month part of the current date

    var updateMonth = document.getElementById("currentMonth"); //set the innerhtml to the current month that we got
    updateMonth.innerHTML = month + " " + currentDate.getFullYear(); //set month but also add the year right after it

    setHeader();
}

function setHeader() {
    //The day in value form 
    var theDayHeader = document.getElementById("dayHeader");
    let day = currentDate.getDate(); //stores the current day

    //The day in name form from list of weekdays
    var weekdayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    dayName = weekdayList[currentDate.getDay()];
    console.log("The day is " + day + " AKA " + dayName);

    //Set up the number values that will display below the weekday names
    value1 = day;

    if (dayName == 'Monday') { //Accounts for the previous days of the current day if we are in a middle week of the month
        value2 = value1 + 1;
        value2 = checkValue(value2); //Check the value and reset the value to 1 if we enter a new month. Otherwise value remains the same.

        value3 = value2 + 1;
        value3 = checkValue(value3);

        value4 = value3 + 1;
        value4 = checkValue(value4);

        value5 = value4 + 1;
        value5 = checkValue(value5);

        value6 = value5 + 1;
        value6 = checkValue(value6);

        value7 = value1 - 1;
        value7 = checkValue(value7);
    }
    if (dayName == 'Tuesday') { 
        value2 = value1 + 1;
        value2 = checkValue(value2);

        value3 = value2 + 1;
        value3 = checkValue(value3);

        value4 = value3 + 1;
        value4 = checkValue(value4);

        value5 = value4 + 1;
        value5 = checkValue(value5);

        value6 = value1 - 2;
        value6 = checkValue(value6);

        value7 = value1 - 1;
        value7 = checkValue(value7);
    }
    if (dayName == 'Wednesday') { //Accounts for the previous days of the current day if we are in a middle week of the month
        value2 = value1 + 1;
        value2 = checkValue(value2);

        value3 = value2 + 1;
        value3 = checkValue(value3);

        value4 = value3 + 1;
        value4 = checkValue(value4);

        value5 = value1 - 3;
        value5 = checkValue(value5);

        value6 = value1 - 2;
        value6 = checkValue(value6);

        value7 = value1 - 1;
        value7 = checkValue(value7);
    }
    if (dayName == 'Thursday') { //Accounts for the previous days of the current day if we are in a middle week of the month
        value2 = value1 + 1;
        value2 = checkValue(value2);

        value3 = value2 + 1;
        value3 = checkValue(value3);

        value4 = value1 - 4;
        value4 = checkValue(value4);

        value5 = value1 - 3;
        value5 = checkValue(value5);

        value6 = value1 - 2;
        value6 = checkValue(value6);

        value7 = value1 - 1;
        value7 = checkValue(value7);
    }
    if (dayName == 'Friday') { //Accounts for the previous days of the current day if we are in a middle week of the month
        value2 = value1 + 1;
        value2 = checkValue(value2);

        value3 = value1 - 5;
        value3 = checkValue(value3);

        value4 = value1 - 4;
        value4 = checkValue(value4);

        value5 = value1 - 3;
        value5 = checkValue(value5);

        value6 = value1 - 2;
        value6 = checkValue(value6);

        value7 = value1 - 1;
        value7 = checkValue(value7);
    }
    if (dayName == 'Saturday') { //Accounts for the previous days of the current day if we are in a middle week of the month
        value2 = value1 - 6;
        value2 = checkValue(value2);

        value3 = value1 - 5;
        value3 = checkValue(value3);

        value4 = value1 - 4;
        value4 = checkValue(value4);

        value5 = value1 - 3;
        value5 = checkValue(value5);

        value6 = value1 - 2;
        value6 = checkValue(value6);

        value7 = value1 - 1;
        value7 = checkValue(value7);
    }

    value1 = checkValueB(value1); //Needs to be here to check if we are in day 1,2,3,4,5
    //This is at the end because we are going to overwrite values

    //Sets up the actual days of the week that will appear in the calander and gives a different colour to the current day
    if (dayName == 'Sunday') {
        var codeBlock = '<th style="color: #FFFF00">Sun <br></br>' + value1 + '</th><th style="color: white">Mon <br></br>' + value2 + '</th> <th style="color: white">Tue <br></br>' + value3 + '</th> <th style="color: white">Wed <br></br>' + value4 + '</th> <th style="color: white">Thu <br></br>' + value5 + '</th> <th style="color: white">Fri <br></br>' + value6 + '</th> <th style="color: white">Sat <br></br>' + value7 + '</th>';
    }
    if (dayName == 'Monday') {
        var codeBlock = '<th style="color: white">Sun <br></br>' + value7 + '</th><th style="color: #FFFF00">Mon <br></br>' + value1 + '</th> <th style="color: white">Tue <br></br>' + value2 + '</th> <th style="color: white">Wed <br></br>' + value3 + '</th> <th style="color: white">Thu <br></br>' + value4 + '</th> <th style="color: white">Fri <br></br>' + value5 + '</th> <th style="color: white">Sat <br></br>' + value6 + '</th>';
    }
    if (dayName == 'Tuesday') {
        var codeBlock = '<th style="color: white">Sun <br></br>' + value6 + '</th><th style="color: white">Mon <br></br>' + value7 + '</th> <th style="color: #FFFF00">Tue <br></br>' + value1 + '</th> <th style="color: white">Wed <br></br>' + value2 + '</th> <th style="color: white">Thu <br></br>' + value3 + '</th> <th style="color: white">Fri <br></br>' + value4 + '</th> <th style="color: white">Sat <br></br>' + value5 + '</th>';
    }
    if (dayName == 'Wednesday') {
        var codeBlock = '<th style="color: white">Sun <br></br>' + value5 + '</th><th style="color: white">Mon <br></br>' + value6 + '</th> <th style="color: white">Tue <br></br>' + value7 + '</th> <th style="color: #FFFF00">Wed <br></br>' + value1 + '</th> <th style="color: white">Thu <br></br>' + value2 + '</th> <th style="color: white">Fri <br></br>' + value3 + '</th> <th style="color: white">Sat <br></br>' + value4 + '</th>';
    }
    if (dayName == 'Thursday') {
        var codeBlock = '<th style="color: white">Sun <br></br>' + value4 + '</th><th style="color: white">Mon <br></br>' + value5 + '</th> <th style="color: white">Tue <br></br>' + value6 + '</th> <th style="color: white">Wed <br></br>' + value7 + '</th> <th style="color: #FFFF00">Thu <br></br>' + value1 + '</th> <th style="color: white">Fri <br></br>' + value2 + '</th> <th style="color: white">Sat <br></br>' + value3 + '</th>';
    }
    if (dayName == 'Friday') {
        var codeBlock = '<th style="color: white">Sun <br></br>' + value3 + '</th><th style="color: white">Mon <br></br>' + value4 + '</th> <th style="color: white">Tue <br></br>' + value5 + '</th> <th style="color: white">Wed <br></br>' + value6 + '</th> <th style="color: white">Thu <br></br>' + value7 + '</th> <th style="color: #FFFF00">Fri <br></br>' + value1 + '</th> <th style="color: white">Sat <br></br>' + value2 + '</th>';
    }
    if (dayName == 'Saturday') {
        var codeBlock = '<th style="color: white">Sun <br></br>' + value2 + '</th><th style="color: white">Mon <br></br>' + value3 + '</th> <th style="color: white">Tue <br></br>' + value4 + '</th> <th style="color: white">Wed <br></br>' + value5 + '</th> <th style="color: white">Thu <br></br>' + value6 + '</th> <th style="color: white">Fri <br></br>' + value7 + '</th> <th style="color: #FFFF00">Sat <br></br>' + value1 + '</th>';
    }
    theDayHeader.innerHTML = codeBlock;
}

function checkValue(theDay) { //checks if the day value enters a new month, if so reset the value to 1
    if (theMonth == 0) { // January, 31 Days
        if (theDay == 32) { //check to see if days in month has been surpassed
            theDay = 1; //if so, reset the value to 1 inidicating a new month has been entered and all subsequent values will add onto this value of 1
        }
    }
    if (theMonth == 1) { // February, 28 Days
        if (theDay == 29) {
            theDay = 1;
        }
    }
    if (theMonth == 2) { // March, 31 Days
        if (theDay == 32) {
            theDay = 1;
        }
    }
    if (theMonth == 3) { // April, 30 Days
        if (theDay == 31) {
            theDay = 1;
        }
    }
    if (theMonth == 4) { // May, 31 Days
        if (theDay == 32) {
            theDay = 1;
        }
    }
    if (theMonth == 5) { // June, 30 Days
        if (theDay == 31) {
            theDay = 1;
        }
    }
    if (theMonth == 6) { // July, 31 Days
        if (theDay == 32) {
            theDay = 1;
        }
    }
    if (theMonth == 7) { // August, 31 Days
        if (theDay == 32) {
            theDay = 1;
        }
    }
    if (theMonth == 8) { // September, 30 Days
        if (theDay == 31) {
            theDay = 1;
        }
    }
    if (theMonth == 9) { // October, 31 Days
        if (theDay == 32) {
            theDay = 1;
        }
    }
    if (theMonth == 10) { // November, 30 Days
        if (theDay == 31) {
            theDay = 1;
        }
    }
    if (theMonth == 11) { // December, 31 Days
        if (theDay == 32) {
            theDay = 1;
        }
    }
    return theDay;
}

//Are we in the 1st, 2nd, 3rd, 4th or 5th day as the current day of the month?
//If so add the previous or current month values behind current day based on the day (1-5);
function checkValueB(theDayB) {
    let maxDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //Max days in each month
    let prevMonth = theMonth - 1; //the previous month
    if (prevMonth == 0) { //The previous month of January will get set to December 
        prevMonth = 11; //(0 = Jan, 11 = Dec)
    }
    maxPrevDay = maxDays[prevMonth]; //Get the max days in the previous month

    //Day 1 of Month
    if (theDayB == 1) {
        //Check the weekday names and adjust the previous day value accordingly
        if (dayName == 'Monday') {
            //for every day 1 Monday we would get the last day in the previous month
            //and adjust the previous value (Sun) accordingly
            value7 = maxPrevDay;
        }
        if (dayName == 'Tuesday') {
            //for every day 1 Tuesday we would get the last day in the previous month
            //and adjust the previous values (Sun, Mon) accordingly
            value7 = maxPrevDay;
            value6 = value7 - 1;
        }
        if (dayName == 'Wednesday') {
            //for every day 1 Wednesday we would get the last day in the previous month
            //and adjust the previous values (Sun, Mon, Tue) accordingly
            value7 = maxPrevDay;
            value6 = value7 - 1;
            value5 = value6 - 1;
        }
        if (dayName == 'Thursday') {
            //for every day 1 Thursday we would get the last day in the previous month
            //and adjust the previous values (Sun, Mon, Tue, Wed) accordingly
            value7 = maxPrevDay;
            value6 = value7 - 1;
            value5 = value6 - 1;
            value4 = value5 - 1;
        }
        if (dayName == 'Friday') {
            //for every day 1 Friday we would get the last day in the previous month
            //and adjust the previous value (Sun, Mon, Tue, Wed, Thu) accordingly
            value7 = maxPrevDay;
            value6 = value7 - 1;
            value5 = value6 - 1;
            value4 = value5 - 1;
            value3 = value4 - 1;
        }
        if (dayName == 'Saturday') {
            //for every day 1 Saturday we would get the last day in the previous month
            //and adjust the previous values (Sun, Mon, Tue, Wed, Thu, Fri) accordingly
            value7 = maxPrevDay;
            value6 = value7 - 1;
            value5 = value6 - 1;
            value4 = value5 - 1;
            value3 = value4 - 1;
            value2 = value3 - 1;
        }
        //Sunday would already be a complete week spanning 1 to 7
    }

    //Day 2 of Month
    if (theDayB == 2) {
        //Check the weekday names and adjust the previous day value accordingly
        if (dayName == 'Monday') {
            //for every day 1 Monday we would get the last day in the previous month
            //and adjust the previous value (Sun) accordingly
            value7 = 1;
        }
        if (dayName == 'Tuesday') {
            //for every day 1 Tuesday we would get the last day in the previous month
            //and adjust the previous values (Sun, Mon) accordingly
            value7 = 1;
            value6 = maxPrevDay;
        }
        if (dayName == 'Wednesday') {
            //for every day 1 Wednesday we would get the last day in the previous month
            //and adjust the previous values (Sun, Mon, Tue) accordingly
            value7 = 1;
            value6 = maxPrevDay;
            value5 = value6 - 1;
        }
        if (dayName == 'Thursday') {
            //for every day 1 Thursday we would get the last day in the previous month
            //and adjust the previous values (Sun, Mon, Tue, Wed) accordingly
            value7 = 1;
            value6 = maxPrevDay;
            value5 = value6 - 1;
            value4 = value5 - 1;
        }
        if (dayName == 'Friday') {
            //for every day 1 Friday we would get the last day in the previous month
            //and adjust the previous value (Sun, Mon, Tue, Wed, Thu) accordingly
            value7 = 1;
            value6 = maxPrevDay;
            value5 = value6 - 1;
            value4 = value5 - 1;
            value3 = value4 - 1;
        }
        if (dayName == 'Saturday') {
            //for every day 1 Saturday we would get the last day in the previous month
            //and adjust the previous values (Sun, Mon, Tue, Wed, Thu, Fri) accordingly
            value7 = 1;
            value6 = maxPrevDay;
            value5 = value6 - 1;
            value4 = value5 - 1;
            value3 = value4 - 1;
            value2 = value3 - 1;
        }
        //Sunday would already be a complete week spanning 1 to 7
    }

    //Day 3 of Month
    if (theDayB == 3) {
        //Check the weekday names and adjust the previous day value accordingly
        if (dayName == 'Monday') {
            //for every day 1 Monday we would get the last day in the previous month
            //and adjust the previous value (Sun) accordingly
            value7 = 2;
        }
        if (dayName == 'Tuesday') {
            //for every day 1 Tuesday we would get the last day in the previous month
            //and adjust the previous values (Sun, Mon) accordingly
            value7 = 2;
            value6 = 1;
        }
        if (dayName == 'Wednesday') {
            //for every day 1 Wednesday we would get the last day in the previous month
            //and adjust the previous values (Sun, Mon, Tue) accordingly
            value7 = 2;
            value6 = 1;
            value5 = maxPrevDay;
        }
        if (dayName == 'Thursday') {
            //for every day 1 Thursday we would get the last day in the previous month
            //and adjust the previous values (Sun, Mon, Tue, Wed) accordingly
            value7 = 2;
            value6 = 1;
            value5 = maxPrevDay;
            value4 = value5 - 1;
        }
        if (dayName == 'Friday') {
            //for every day 1 Friday we would get the last day in the previous month
            //and adjust the previous value (Sun, Mon, Tue, Wed, Thu) accordingly
            value7 = 2;
            value6 = 1;
            value5 = maxPrevDay;
            value4 = value5 - 1;
            value3 = value4 - 1;
        }
        if (dayName == 'Saturday') {
            //for every day 1 Saturday we would get the last day in the previous month
            //and adjust the previous values (Sun, Mon, Tue, Wed, Thu, Fri) accordingly
            value7 = 2;
            value6 = 1;
            value5 = maxPrevDay;
            value4 = value5 - 1;
            value3 = value4 - 1;
            value2 = value3 - 1;
        }
        //Sunday would already be a complete week spanning 1 to 7
    }

    //Day 4 of Month
    if (theDayB == 4) {
        //Check the weekday names and adjust the previous day value accordingly
        if (dayName == 'Monday') {
            //for every day 1 Monday we would get the last day in the previous month
            //and adjust the previous value (Sun) accordingly
            value7 = 3;
        }
        if (dayName == 'Tuesday') {
            //for every day 1 Tuesday we would get the last day in the previous month
            //and adjust the previous values (Sun, Mon) accordingly
            value7 = 3;
            value6 = 2;
        }
        if (dayName == 'Wednesday') {
            //for every day 1 Wednesday we would get the last day in the previous month
            //and adjust the previous values (Sun, Mon, Tue) accordingly
            value7 = 3;
            value6 = 2;
            value5 = 1;
        }
        if (dayName == 'Thursday') {
            //for every day 1 Thursday we would get the last day in the previous month
            //and adjust the previous values (Sun, Mon, Tue, Wed) accordingly
            value7 = 3;
            value6 = 2;
            value5 = 1;
            value4 = maxPrevDay;
        }
        if (dayName == 'Friday') {
            //for every day 1 Friday we would get the last day in the previous month
            //and adjust the previous value (Sun, Mon, Tue, Wed, Thu) accordingly
            value7 = 3;
            value6 = 2;
            value5 = 1;
            value4 = maxPrevDay;
            value3 = value4 - 1;
        }
        if (dayName == 'Saturday') {
            //for every day 1 Saturday we would get the last day in the previous month
            //and adjust the previous values (Sun, Mon, Tue, Wed, Thu, Fri) accordingly
            value7 = 3;
            value6 = 2;
            value5 = 1;
            value4 = maxPrevDay;
            value3 = value4 - 1;
            value2 = value3 - 1;
        }
        //Sunday would already be a complete week spanning 1 to 7
    }

    //Day 5 of Month
    if (theDayB == 5) {
        //Check the weekday names and adjust the previous day value accordingly
        if (dayName == 'Monday') {
            //for every day 1 Monday we would get the last day in the previous month
            //and adjust the previous value (Sun) accordingly
            value7 = 4;
        }
        if (dayName == 'Tuesday') {
            //for every day 1 Tuesday we would get the last day in the previous month
            //and adjust the previous values (Sun, Mon) accordingly
            value7 = 4;
            value6 = 3;
        }
        if (dayName == 'Wednesday') {
            //for every day 1 Wednesday we would get the last day in the previous month
            //and adjust the previous values (Sun, Mon, Tue) accordingly
            value7 = 4;
            value6 = 3;
            value5 = 2;
        }
        if (dayName == 'Thursday') {
            //for every day 1 Thursday we would get the last day in the previous month
            //and adjust the previous values (Sun, Mon, Tue, Wed) accordingly
            value7 = 4;
            value6 = 3;
            value5 = 2;
            value4 = 1;
        }
        if (dayName == 'Friday') {
            //for every day 1 Friday we would get the last day in the previous month
            //and adjust the previous value (Sun, Mon, Tue, Wed, Thu) accordingly
            value7 = 4;
            value6 = 3;
            value5 = 2;
            value4 = 1;
            value3 = maxPrevDay;
        }
        if (dayName == 'Saturday') {
            //for every day 1 Saturday we would get the last day in the previous month
            //and adjust the previous values (Sun, Mon, Tue, Wed, Thu, Fri) accordingly
            value7 = 4;
            value6 = 3;
            value5 = 2;
            value4 = 1;
            value3 = maxPrevDay;
            value2 = value3 - 1;
        }
        //Sunday would already be a complete week spanning 1 to 7
    }


    return theDayB;
}

//--------------------------------------------------------------------------------------
//PART 2: CHANGING WEEKS

//Adance to next week or go to previous week or return to today
function changeWeekN() {
    currentDate.setDate(currentDate.getDate() + 7);
    setCurrentMonth();
}

function changeWeekP() {
    currentDate.setDate(currentDate.getDate() - 7);
    setCurrentMonth();
}

function today() {
    currentDate = new Date();
    setCurrentMonth();
}

//--------------------------------------------------------------------------------------
//PART 3: ADDING EVENTS

function validateEvent() {
    var storeEventDate = document.getElementById("eDate").value;
    var storeEventDesc = document.getElementById("eDesc").value;
    var storeEventAlert = document.getElementById("eAlert").value;

    //Set the placeholder for if no desc or alert time is provided 
    if (storeEventDesc == "") {
        storeEventDesc = 'No description';
    }
    if (storeEventAlert == "") {
        storeEventAlert = "None";
    }

    //Store the event in an array
    if (storeEventDate != "") { //if a date is selected then add the event
        calEvents.push(storeEventDate, storeEventDesc, storeEventAlert);
        var notes = document.getElementById("eventNotes")
        notes.value += "\nDate: " + storeEventDate + "\nDescription: " + storeEventDesc + "\nAlert Offset: " + storeEventAlert + "\n "; //add event to notes
        alert("The event was successfully added." + "\nDate: " + storeEventDate + "\nDescription: " + storeEventDesc + "\nAlert Offset: " + storeEventAlert)
        //Reset the form
        document.getElementById("eventDetails").reset();
        //Keeps track of number of events
        numEvents += 1;
    }
    else { //otherwise tell the user to enter a date
        alert("Please enter a date for the event.")
    }
    upcomingEvents(); //check for any upcoming events
}

//--------------------------------------------------------------------------------------
//PART 4: ALERT FOR UPCOMING EVENTS
function updateDateThenCheckEvents() { //Purpose: update the time for the upcoming events button
    noUpcomingEvents = true; //reset to 'no upcoming events' until you check again to confirm
    currentDate = new Date();
    upcomingEvents();
    if (noUpcomingEvents == true) { //tell user there are no events today that have an alarm associated
        alert("There are no upcoming events today!")
    }
}

function upcomingEvents() {
    //Store current date and time seperatly
    //Note: UTC is one day ahead during certain times so you may need to do -1 on the day
    let currentDateOnly = currentDate.getUTCFullYear() + '-' + (currentDate.getUTCMonth() + 1).toString().replace(/(^|\D)(\d)(?!\d)/g, '$10$2') + '-' + (currentDate.getDate()).toString().replace(/(^|\D)(\d)(?!\d)/g, '$10$2'); //The end part adds leading 0s for 1,2,3... because the date we compare to has leading zeros
    let currentTimeOnly = currentDate.getHours().toString().replace(/(^|\D)(\d)(?!\d)/g, '$10$2') + ':' + currentDate.getMinutes().toString().replace(/(^|\D)(\d)(?!\d)/g, '$10$2');

    //Date values are stored every third value 0,3,6,9...
    //We will loop through all stored dates to see if any match the current date
    //***COMPARING THE DATES***
    console.log("Upcoming Events: ")
    for (let i = 0; i <= calEvents.length; i += 3) {
        if (calEvents[i] != undefined) { //Ensures we are checking a date
            console.log(calEvents[i].split("T"));
            let eventDateOnly = calEvents[i].split("T"); //Split string so we have the date portion instead of time
            console.log("Comparing: " + currentDateOnly + " VS THE " + eventDateOnly[0]);
            if (eventDateOnly[0] == currentDateOnly) { //compare the dates to see if we are on an event date

                //***COMPARING THE TIMES***
                //Convert Alarm time to time object so we can compare
                let splitAlarmTime = calEvents[i + 2].split(":");
                var alarmTimeObj = new Date();
                alarmTimeObj.setHours(splitAlarmTime[0], splitAlarmTime[1],0);
                console.log("FINAL" + alarmTimeObj);

                //Convert Event time to time object so we can compare
                let splitEventTime = eventDateOnly[1].split(":") //We already seperated the event date and time above
                var eventTimeObj = new Date();
                eventTimeObj.setHours(splitEventTime[0], splitEventTime[1],0);
                console.log("FINAL" + eventTimeObj);

                //Convert Current time to time object so we can compare
                let splitCurrentTime = currentTimeOnly.split(":");
                var currentTimeObj = new Date();
                currentTimeObj.setHours(splitCurrentTime[0], splitCurrentTime[1],0);
                console.log("FINAL" + currentTimeObj);

                //These three obj now all have the same properties EXCEPT time so we can compare the time to determine if an alarm notifcation should be sent to the user
                console.log("CURRENT: " + currentDate);
                console.log("ALARM: " + alarmTimeObj);
                console.log("EVENT: " + eventTimeObj);
                if (alarmTimeObj <= currentTimeObj && eventTimeObj >= currentTimeObj) { //check to see if the current time is between the alarm and event time
                    var hours = (eventTimeObj - currentTimeObj) / (1000 * 60 * 60);
                    var absoluteHours = Math.floor(hours);
                    var h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

                    //Get remainder from hours and convert to minutes
                    var minutes = (hours - absoluteHours) * 60;
                    var absoluteMinutes = Math.floor(minutes);
                    var m = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes;
                    alert("This is a reminder that your event [" + calEvents[i + 1] + "] is in " + h + " hours and " + m + " minutes");
                    noUpcomingEvents = false; //do not give the no upcoming event alert
                }
            }
        }
    }
}