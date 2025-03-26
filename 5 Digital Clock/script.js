function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Format time (add leading zero if needed)
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("time").textContent = timeString;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize clock immediately
updateClock();
