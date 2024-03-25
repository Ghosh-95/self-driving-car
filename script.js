"use strict";

import Road from "./modules/Roads.js";
import Car from "./modules/car.js"

const canvas = document.getElementById('myCanvas');
canvas.width = 240;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width * 0.9);
const car = new Car(road.getLaneCenter(1), 100, 50, 30);

(function animate() {
    car.update();
    canvas.height = window.innerHeight;

    ctx.save();
    ctx.translate(0, -car.y + canvas.height * 0.7);

    road.draw(ctx);
    car.draw(ctx);

    ctx.restore();

    requestAnimationFrame(animate);
})();