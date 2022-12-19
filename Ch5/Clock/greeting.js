const SigninForm = document.querySelector("#signin-form");
const SigninInput = document.querySelector("#signin-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onSignInsubmit(event) {
  event.preventDefault();
  const username1 = SigninInput.value;
  SigninForm.classList.add(HIDDEN_CLASS);
  console.log(SigninForm.classList);
  localStorage.setItem(USERNAME_KEY, username1);
  paintGreeting(username1);
}
function paintGreeting(event) {
  greeting.innerText = `Hello! ${event}, Good to See You`;
  greeting.classList.remove(HIDDEN_CLASS);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  //show form
  SigninForm.classList.remove(HIDDEN_CLASS);
  SigninForm.addEventListener("submit", onSignInsubmit);
} else {
  SigninForm.classList.add(HIDDEN_CLASS);
  paintGreeting(savedUsername);
  localStorage.removeItem(USERNAME_KEY);
}
