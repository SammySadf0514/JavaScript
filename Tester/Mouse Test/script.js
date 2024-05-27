const leftClick = document.querySelector(".mouse-1");
const middleClick = document.querySelector(".mouse-2");
const rightClick = document.querySelector(".mouse-3");

const reset = document.querySelector(".reset");

const leftClickCountDisplay = document.querySelector(".clicks-1");
const middleClickCountDisplay = document.querySelector(".clicks-2");
const rightClickCountDisplay = document.querySelector(".clicks-3");

let click = new Audio("sound/mouse-clicks.mp3");

let leftClickCount = 0;
let middleClickCount = 0;
let rightClickCount = 0;

document.addEventListener("click", () => {
  console.log("Left Click");
  leftClickCount++;
  leftClickCountDisplay.innerHTML = `Left clicks: <br> ${leftClickCount}`;
  leftClick.classList.add("clicked");
  setTimeout(() => {
    leftClick.classList.remove("clicked");
  }, 100);
  playAudio();
});

document.addEventListener("mousedown", (event) => {
  if (event.button === 1) {
    // console.log(event);
    console.log("Middle Click (Scroll Wheel) Detected");
    middleClickCount++;
    middleClickCountDisplay.innerHTML = `Middle clicks: <br> ${middleClickCount}`;
    middleClick.classList.add("clicked");
    setTimeout(() => {
      middleClick.classList.remove("clicked");
    }, 100);
    playAudio();
  }
});

document.addEventListener("contextmenu", (event) => {
  // console.log(event);
  event.preventDefault();
  console.log("Right Click");
  rightClickCount++;
  rightClickCountDisplay.innerHTML = `Right clicks: <br> ${rightClickCount}`;
  rightClick.classList.add("clicked");
  setTimeout(() => {
    rightClick.classList.remove("clicked");
  }, 100);
  playAudio();
});

reset.addEventListener("click", () => {
  console.clear();
  leftClickCount = 0;
  middleClickCount = 0;
  rightClickCount = 0;
  leftClickCountDisplay.innerHTML = `Left clicks: <br> `;
  middleClickCountDisplay.innerHTML = `Middle clicks: <br> `;
  rightClickCountDisplay.innerHTML = `Right clicks: <br>`;
});

function playAudio() {
  click.currentTime = 0;
  click.play();
}
