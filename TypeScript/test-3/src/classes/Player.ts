/** @format */
import { Isplayer } from "../interfaces/isPlayers.js";
export class player implements Isplayer {
    constructor(
        public name: string,
        public age: number,
        readonly country: string
    ) {}
    getProperty() {
        return this.age;
    }
    play() {
        console.log(`${this.name} from  ${this.country} is playing`);
    }
}
