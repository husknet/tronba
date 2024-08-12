// script.js

// Countdown Timer
const countdownDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days} Days ${hours}:${minutes}:${seconds}`;

    if (distance < 0) {
        document.getElementById("timer").innerHTML = "LAUNCHED!";
    }
}

setInterval(updateCountdown, 1000);

// Dynamic Coin Reduction
let totalCoins = 3000000;

function reduceCoins() {
    const reduction = Math.floor(Math.random() * 100) + 1; // Random reduction between 1 and 100
    totalCoins = Math.max(totalCoins - reduction, 0);
    document.getElementById("coin-count").innerHTML = totalCoins.toLocaleString() + " Tronba";

    if (totalCoins > 0) {
        setTimeout(reduceCoins, 25000);
    }
}

reduceCoins();
