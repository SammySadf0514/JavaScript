const drums = document.querySelectorAll(".drum");
for (let i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });
}
document.addEventListener("keydown", function (eventKey) {
  let key = eventKey.key;
  // console.log(key);
  // console.log(eventKey);

  makeSound(key);
  animateButton(key);
});

function makeSound(sameer) {
  switch (sameer) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(sameer);
  }
}

function animateButton(key) {
  let activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
