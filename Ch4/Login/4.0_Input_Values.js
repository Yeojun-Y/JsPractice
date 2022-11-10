const SigninForm = document.querySelector("#signin-form");
const SigninInput = document.querySelector("#signin-form input");
const SigninButton = document.querySelector("#signin-form button");

function onSignInsubmit(event) {
    event.preventDefault();
    console.log(SigninInput.value);
}
SigninForm.addEventListener("submit", onSignInsubmit)