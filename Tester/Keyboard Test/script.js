const textArea = document.querySelector("#textarea");
const clear = document.querySelector(".clear-btn");

document.addEventListener("DOMContentLoaded", () => {
  function simulateKeyPress(key) {
    const event = new KeyboardEvent("keydown", { key: key });
    document.dispatchEvent(event);
    // textArea.innerHTML = `Key Pressed: ${key}`;
    // textArea.innerText = `                  ${key}`;
    if (key === " ") {
      textArea.innerHTML = `Key Pressed: Space`;
    } else if (key === "Meta") {
      textArea.innerHTML = `Key Pressed: Win`;
    } else {
      textArea.innerHTML = `Key Pressed: ${key}`;
    }
  }

  document.addEventListener("keydown", function (event) {
    const key = event.key;
    console.log(event);
    console.log(key);
    highlightButton(key);
    // textArea.innerHTML = `Key Pressed: ${key}`;
    if (key === " ") {
      textArea.innerHTML = `Key Pressed: Space`;
    } else {
      textArea.innerHTML = `Key Pressed: ${key}`;
    }
  });

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonText = button.innerText;
      let key;

      switch (buttonText) {
        case "Backspace":
          key = "Backspace";
          break;
        case "Tab":
          key = "Tab";
          break;
        case "Enter":
          key = "Enter";
          break;
        case "Shift":
          key = "Shift";
          break;
        case "Caps Lock":
          key = "CapsLock";
          break;
        case "\\":
          key = "\\";
          break;
        case "Ctrl":
          key = "Control";
          break;
        case "Win":
          key = "Meta";
          break;
        case "Alt":
          key = "Alt";
          break;
        case "Space":
          key = " ";
          break;
        case "~":
          key = "`";
          break;
        case "Esc":
          key = "Escape";
          break;
        case "AltGr":
          key = "AltGraph";
          break;
        default:
          key = buttonText;
      }

      simulateKeyPress(key);
    });
  });

  function highlightButton(key) {
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
      let buttonText = button.innerText;

      switch (key) {
        case "Backspace":
          if (button.classList.contains("back")) buttonText = "Backspace";
          break;
        case "Tab":
          if (button.classList.contains("tab")) buttonText = "Tab";
          break;
        case "Enter":
          if (button.classList.contains("enter")) buttonText = "Enter";
          break;
        case "Shift":
          if (button.classList.contains("shift")) buttonText = "Shift";
          break;
        case "CapsLock":
          if (button.classList.contains("cap")) buttonText = "Caps Lock";
          break;
        case "\\":
          if (button.classList.contains("slash")) buttonText = "\\";
          break;
        case " ":
          if (button.classList.contains("space")) buttonText = "Space";
          break;
        case "Control":
          if (button.innerText === "Ctrl") buttonText = "Ctrl";
          break;
        case "Meta":
          if (button.innerText === "Win") buttonText = "Win";
          break;
        case "Alt":
          if (button.innerText === "Alt") buttonText = "Alt";
          break;
        case "`":
          if (button.innerText === "~") buttonText = "~";
          break;
        case "Escape":
          if (button.innerText === "Esc") buttonText = "Esc";
          break;
        case "AltGraph":
          if (button.innerText === "AltGr") buttonText = "AltGr";
          break;
        default:
          if (buttonText.toLowerCase() !== key.toLowerCase()) return;
      }

      // button.classList.add("active");
      // setTimeout(() => button.classList.remove("active"), 200);
      if (
        buttonText.toLowerCase() === key.toLowerCase() ||
        (key === " " && buttonText === "Space") ||
        (key === "Control" && buttonText === "Ctrl") ||
        (key === "Meta" && buttonText === "Win") ||
        (key === "CapsLock" && buttonText === "Caps Lock") ||
        (key === "`" && buttonText === "~") ||
        (key === "Escape" && buttonText === "Esc") ||
        (key === "AltGraph" && buttonText === "AltGr")
      ) {
        button.classList.add("active");
        setTimeout(() => button.classList.remove("active"), 200);
      }
    });
  }
});

clear.addEventListener("click", () => {
  textArea.innerHTML = "";
});
