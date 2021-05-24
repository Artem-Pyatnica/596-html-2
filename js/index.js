function updateClock() {
const clock = document.querySelector('.clock');
clock.innerText = new Date().toTimeString();
//clock.style.color = "orange";
clock.classList.add('highlight');
}
setInterval(updateClock, 1000);

//const headingClock = document.querySelector('header#home div.clock');
//headingClock.style.textAlign = 'center';
//headingClock.style.height = '35px';