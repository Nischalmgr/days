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

const frames = document.querySelectorAll(".frame");

let i = 0;
let slider;


// ===== COUNTDOWN =====
function updateAccess() {
  const now = Date.now();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdownContainer.style.display = "none";
    content.style.display = "block";
    return;
  }

  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff/(1000*60*60))%24);
  const m = Math.floor((diff/(1000*60))%60);
  const s = Math.floor((diff/1000)%60);

  countdownEl.textContent = `${d}d ${h}h ${m}m ${s}s`;
}

updateAccess();
setInterval(updateAccess, 1000);


// ===== OPEN HUG =====
me.addEventListener("click", () => {

  box.classList.add("show");

  if (hug) {
    hug.currentTime = 0;
    hug.play().catch(()=>{});
  }

  i = 0;
  frames.forEach(f => f.classList.remove("show"));
  frames[i].classList.add("show");

  slider = setInterval(() => {
    frames[i].classList.remove("show");
    i = (i + 1) % frames.length;
    frames[i].classList.add("show");
  }, 2000);

});


// ===== CLOSE =====
back.addEventListener("click", () => {

  box.classList.remove("show");
  clearInterval(slider);

  frames.forEach(f => f.classList.remove("show"));

  if (hug) {
    hug.pause();
    hug.currentTime = 0;
  }

});