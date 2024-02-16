import { detectImpact } from "./functions/physics.js";
import { Cactus } from "./src/Entity/Cactus.js";
import { Dino } from "./src/Entity/Dino.js";
import { Dashboard } from "./src/Helper/Dashboard.js";
import { SpeedManager } from "./src/Helper/SpeedManager.js";


const dinoElt = document.getElementById('dino-layout').content.cloneNode(true).firstElementChild;
const cactusElt = document.getElementById('cactus-layout').content.cloneNode(true).firstElementChild;
const container = document.getElementById('container');


const dino = new Dino(dinoElt, container);
const cactus = new Cactus(cactusElt, container);
const dashboard = new Dashboard(document.getElementById('score'), document.getElementById('best-score'), document.getElementById('speed'));
const speedManager = new SpeedManager(25, 1);

let running = false;

document.addEventListener('keydown', function(e) {
    if(e.code === 'Space') {
        speedManager.start();
        cactus.run(speedManager);
        dashboard.start(speedManager);
        setTimeout(function() {
            running = true;
        })
    }
}, {
    once: true
});



document.addEventListener('keydown', function(e) {
    if(e.code === 'Space' && running) {
        dino.jump();
    }
});


const timer = setInterval(function() {
    if(detectImpact(cactusElt, dinoElt, 40)) {
        dino.die();
        cactus.stop();
        speedManager.stop();
        dashboard.stop();
        if(localStorage.getItem('score') === null || localStorage.getItem('score') < dashboard.score) {
            localStorage.setItem('score', dashboard.score);
        }
        document.getElementById('game-over').innerText = 'GAME OVER';
        clearInterval(timer);
    }
}, 1);


//ESSAYER DE FAIRE COMME çA

// detectImpact(cactusElt, dinoElt, 40)
// // .then(function(value) {
// //     console.log(value);
// //     dino.stop();
// //     cactus.stop();
// //     score.stop();
// //     document.getElementById('game-over').innerText = 'GAME OVER';
// // });











