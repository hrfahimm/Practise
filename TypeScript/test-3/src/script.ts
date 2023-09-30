/** @format */
import { player } from "./classes/Player.js";
import { Isplayer } from "./interfaces/isPlayers.js";

const fahim = new player("fahim", 20, "bd");
let hasib: Isplayer;

hasib = new player("hasib", 35, "bd");

//     console.log(hasib.name);
//     //not support only under class
//access out side but not modify
//console.log(hasib.age);
console.log(fahim.country);

const players: Isplayer[] = [];

players.push(fahim);
players.push(hasib);

// interface RectangleOption {
//     width: number;
//     lenght: number;
// }
// function drawRectangle(options: RectangleOption) {
//     let width = options.width;
//     let lenght = options.lenght;
// }
// let threeDdoptions = {
//     width: 30,
//     lenght: 20,
//     height: 10,
// };
// drawRectangle(threeDdoptions);
