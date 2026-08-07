const pomodoro = document.getElementById('pomodoro');
const short = document.getElementById('short');
const long = document.getElementById('long');

let clock = document.getElementById('clock');
const start = document.getElementById('start');

const setTimes = {
    pomodoro: 25*60,
    short: 5*60,
    long: 10*60,
}

let timeLeft = setTimes.pomodoro;


function format(timeLeft) {
    console.log(timeLeft);
    const minute = Math.floor(timeLeft/60);
    const second = timeLeft%60;

    const formatSecond = String(second).padStart(2,'0');
    clock.textContent = `${minute}:${formatSecond}`
}

format();

function countdown() {
    format();
    clock = setInterval(function() {
        timeLeft--;
        format();

        if (timeLeft === 0) {
            clearInterval(clock);
        }

    },1000);
}


countdown();