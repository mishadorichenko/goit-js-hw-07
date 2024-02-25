const numberInput = document.querySelector('input[type = "number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  destroyBoxes();
  const boxAmount = parseInt(numberInput.value, 10);
  if (boxAmount > 0 && boxAmount <= 100) {
    for (let i = 0; i < boxAmount; i++) {
      const newBox = document.createElement("div");
      newBox.style.backgroundColor = getRandomHexColor();
      newBox.style.width = `${30 + 10 * i}px`;
      newBox.style.height = `${30 + 10 * i}px`;
      newBox.className = "box";
      boxes.append(newBox);
    }
  }
  numberInput.value = "";
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
