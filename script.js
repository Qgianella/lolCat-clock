var time = new Date().getHours();

var noon = 12;
var evening = 19; //7pm
var partyTime = 17; //5pm
var lunchTime = 13; //1pm
var wakeUpTime = 7; //7am
var napTime = 15; // 3pm

var timeEventJS = document.getElementById("timeEvent");

//getting image element
var lolcatImage = document.getElementById('lolcat');

//*** PARTY BUTTON variables ***
var partyButton = document.getElementById("partyTimeButton");

var isPartyTime = false;

//***Time Selectors variables**
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var napTimeSelector =  document.getElementById("napTimeSelector");


//updateClock wrapping everything will show seconds on clock:
var updateClock = function()
{

var messageText;
//defining default image
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

if (time < noon) {
  messageText = "Good morning";
} else if (time > evening) {
  messageText = "Good evening";
} else if (time == partyTime) {
  messageText = "Happy hour anyone?";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
} else if (time == lunchTime) {
  messageText = "It's time to eat!";
  image = "http://i1383.photobucket.com/albums/ah289/qgianella/lunchcat_zpscsvkdlzm.png";
} else if (time == wakeUpTime) {
  messageText = "Wakey, wakey..It's time to get up";
  image = "http://kittentoob.com/wp-content/uploads/2013/06/Cats_Waking_Up_1.jpg";
} else if (time == napTime) {
  messageText = "zzzz...it's nap time"
  image = "http://healthiack.com/wp-content/uploads/cat-sleeping.jpg";
} else {
  messageText = "Good afternoon";
}

timeEventJS.innerText = messageText;
lolcat.src = image;


//clock:

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};


//call the showCurrentTime fuction:
showCurrentTime();
//end of UpdateClock  defined function
  };

//call updateClock function:
updateClock();

//increment the clock once a second ...1000 = 1second

var oneSecond = 1000;
setInterval( updateClock, oneSecond);


//**** PARTY BUTTON function****

var partyEvent = function() {

   //check isPartyTime
   if (isPartyTime == false){
        // if isPartyTime is false, change it to true
        //so we know the button has been clicked
        isPartyTime = true;
        // set time to partyTime so the lolCat clock
        //image and message update to the partyTime image and message
        time = partyTime;
     partyTimeButton.innerText="PARTY TIME!";
     partyTimeButton.style.background="#222";
    } else {
        // if isPartyTime is true, change it to false to end the party
        isPartyTime = false;
        // set time back to the current time
        time = new Date().getHours();
      partyTimeButton.innerText="PARTY OVER";
      partyTimeButton.style.backgroundColor ="#0A8DAB";
    }

};


//**Time Selectors Function

var wakeUpEvent = function()
{
    wakeUpTime = wakeUpTimeSelector.value;
};

var lunchEvent = function()
{
    lunchTime = lunchTimeSelector.value;
};

var napEvent = function()
{
    napTime = wakeUpTimeSelector.value;
};




// ========= EVENT LISTENERS =============
//ELEMENT.addEventListener("EVENT",EVENT HANDLER);

partyButton.addEventListener("click", partyEvent);

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);
