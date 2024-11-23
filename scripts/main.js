// main.js

// JavaScript for footer
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

// Weather section - calculate wind chill
const temperature = 5; // in Celsius
const windSpeed = 6; // in km/h
if (temperature <= 10 && windSpeed > 4.8) {
    document.getElementById('wind-chill').textContent = calculateWindChill(temperature, windSpeed).toFixed(2) + '°C';
}
