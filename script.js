var time = new Date().getHours();
var noon = 12;
var evening = 19; //7pm
var partyTime = 17; //5pm
var lunchTime = 13; //1pm
var wakeUpTime = 7; //7am
var napTime = lunchTime + 1; // 3pm
var messageText;
var timeEventJS = document.getElementById("timeEvent");

//getting image element
var lolcatImage = document.getElementById('lolcat');
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
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
} else if (time == wakeUpTime) {
  messageText = "Wakey, wakey..It's time to get up";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
} else if (time == napTime) {
  messageText = "zzzz...it's nap time"
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
} else {
  messageText = "Good afternoon";
}

timeEventJS.innerText = messageText;
lolcat.src = image;