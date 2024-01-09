// Set the date we're counting down to
var countDownDate = new Date("Feb 23, 2024 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days /* + hours + "h "
    + minutes + "m " + seconds + "s "*/;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "EXPIRED";
  }
}, 1000);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

let counts = setInterval(updated);
let upto = 0;
function updated() {
  let count = document.getElementById("counter");
  count.innerHTML = ++upto;
  if (upto === 70000) {
    clearInterval(counts);
  }
}
// animate
function animateCounter(targetId, targetValue, duration) {
  let startValue = 0;
  const counterElement = document.getElementById(targetId);
  const increment = targetValue / (duration / 16); // Assuming 60 frames per second

  function updateCounter() {
    startValue += increment;
    counterElement.textContent = Math.round(startValue);

    if (startValue < targetValue) {
      requestAnimationFrame(updateCounter);
    } else {
      counterElement.textContent = targetValue;
    }
  }

  updateCounter();
}

// Usage
animateCounter("counter1", 1600, 9000); // Counter 1 from 0 to 100 in 2000 milliseconds
animateCounter("counter2", 46, 9000); // Counter 2 from 0 to 500 in 1500 milliseconds
animateCounter("counter3", 19, 9000); // Counter 3 from 0 to 1000 in 2500 milliseconds
animateCounter("counter4", 70000, 9000);
