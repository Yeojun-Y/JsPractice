const SigninForm = document.querySelector("#signin-form");
const SigninInput = document.querySelector("#signin-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASS = "hidden";
function onSignInsubmit(event) {
  event.preventDefault();
  const username = SigninInput.value;
  SigninForm.classList.add(HIDDEN_CLASS);
  localStorage.setItem("username", username);
//   greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASS);
  
}

SigninForm.addEventListener("submit", onSignInsubmit);
