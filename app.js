window.onload = function () {
   let minutes = 0;
   let seconds = 0;
   let tens = 0;
   let clicked = false;
   const appendMinutes = document.querySelector("#minutes");
   const appendTens = document.querySelector("#tens");
   const appendSeconds = document.querySelector("#seconds");
   const startBtn = document.querySelector("#start");
   const stopBtn = document.querySelector("#stop");
   const resetBtn = document.querySelector("#reset");
   const controls = document.querySelector(".controls-btn");
   let interval;

   const ifStopClicked = () => {
      if (clicked) {
         stopBtn.classList.remove("bi-pause-circle");
         stopBtn.classList.add("bi-play-circle");
      } else {
         stopBtn.classList.add("bi-pause-circle");
         stopBtn.classList.remove("bi-play-circle");
      }
   };

   const startTime = () => {
      clearInterval(interval);
      interval = setInterval(stopWatch, 10);
      startBtn.classList.add("hide");
      controls.classList.remove("hide");
      clicked = false;
   };

   const stopTime = () => {
      clearInterval(interval);
      if (!clicked) {
         clicked = true;
         ifStopClicked();
      } else {
         startTime();
         clicked = false;
         ifStopClicked();
      }
   };

   const resetTime = () => {
      clearInterval(interval);
      minutes = 0;
      seconds = 0;
      tens = 0;
      appendTens.textContent = "00";
      appendSeconds.textContent = "00";
      appendMinutes.textContent = "00";
      startBtn.classList.remove("hide");
      controls.classList.add("hide");
      clicked = false;
      ifStopClicked();
   };

   startBtn.addEventListener("click", startTime);
   stopBtn.addEventListener("click", stopTime);
   resetBtn.addEventListener("click", resetTime);

   const stopWatch = () => {
      tens++;
      if (tens <= 9) {
         appendTens.textContent = `0${tens}`;
      }
      if (tens > 9) {
         appendTens.textContent = tens;
      }

      if (tens > 99) {
         seconds++;
         appendSeconds.textContent = `0${seconds}`;
         tens = 0;
         appendTens.textContent = "00";
      }

      if (seconds > 9) {
         appendSeconds.textContent = seconds;
      }

      if (seconds > 59) {
         minutes++;
         appendMinutes.textContent = `0${minutes}`;
         seconds = 0;
         appendSeconds.textContent = "00";
      }
   };
};
