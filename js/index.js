const btn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");
const clickme=document.querySelector(".click-me");


const box = document.querySelector(".ok");
const box2 = document.querySelector(".no-ok");
const box3=document.querySelector(".happy-rose")
const closeBtns = document.querySelectorAll(".close");

const sadAudio = document.getElementById("sadAudio"); 

// YES button
if (btn && box) {
  btn.addEventListener("click", () => {
    box.classList.add("show");
  });
}

// NO button
if (noBtn && box2) {
  noBtn.addEventListener("click", () => {
    box2.classList.add("show");
    if (sadAudio) sadAudio.play();
  });
}

// CLICK ME (rose)
if (clickme && box3) {
  clickme.addEventListener("click", () => {
    box3.classList.add("show");
  });
}

// CLOSE buttons
if (closeBtns.length > 0) {
  closeBtns.forEach((close) => {
    close.addEventListener("click", () => {
      if (box) box.classList.remove("show");
      if (box2) box2.classList.remove("show");
      if (box3) box3.classList.remove("show");
    });
  });
}

 
function toggleNav() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
}

