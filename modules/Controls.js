export default class Controls {
    constructor() {
        this.forward = false;
        this.reverse = false;
        this.right = false;
        this.left = false;

        this.#handleCarDirection();
    }

    #handleCarDirection() {
        document.onkeydown = this.#utilityFunc(true);
        document.onkeyup = this.#utilityFunc(false);
    }

    #utilityFunc(state) {
        return (e) => {
            switch (e.key) {
                case 'ArrowRight':
                    this.right = state;
                    break;
                case 'ArrowLeft':
                    this.left = state;
                    break;
                case 'ArrowDown':
                    this.reverse = state;
                    break;
                case 'ArrowUp':
                    this.forward = state;
                    break;
            };
        };
    };
};