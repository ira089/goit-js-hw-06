const inputControl = document.querySelector("#font-size-control");
const spanAbra = document.querySelector("#text");
// console.dir(inputControl);
// console.dir(spanAbra);
spanAbra.style.fontSize = `${inputControl.value}px`;
const hadlerTextControlInput = (event) => {
  const valueInput = event.currentTarget.value;
  spanAbra.style.fontSize = `${valueInput}px`;
};

inputControl.addEventListener("input", hadlerTextControlInput);
