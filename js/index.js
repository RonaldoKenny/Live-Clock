$("#clock-12").hide();

function clock()
{
    var fulldate = new Date();
    var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = fulldate.getDate() + " " + monthName[fulldate.getMonth()] + " " + fulldate.getFullYear();
    
    var time = ":" + startTime(fulldate.getMinutes()) + ":" + startTime(fulldate.getSeconds());

    var hourFormat = fulldate.getHours();
    
    document.getElementById("date").innerHTML = date;

    // for 24-hour format
    if(hourFormat < 10)
            hourFormat = "0" + hourFormat;

    document.getElementById("clock-24").innerHTML = hourFormat + time;
    
    // for 12-hour format
    hourFormat = fulldate.getHours();
    // 01:00 ~ 12:00
    var indicator = " AM";

    // 00:00 (midnight)
    if(hourFormat == 0)
    {
        hourFormat = 12;
        indicator = " PM";
    }
    // 13:00 ~ 23:00
    else if(hourFormat >= 13 && hourFormat <= 23)
    {
        hourFormat -= 12;
        indicator = " PM";
    }

    // 01:00 ~ 09:00
    if(hourFormat >= 1 && hourFormat <= 9)
            hourFormat = "0" + hourFormat;

    document.getElementById("clock-12").innerHTML = hourFormat + time + indicator;

    setTimeout(clock, 1000);
}

function startTime(i)
{
    if(i < 10)
        return "0" + i;
    return i;
}

function switchFormat()
{
    if(document.getElementById("clock-12").style.display == "none")
    {
        document.getElementById("clock-12").style.display = "block";
        document.getElementById("clock-24").style.display = "none";
    }
    else
    {
        document.getElementById("clock-12").style.display = "none";
        document.getElementById("clock-24").style.display = "block";
    }
}

function darkMode()
{
    document.body.classList.toggle("dark-mode");
}