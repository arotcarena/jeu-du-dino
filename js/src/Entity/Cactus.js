import { SpeedManager } from "../Helper/SpeedManager.js";

export class Cactus {

    /** @type {HTMLElement} */
    elt;

    /** @type {number} */
    maxLeft;

    /** @type {number} */
    left;

    #timer;

    /** @type {boolean} */
    running;



    /**
     * 
     * @param {HTMLElement} elt 
     */
    constructor(elt, container) {
        this.elt = elt;
        this.maxLeft = document.body.getBoundingClientRect().width;
        this.left = this.maxLeft;
        this.#moove();
        container.append(this.elt);
    }


    /**
     * 
     * @param {SpeedManager} speedManager 
     */
    run(speedManager) {
        const cactus = this;
        this.#timer = setInterval(function() {
            if(cactus.left <= 0) {
                cactus.left = cactus.maxLeft;
            }
            cactus.goLeft(speedManager.speed / 100);
        }, 1);
    }

    stop() {
        clearInterval(this.#timer);
    }

    /**
     * 
     * @param {number} perCents 
     */
    goLeft(perCents) {
        this.left -= (this.maxLeft * perCents / 100);
        this.#moove();
    }



    #moove() {
        this.elt.style.left = this.left +'px';
    }
    

}