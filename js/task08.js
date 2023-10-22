const formaEl = document.querySelector(".login-form");

const handlerSubmit = (event) => {
  event.preventDefault();
  //   console.dir(formaEl);
  const { email, password } = event.currentTarget.elements;
  //   console.log(email.value);
  //   console.log(password.value);
  if (email.value === "" || password.value === "") {
    alert("Fill out all form fields");
  }
  const user = {
    email: email.value,
    password: password.value,
  };
  console.log(user);
  formaEl.reset();
};
formaEl.addEventListener("submit", handlerSubmit);
