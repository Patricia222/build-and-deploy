import {
  getSecondsLeftOfYear,
  getSecondsLeftChristmas,
  getTimeString,
} from "./clock";

const timeContainer = document.getElementById("time");
const timeLeft = document.getElementById("seconds-left");
const christmasLeft = document.getElementById("christmas-left");

const render = () => {
  const now = new Date();
  timeLeft.innerText = getSecondsLeftOfYear(now);
  christmasLeft.innerText = getSecondsLeftChristmas(now);
  timeContainer.innerText = getTimeString(now);
};

render();
setInterval(render, 1000);
