const subBtn = document.querySelector('button[data-action="decrement"]');
const addBtn = document.querySelector('button[data-action="increment"]');
const spanValue = document.querySelector("#value");
// console.log(spanValue);
// console.dir(subBtn);
// console.log(addBtn);
let counterValue = 0;
const hadlerSubBtnClick = () => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
};
subBtn.addEventListener("click", hadlerSubBtnClick);

const hadlerAddBtnClick = () => {
  counterValue += 1;
  spanValue.textContent = counterValue;
};
addBtn.addEventListener("click", hadlerAddBtnClick);
