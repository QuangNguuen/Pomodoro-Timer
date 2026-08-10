    //Any extra variable//
    let isRunning = false;
    const clock = document.getElementById('clock');
    //Time options//
    const pomodoro = document.getElementById('pomodoro');
    const short = document.getElementById('short');
    const long = document.getElementById('long');

    //Color style when clicked//
    const button = [pomodoro,short,long];

    pomodoro.addEventListener('click', function() {
        theme();
    })

    short.addEventListener('click', function() {
        theme();
    })

    long.addEventListener('click', function() {
        theme();
    })

    function theme(clicked) {
        console.log('theme called', clicked);
        for (let i = 0; i < button.length; i++) {
            if (button[i] === clicked) {
                button[i].style.color = 'black';
                button[i].style.backgroundColor = 'white';
            }
            else {
                button[i].style.color = 'white';
                button[i].style.backgroundColor = 'transparent';
            }
        }
    }
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
    ////////////////////////
    function format() { //makes sure the format always work, no matter the time//
        const minute = Math.floor(timeLeft/60);
        const second = timeLeft%60;

        const formatSecond = String(second).padStart(2,'0');
        clock.textContent = `${minute}:${formatSecond}`;
    }
    format(); //Default time when the application is open//

    let totalTime = setTimes.pomodoro;
    //Simple time variables//
    pomodoro.addEventListener('click', function() {  //Timer when any buttons clicked//
        timeLeft = setTimes.pomodoro;
        totalTime = setTimes.pomodoro;
        format();
    });
    short.addEventListener('click', function() {
        timeLeft = setTimes.short;
        totalTime = setTimes.short;
        format();
    });
    long.addEventListener('click', function() {
        timeLeft = setTimes.long;
        totalTime = setTimes.long;
        format();
    })


    //Countdown//
    /////////////
    let timerID;
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
    restart.addEventListener('click', function() {
        clearInterval(timerID);
        isRunning = false;
        
        timeLeft = totalTime;
        format();

        start.textContent = 'start';
    });
    
    pomodoro.addEventListener('click', function() {
        clearInterval(timerID);
        isRunning = false;

        timeLeft = totalTime;
        format();

        start.textContent = 'start';
    });

    short.addEventListener('click', function() {
        clearInterval(timerID);
        isRunning = false;

        timeLeft = totalTime;
        format();

        start.textContent = 'start';
    });

    long.addEventListener('click', function() {
        clearInterval(timerID);
        isRunning = false;

        timeLeft = totalTime;
        format();

        start.textContent = 'start';
    });