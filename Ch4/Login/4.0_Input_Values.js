const loginInput = loginForm.querySelector("#login-form input");
const loginButton = loginForm.querySelector("#login-form button");

function onBtnClick() {
    console.log("click!");
}
loginButton.addEventListener("click", onBtnClick);
