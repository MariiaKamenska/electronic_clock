function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);

function updateClock_timezone() {
    const now_local = new Date();
    const select_timezone = -5; //NewYork
    const hours = String(now_local.getHours()-2+select_timezone).padStart(2, '0');
    const minutes = String(now_local.getMinutes()).padStart(2, '0');
    const seconds = String(now_local.getSeconds()).padStart(2, '0');
    
    document.getElementById('timezone').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock_timezone, 1000);