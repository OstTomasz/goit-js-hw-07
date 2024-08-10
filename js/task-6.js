function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("div#controls");
const input = document.querySelector("div#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
  const BASE_SIZE = 30;
  const SIZE_RATIO = 10;

  const newBoxes = Array.from({ length: amount }, (_, i) => {
    const size = `${BASE_SIZE + (i + boxes.children.length) * SIZE_RATIO}px`;

    const box = document.createElement("div");
    box.style.width = size;
    box.style.height = size;
    box.style.backgroundColor = getRandomHexColor();

    return box;
  });

  const fragment = document.createDocumentFragment();
  fragment.append(...newBoxes);

  boxes.prepend(fragment);
};

createBtn.addEventListener("click", (event) => {
  if (input.value > 0 && input.value <= 100) {
    // boxes.innerHTML = "";
    createBoxes(input.value);
    input.value = "";
  }
});

destroyBtn.addEventListener("click", (event) => (boxes.innerHTML = ""));
