console.log("чаокакао");
const inputValidator = document.querySelector("#validation-input");
console.dir(inputValidator);
const dataValue = Number(inputValidator.dataset.length);
// inputValidator.classList.add("#validation-input.invalid");
console.log(typeof dataValue);

const hadlerInputvalidatorBlur = (event) => {
  //   event.preventDefault();
  const lengthInput = event.currentTarget.value.length;
  console.log(typeof lengthInput);
  if (lengthInput !== dataValue) {
    inputValidator.classList.add("#validation-input.invalid");
  } else {
    inputValidator.classList.add("#validation-input.valid");
  }
  console.log("qwe");
};

inputValidator.addEventListener("blur", hadlerInputvalidatorBlur);
