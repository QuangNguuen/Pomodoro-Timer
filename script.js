//Time options//
const pomodoro = document.getElementById('pomodoro');
const short = document.getElementById('short');
const long = document.getElementById('long');


//Start-Pause-Restart//
const start = document.getElementById('start');
const restart = document.getElementById('restart');

//Times in the clock//
const setTimes = {
    pomodoro: 25*60,
    short: 5*60,
    long: 10*60,
}

let timeLeft = setTimes.pomodoro; //The standard time//

//Format for the clock//
function format() { //makes sure the format always work, no matter the time//
    const minute = Math.floor(timeLeft/60);
    const second = timeLeft%60;

    const formatSecond = String(second).padStart(2,'0');
    clock.textContent = `${minute}:${formatSecond}`;
}
format(); //Default time when the application is open//

pomodoro.addEventListener('click', function() {  //Timer when any buttons clicked//
    timeLeft = setTimes.pomodoro;
    format();
});
short.addEventListener('click', function() {
    timeLeft = setTimes.short;
    format();
});
long.addEventListener('click', function() {
    timeLeft = setTimes.long;
    format();
});


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
            start.textContent = 'start';
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

//Restart the clock//
//Stop the clock and stop at the exact starting time//
function formatForRestart() {
    const minute = Math.floor(setTimes.pomodoro/60);
    const second = setTimes.pomodoro%60;

    const formatSecond = String(second).padStart(2, '0');
    clock.textContent = `${minute}:${formatSecond}`;
}

restart.addEventListener('click', function() {
    if (!isRunning) {
        formatForRestart();
        isRunning = true;
    }
    else {
        isRunning = false;
    }
});