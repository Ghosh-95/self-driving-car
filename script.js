"use strict";

import Car from "./modules/car.js"

const canvas = document.getElementById('myCanvas');
canvas.height = window.innerHeight;
canvas.width = 200;

const ctx = canvas.getContext("2d");
const car = new Car(100, 100, 50, 30);

(function animate() {
    car.update();
    car.draw(ctx);
    requestAnimationFrame(animate);
})();