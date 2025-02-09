document.addEventListener("DOMContentLoaded", function () {
    const timeElement = document.getElementById("time");

    function updateClock() {
        const now = new Date();
        timeElement.textContent = now.toLocaleTimeString();
    }

    setInterval(updateClock, 1000);
    updateClock(); // Direkt beim Start aktualisieren
});
