let timeLeft = 0;
let timer;
mixpanel.track("pageview");

const form = document.getElementById("the-form")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form)
  const minutes = parseInt(formData.get("minutes")) || 0
  const seconds = parseInt(formData.get("seconds")) || 0
  const total = (minutes * 60) + seconds
  timeLeft = total;

  console.log(minutes)
  console.log(seconds)

  hideForm()
  setLabels(timeFormatter(timeLeft));
  timer = window.setInterval(tick, 1000)
  mixpanel.track(`Timer started: ${timeFormatter(timeLeft)}`);
})

function tick() {
  if (timeLeft > 0) {
    timeLeft -= 1;
    setLabels(timeFormatter(timeLeft));
  } else {
    setLabels("Time's Up!")
    clearInterval(timer)
    alert("Time's Up!")
  }
}

function hideForm() {
  document.getElementById("the-form").className += " hidden"
}

const setLabels = (text) => {
  document.getElementById("the-timer").innerHTML = text;
  document.title = text;
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
