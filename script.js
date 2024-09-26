


const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minssEl = document.getElementById('mins');
const secondssEl = document.getElementById('seconds');


function countdown() {
    const currentDate = dayjs()
    const nextNewYear = currentDate.endOf('year')

    const days = nextNewYear.diff(currentDate, 'days');
    console.log(currentDate, nextNewYear);
    const hours = nextNewYear.diff(currentDate, 'hours') % 24;
    const mins = nextNewYear.diff(currentDate, 'minutes') % 60;
    const seconds = nextNewYear.diff(currentDate, 'seconds') % 60;



    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minssEl.innerHTML = formatTime(mins);
    secondssEl.innerHTML = formatTime(seconds);
    
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
