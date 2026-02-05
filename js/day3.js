const yes= document.querySelector(".yes");
const no = document.querySelector(".no");
const box1=document.querySelector(".yes-choco");
const box2=document.querySelector(".no-choco");
const closes=document.querySelectorAll(".close")

yes.addEventListener("click",()=>{
    box1.classList.add("show");


})
no.addEventListener("click",()=>
{
    box2.classList.add("show");

})
closes.forEach((close)=>{
    close.addEventListener("click",()=>{
        box1.classList.remove("show");
        box2.classList.remove("show");
    })
    
})

 const targetDate = new Date(2026, 1, 9, 0, 0, 0).getTime();

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
