const clockElement = document.getElementById('clock');
const selectTimeZone = document.getElementById('timeZone');
const local_timeZone = document.getElementById('local_timeZone');


function updateClock() {
    const now = new Date();
    const timeZone = parseInt(selectTimeZone.value, 10);
    const hours = String(now.getUTCHours()+ timeZone).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;

    

    // console.log(timeZone);
    local_timeZone.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;

    
}

setInterval(updateClock, 1000);
selectTimeZone.addEventListener('change', updateClock);
updateClock(timeZone);

// const different_time_UTC = new Date().getTimezoneOffset() / 60
// const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// document.getElementById('clock2').textContent = timezone;