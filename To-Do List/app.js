function handleCheckboxClick(event) {
  const listItem = event.target.parentElement;
  if (event.target.checked) {
    listItem.style.textDecoration = "line-through";
  } else {
    listItem.style.textDecoration = "none";
  }
}

const input = document.getElementById("input");
const add = document.getElementById("add");
const list = document.getElementById("list");

add.addEventListener("click", () => {
  const text = input.value;
  if (text === "") {
    alert("Please enter a task");
  } else {
    const li = document.createElement("li");
    li.innerHTML = `
        <input type="checkbox" class="done-checkbox" id="done" />
        <span>${text}</span>
        <button class="delete">Delete</button>
      `;
    list.appendChild(li);
    input.value = "";
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    add.click();
  }
});

list.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
  }
});

list.addEventListener("change", (event) => {
  if (event.target.classList.contains("done-checkbox")) {
    handleCheckboxClick(event);
  }
});
