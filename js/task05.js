const inputName = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");
// console.dir(inputName);
// console.log(spanName.textContent);

const hadlerInputNameInput = (event) => {
  event.preventDefault();
  const valueInputTrim = event.currentTarget.value.trim();

  // console.dir(valueInputTrim);
  if (valueInputTrim !== "") {
    spanName.textContent = valueInputTrim;
  } else {
    spanName.textContent = "Anonymous";
  }
};

inputName.addEventListener("input", hadlerInputNameInput);
