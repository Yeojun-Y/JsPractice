const images = ["1.jpg", "2.jpg", "3.jpg"];

const point = Math.random() * images.length;
const floorPoint = Math.floor(point);

const bgImage = document.createElement("img");

bgImage.src = `Ch5/img/${floorPoint}.jpg`;

document.body.appendChild(bgImage);
