const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
   const start = new Date().getTime();
   const end = input.value * 60 * 1000 + start;
   let timer = setInterval(update, 1000);

   function update() {
      const current = new Date().getTime();
      let remaining = (end - current) / 1000;
      output.textContent = `${Math.floor(remaining / 60)}m ${Math.floor(
         remaining % 60
      )}s`;
   }
   update();
});
