var time = new Date().getHours();
var noon = 12;
var evening = 19; //7pm
var partyTime = 17; //5pm
var lunchTime = 13; //1pm
var wakeUpTime = 7; //7am
var napTime = lunchTime + 1; // 3pm
var messageText;

if (time < noon) {
  messageText = "Good morning";
} else if (time > evening) {
  messageText = "Good evening";
} else if (time == partyTime) {
  messageText = "Happy hour anyone?";
} else if (time == lunchTime) {
  messageText = "It's time to eat!";
} else if (time == wakeUpTime) {
  messageText = "Wakey, wakey..It's time to get up";
} else if (time == napTime) {
  messageText = "zzzz...it's nap time"
} else {
  messageText = "Good afternoon";
}

console.log(messageText);
