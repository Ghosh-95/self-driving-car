import Controls from "./Controls.js";

export default class Car {
    constructor(x, y, height, width) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;

        this.controls = new Controls();
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(
            this.x - this.width / 2,
            this.y - this.height / 2,
            this.width,
            this.height,
        );
        ctx.fill();
    }

    update() {
        if (this.controls.forward) this.y -= 2;
        if (this.controls.reverse) this.y += 2
    }
}