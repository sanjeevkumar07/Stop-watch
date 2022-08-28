var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

function Start() {
    timer = true;
    stopwatch();

}


function Stop() {
    timer = false;

}


function Reset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";




}

function stopwatch() {
    if (timer == true) {
        count++;
        if (count == 100) {
            sec++;
            count = 0;

        }
        if (sec == 60) {
            min++;
            sec = 0;

        }
        if (min == 60) {
            hr++;
            sec = 0;
            min = 0;

        }
        var hrString = hr;
        var minString = min;
        var secString = sec;
        var countString = count;
        if (hr < 10) {
            hrString = "0" + hrString;
        }
        if (min < 10) {
            minString = "0" + minString;
        }
        if (sec < 10) {
            secString = "0" + secString;
        }
        if (count < 10) {
            countString = "0" + countString;
        }
        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;
        setTimeout("stopwatch()", 10);
    }



}