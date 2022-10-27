import SpriteSheet from "./SpriteSheet.js";
import {loadImage} from "./loaders.js";

let main = () => {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");

    loadImage("./img/tiles.png").then(image => {
        let spritesheet = new SpriteSheet(image, 16, 16);
        spritesheet.defineTile("ground", 0, 0);
        spritesheet.draw("ground", context, 0, 0);
    })
}


window.onload = main;
