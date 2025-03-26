let countdownInterval;

function startCountdown() {
    let minutes = document.getElementById("minutes").value;
    if (!minutes || minutes <= 0) {
        alert("Please enter a valid number of minutes.");
        return;
    }

    let seconds = minutes * 60;

    function updateCountdown() {
        let displayMinutes = Math.floor(seconds / 60);
        let displaySeconds = seconds % 60;

        displayMinutes = displayMinutes < 10 ? "0" + displayMinutes : displayMinutes;
        displaySeconds = displaySeconds < 10 ? "0" + displaySeconds : displaySeconds;

        document.getElementById("countdown").textContent = `${displayMinutes}:${displaySeconds}`;

        if (seconds <= 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").textContent = "Time's Up!";
        } else {
            seconds--;
        }
    }

    // Start the countdown
    clearInterval(countdownInterval); // Clear any previous countdown
    updateCountdown(); // Update immediately
    countdownInterval = setInterval(updateCountdown, 1000);
}
