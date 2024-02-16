export class SpeedManager {

    /** @type {int} */
    speed;

    /** @type {int} */
    acceleration;


    #timer;

    /**
     * 
     * @param {number} initialSpeed 
     * @param {number} acceleration 
     */
    constructor(initialSpeed, acceleration) {
        this.speed = initialSpeed;
        this.acceleration = acceleration;
    }

    start() {
        const speedManager = this;
        this.#timer = setInterval(function() {
            speedManager.speed += speedManager.acceleration;
        }, 1000);
    }

    stop() {
        clearInterval(this.#timer);
        this.speed = 0;
    }
}