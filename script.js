const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

// declareing the variables


let startTime, intervalId;

//Definig the start function that start time:

function start(){
    startTime = Date.now();
    intervalId = setInterval(() => {
        const elapseTime = Date.now() - startTime;
        const seconds = Math.floor(elapseTime/1000);
        const minutes = Math.floor(seconds/60);
        const hour = Math.floor(minutes/60);

        const formattedTime = `${pad(hour)}: ${pad(minutes)}: ${pad(seconds)}`;
        display.textContent = formattedTime;

    }, 10);
}

function stop (){
    clearInterval(intervalId);
}

function reset (){
    clearInterval(intervalId);
    display.textContent = '00:00:00';
}

function pad(number){
    return number < 10 ? '0' + number : number;
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);