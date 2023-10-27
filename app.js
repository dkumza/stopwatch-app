window.onload = function () {
   let minutes = 0;
   let seconds = 0;
   let tens = 0;
   const appendMinutes = document.querySelector("#minutes");
   const appendTens = document.querySelector("#tens");
   const appendSeconds = document.querySelector("#seconds");
   const startBtn = document.querySelector("#start");
   const stopBtn = document.querySelector("#stop");
   const resetBtn = document.querySelector("#reset");
   let interval;

   const startTimer = () => {
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

   startBtn.onclick = () => {
      clearInterval(interval);
      interval = setInterval(startTimer, 10);
   };

   stopBtn.onclick = () => {
      clearInterval(interval);
   };

   resetBtn.onclick = () => {
      clearInterval(interval);
      appendTens.textContent = "00";
      appendSeconds.textContent = "00";
      appendMinutes.textContent = "00";
   };
};
