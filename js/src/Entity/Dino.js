export class Dino {

    /** @type {HTMLElement} */
    elt;

    /** @type {number} */
    maxTop;

    /** @type {number} */
    minTop;

    /** @type {number} */
    top;

    #upTimer;

    #downTimer;

    /** @type {boolean} */
    jumping = false;

    /** @type {boolean} */
    #dead = false;



    /**
     * 
     * @param {HTMLElement} elt 
     * @param {HTMLElement} container 
     */
    constructor(elt, container) {
        container.prepend(elt);
        this.elt = elt;
        this.maxTop = elt.getBoundingClientRect().top;
        this.top = this.maxTop;
        this.minTop = this.maxTop / 1.7;
        this.#moove();
    }

    jump() {
        if(this.jumping || this.#dead) {
            return;
        }
        this.jumping = true;
        const dino = this;
        dino.#upTimer = setInterval(function() {
            if(dino.top <= dino.minTop) {
                clearInterval(dino.#upTimer);
                dino.#downTimer = setInterval(function() {

                    if(dino.top >= dino.maxTop) {
                        dino.jumping = false;
                        clearInterval(dino.#downTimer);
                    }
                    dino.down(0.8);
                }, 1);
            }
            dino.up(1.2);
        }, 1);
    }

    die() {
        this.#dead = true;
        clearInterval(this.#upTimer);
        clearInterval(this.#downTimer);
    }

    /**
     * 
     * @param {number} perCents 
     */
    up(perCents) {
        this.top -= (this.maxTop * perCents / 100);
        this.#moove();

    }

    /**
     * 
     * @param {number} perCents 
     */
    down(perCents) {
        this.top += (this.maxTop * perCents / 100);
        this.#moove();

    }

    #moove() {
        this.elt.style.top = this.top +'px';
    }
    

}