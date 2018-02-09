var timeLeft = 0;

const form = document.getElementById("the-form")
console.log(form)

form.addEventListener("submit", (event) => {
  event.preventDefault();

  var formData = new FormData(form)
  const minutes = parseInt(formData.get("minutes"))
  const seconds = parseInt(formData.get("seconds"))

  const total = (minutes * 60) + seconds;
  timeLeft = total;

  startTimer(total);
  tick();
})

const startTimer = (seconds) => {
  document.getElementById("the-form").setAttribute("hidden", true)
  setTimeout(function(){
    alert("Your time is up!");
  }, (seconds * 1000));
}

const tick = () => {
  setInterval(() => {
    if (timeLeft > 1) {
      timeLeft -= 1; document.getElementById("the-timer").innerHTML = timeLeft;
    } else {
      document.getElementById("the-timer").innerHTML = "Time's Up!";
    }
  }, 1000)
}
