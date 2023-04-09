const container = document.querySelector(".container");
const text = document.getElementById("text");

let totalTime = 7500;
let breathTime = (totalTime / 5) * 2;
let holdtime = totalTime / 5;

meditateAnime();

function meditateAnime() {
  text.innerHTML = "吸って！";
  container.className = "container grow";

  setTimeout(() => {
    text.innerHTML = "止めて！"

    setTimeout(() => {
      text.innerHTML = "吐いて！";
      container.className = "container shrink";

    }, holdtime);

  }, breathTime);
}

setInterval(meditateAnime, totalTime);
