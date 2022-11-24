const clock = document.querySelector("h2#clock");

function sayHello() {
  const date = new Date();
  const Hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerHTML = `${Hours}:${minutes}:${seconds}`;
  // function sayHello() {
  //  sayHello를 한줄로 가능
  //   clock.innerText = new Date().toLocaleTimeString();
  // }
}

sayHello();

setInterval(() => {
  sayHello();
}, 1000);

// setTimeout(() => {
//
//   sayHello();
// }, 2000);
