function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");
console.log(bodyEl);
console.log(spanEl);
console.log(buttonEl);

const handlerBtnChangeColor = () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  console.dir(bodyEl);
  spanEl.textContent = bodyEl.style.backgroundColor;
};
buttonEl.addEventListener("click", handlerBtnChangeColor);
