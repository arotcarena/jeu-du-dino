export class Dashboard {
    /** @type {HTMLElement} */
    scoreElt;

    /** @type {HTMLElement} */
    bestScoreElt;

    /** @type {HTMLElement} */
    speedElt;

    /** @type {SpeedManager} */
    speedManager;

    /** @type {number} */
    score = 0;

    /** @type {number} */
    best = 0;

    /** @type {number} */
    #timer;

    /**
     * 
     * @param {HTMLElement} elt 
     */
    constructor(scoreElt, bestScoreElt, speedElt) {
        this.speedElt = speedElt;
        this.scoreElt = scoreElt;
        this.bestScoreElt = bestScoreElt;
        if(localStorage.getItem('score')) {
            this.best = localStorage.getItem('score');
            this.bestScoreElt.innerText = this.best + '';
        }
    }

    /**
     * 
     * @param {SpeedManager} speedManager 
     */
    start(speedManager) {
        const dashboard = this;
        this.#timer = setInterval(() => {
            dashboard.score += Math.round(speedManager.speed / 25);
            if(dashboard.score > dashboard.best) {
                dashboard.bestScoreElt.innerText = dashboard.score + '';
            }
            dashboard.scoreElt.innerText = dashboard.score + '';
            dashboard.speedElt.innerText = Math.round(speedManager.speed);
        }, 20);
    }

    stop() {
        clearInterval(this.#timer);
    }
}
