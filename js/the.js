var timeLeft = 0;
var lock = false;

const form = document.getElementById("the-form")
console.log(form)

form.addEventListener("submit", (event) => {
  event.preventDefault();

  var formData = new FormData(form)
  const minutes = parseInt(formData.get("minutes"))
  const seconds = parseInt(formData.get("seconds"))
  const total = (minutes * 60) + seconds;
  timeLeft = total;

  tick();
  startTimer(total);
})

const startTimer = (seconds) => {
  document.getElementById("the-form").className += " hidden"
  setTimeout(function(){
    alert("Your time is up!");
  }, (seconds * 1000));
}

const timeFormatter = (seconds) => {
  var minutes = Math.floor(seconds / 60);
  var seconds = Math.floor((seconds % (60)));

  if (minutes > 1) {
    return `${minutes} minutes, ${seconds} seconds left`
  } else if (minutes == 1) {
    return `${minutes} minute, ${seconds} seconds left`
  } else {
    return `${seconds} seconds left`
  }
}

const tick = () => {
  document.getElementById("the-timer").innerHTML = timeFormatter(timeLeft);
  setInterval(() => {
    if (timeLeft >= 1) {
      document.getElementById("the-timer").innerHTML = timeFormatter(timeLeft);
      document.title = timeFormatter(timeLeft);
      timeLeft -= 1;
    } else {
      document.getElementById("the-timer").innerHTML = "Time's Up!";
      document.title = "Time's up!"
    }
  }, 1000)
}
