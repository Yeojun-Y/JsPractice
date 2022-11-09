const h1 = document.querySelector("div.hello:first-child h1");

function handTitleClick() {
    h1.classList.toggle("123");
    //함수로 대체가능
    // const activecss = "123";
    // if(h1.classList.contains(activecss)) {
    //     h1.classList.remove(activecss);
    // } else {
    //     h1.classList.add(activecss);
    // }
}
h1.addEventListener("click", handTitleClick);
// h1.onclick = handTitleClick;
