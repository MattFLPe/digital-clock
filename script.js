
function updateClock(){
    let current = new Date()
    let hour = current.getHours().toString().padStart(2, '0');
    let minute = current.getMinutes().toString().padStart(2, '0');
    let second = current.getSeconds().toString().padStart(2, '0');

   const currentTime = `${hour}:${minute}:${second}`;
    document.getElementById('clock').textContent = currentTime;
}

setInterval(updateClock, 1000)
updateClock();