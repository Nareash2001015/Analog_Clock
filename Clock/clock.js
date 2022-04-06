var secondHand = document.getElementById("secondHand");
var minuteHand = document.getElementById("minuteHand");
var hourHand = document.getElementById("hourHand");

var secondAngle, minuteAngle, hourAngle;
var countSec = 0, countMin = 0;
var currentHour, currentMinute, currentSecond;

var currenttime = new Date();
if(currenttime.getHours() > 12)
{
    var i = (currenttime.getHours() - 12) * 5;
    hourAngle = (i + currenttime.getMinutes()/12) * 6;
}
else
{
    hourAngle = currenttime.getHours() * 6;
}
secondAngle = currenttime.getSeconds() * 6;
minuteAngle = currenttime.getMinutes() * 6;
minuteHand.style.transform = "rotate(" + minuteAngle + "deg)";
secondHand.style.transform = "rotate(" + secondAngle + "deg)";
hourHand.style.transform = "rotate(" + hourAngle + "deg)";

function clock()
{
    secondAngle += 6;
    secondHand.style.transform = "rotate(" + secondAngle + "deg)";
    if(countSec == 60)
    {
        countSec = 0;
        minuteAngle += 6;
        minuteHand.style.transform = "rotate(" + minuteAngle + "deg)";
        if(countMin == 60)
        {
            countMin = 0;
            hourAngle += 6;
            hourHand.style.transform = "rotate(" + hourAngle + "deg)";
        }
        countMin++;
    }
    countSec++;
}

var fun = setInterval(clock, 1000);