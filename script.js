//Time options//
const pomodoro = document.getElementById('pomodoro');
const short = document.getElementById('short');
const long = document.getElementById('long');


//Start-Pause-Restart//
const start = document.getElementById('start');
const restart = document.getElementById('restart');


const setTimes = {    //Set the time//
    pomodoro: 25*60,
    short: 5*60,
    long: 10*60,
}

let timeLeft = setTimes.pomodoro; //The standard time//

pomodoro.addEventListener('click', function() {  //Timer when any buttons clicked//
    timeLeft = setTimes.pomodoro;
});
short.addEventListener('click', function() {
    timeLeft = setTimes.short;
});
long.addEventListener('click', function() {
    timeLeft = setTimes.long;
});

//Format for the clock//
function format() {
    const minute = Math.floor(timeLeft/60);
    const second = timeLeft%60;

    const formatSecond = String(second).padStart(2,'0');
    clock.textContent = `${minute}:${formatSecond}`;
}

format();


//Countdown//
let timerID;
let isRunning = false;
function countdown() {
    format();
    timerID = setInterval(function() {
        timeLeft--;
        format();

        if (timeLeft <= 0) {
            clearInterval(timerID);
            isRunning = false;
            start.textContent = 'taste';
        }

    },1000);
}





start.addEventListener('click', function() {
    if (!isRunning) {
        format();
        countdown();
        start.textContent = 'pause';
        isRunning = true;
    }

    else {
        isRunning = false;
        clearInterval(timerID);
        start.textContent = 'start';
    }
});
