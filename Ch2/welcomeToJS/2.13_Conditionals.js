const age = parseInt(prompt("how old?"));

console.log(isNaN(age));

if (isNaN(age)) {
  console.log("나이를 입력하세요");
} else {
  console.log("나이 : " + age);
}
