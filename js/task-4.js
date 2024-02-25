const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", registerSubmit);

function registerSubmit(event) {
  event.preventDefault();
  const registerObject = {};
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  if (!email || !password) {
    return alert("All form fields must be filled in");
  }

  registerObject.email = email;
  registerObject.password = password;

  console.log(registerObject);
  form.reset();
}
