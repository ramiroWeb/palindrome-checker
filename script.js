const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");
const regExp = /[^A-Za-z0-9]/gi;

const checkForPalindrome = (input) => {
  const originalInput = input;
  if (input === "") {
    alert("Please input a value");
    return;
  }
  resultDiv.replaceChildren();

  const lowerCaseText = input.replace(regExp, "").toLowerCase();
  let msgResult = `<strong>${originalInput}</strong>
  ${
    lowerCaseText === [...lowerCaseText].reverse().join("") ? "is" : "is not"
  } a palindrome`;

  const pTag = document.createElement("p");
  pTag.className = "user-input"; //si necesitas relacionar un elemento de js con css, utiliza className
  pTag.innerHTML = msgResult;
  resultDiv.appendChild(pTag);

  //muestra el resultado pero queda para siempre entonces remueve la clase de hidden
  resultDiv.classList.remove("hidden");
  console.log(lowerCaseText);
};

checkBtn.addEventListener("click", () => {
  checkForPalindrome(textInput.value);
  textInput.value = "";
});
textInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkForPalindrome(textInput.value);
    textInput.value = "";
  }
});
