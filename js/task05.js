const inputName = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");
// console.dir(inputName);
// console.log(spanName.textContent);

const hadlerInputNameInput = (event) => {
  event.preventDefault();
  const valueInput = event.currentTarget.value;
  console.dir(valueInput);
  if (valueInput !== "") {
    spanName.textContent = valueInput;
  } else {
    spanName.textContent = "Anonymous";
  }
};

inputName.addEventListener("input", hadlerInputNameInput);
