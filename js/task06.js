const inputValidator = document.querySelector("#validation-input");
// console.dir(inputValidator);
const dataValue = Number(inputValidator.dataset.length);

// console.log(typeof dataValue);

const hadlerInputvalidatorBlur = (event) => {
  const lengthInputTrim = event.currentTarget.value.trim();
  const lengthInput = lengthInputTrim.length;

  console.log(typeof lengthInput);
  if (lengthInput !== dataValue) {
    inputValidator.classList.remove("valid");
    inputValidator.classList.add("invalid");
  } else {
    inputValidator.classList.remove("invalid");
    inputValidator.classList.add("valid");
  }
};

inputValidator.addEventListener("blur", hadlerInputvalidatorBlur);
