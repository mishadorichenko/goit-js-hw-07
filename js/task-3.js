const inputField = document.querySelector("#name-input");
const outputField = document.querySelector("#name-output");
inputField.addEventListener("input", (event) => {
  const textForOutput = event.currentTarget.value.trim();
  if (!textForOutput) {
    outputField.textContent = "Anonymous";
  } else {
    outputField.textContent = textForOutput;
  }
});
