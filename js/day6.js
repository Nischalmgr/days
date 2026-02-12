// ===== TARGET DATE =====
const targetDate = new Date(2026, 1, 12, 0, 0, 0).getTime();

// ===== ELEMENTS =====
const countdownEl = document.getElementById("countdown");
const countdownContainer = document.getElementById("countdown-container");
const content = document.getElementById("content");

const hug = document.querySelector(".hug");
const me = document.querySelector(".me");
const box = document.querySelector(".huggie");
const back = document.querySelector(".close");

// ===== IMAGE LIST FOR JS SLIDER =====
const images = [
  "../images/running.gif",
  "../images/jump.gif",
  "../images/wallbreak.gif",
  "../images/highjump.gif",
  "../images/finalhuggie.gif"
];

let imgIndex = 0;
let sliderInterval;


// ===== COUNTDOWN FUNCTION =====
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


// ===== OPEN HUG BOX =====
me.addEventListener("click", () => {
  box.classList.add("show");
  hug.play();

  // first image
  imgIndex = 0;
  box.style.backgroundImage = `url(${images[imgIndex]})`;

  // start JS image changing
  sliderInterval = setInterval(() => {
    imgIndex++;
    if (imgIndex >= images.length) imgIndex = 0;
    box.style.backgroundImage = `url(${images[imgIndex]})`;
  }, 2000); // change every 2 sec
});


// ===== CLOSE HUG BOX =====
back.addEventListener("click", () => {
  box.classList.remove("show");

  clearInterval(sliderInterval);

  hug.pause();
  hug.currentTime = 0;
});