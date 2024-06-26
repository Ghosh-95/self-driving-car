import { lerp } from "../utils/utils.js";
export default class Sensors {
    constructor(car) {
        this.car = car;
        this.rayCount = 5;
        this.raySpread = Math.PI / 2;
        this.rayLength = 120;

        this.rays = [];
        this.readings = [];
    }

    update(roadBorders) {
        this.#castRays();

        this.readings = [];
        for (let i = 0; i < this.rays.length; i++) {
            this.readings.push(
                this.#getReadings(this.rays[i], roadBorders)
            );
        };
    }

    #getReadings(ray, roadBorders) {
        let touches = [];

        for (let i = 0; i < roadBorders.length; i++) {
            let touch = getInterSection(
                ray[0],
                ray[1],
                roadBorders[i][0],
                roadBorders[i][1]
            );

            if (touch) touches.push(touch);
        }

        function getInterSection() {

        }
    }


    #castRays() {
        this.rays = [];
        for (let i = 0; i < this.rayCount; i++) {
            const rayAngle = lerp(
                this.raySpread / 2,
                -this.raySpread / 2,
                this.rayCount === 1 ? 0.5 : i / (this.rayCount - 1)) + this.car.angle;

            const start = { x: this.car.x, y: this.car.y };
            const end = {
                x: this.car.x - Math.sin(rayAngle) * this.rayLength,
                y: this.car.y - Math.cos(rayAngle) * this.rayLength,
            };

            this.rays.push([start, end]);
        }
    }

    draw(ctx) {
        for (let i = 0; i < this.rayCount; i++) {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'yellow';
            ctx.moveTo(
                this.rays[i][0].x, this.rays[i][0].y
            );
            ctx.lineTo(
                this.rays[i][1].x, this.rays[i][1].y
            );
            ctx.stroke();
        }
    }
}