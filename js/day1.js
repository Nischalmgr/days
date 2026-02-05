 const targetDate = new Date(2026, 1, 7, 0, 0, 0).getTime();

const countdownEl = document.getElementById("countdown");
const countdownContainer = document.getElementById("countdown-container");
const content = document.getElementById("content");

function updateAccess() {
  const now = Date.now();
  const diff = targetDate - now;

  if (diff <= 0) {
     
    countdownContainer.style.display = "none";
    content.style.display = "block";
    return;
  }

  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

 
updateAccess();
setInterval(updateAccess, 1000);
