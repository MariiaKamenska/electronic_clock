function updateClock(time) {
    const now = new Date();
    const hours = String(now.getUTCHours()+ time).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

    
    timeZone = parseInt(selectTimeZone.value, 10);
    // console.log(timeZone);

    
}



let timeZone;

const selectTimeZone = document.getElementById("timeZone");
selectTimeZone.addEventListener('change', updateClock(timeZone));

setInterval(updateClock(timeZone), 1000);
updateClock(timeZone);

// const different_time_UTC = new Date().getTimezoneOffset() / 60
// const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// document.getElementById('clock2').textContent = timezone;