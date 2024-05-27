// console.log(randomNumber1);

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

let heading = document.querySelector("h1");

let button = document.querySelector(".play");

const dice = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

button.addEventListener("click", () => {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  img1.setAttribute("src", dice[randomNumber1 - 1]);
  img2.setAttribute("src", dice[randomNumber2 - 1]);

  if (randomNumber1 > randomNumber2) {
    heading.textContent = "🚩 Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    heading.textContent = "Player 2 Wins! 🚩";
  } else {
    heading.textContent = "Draw!";
  }
});
