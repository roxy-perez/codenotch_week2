import { Character } from './character.js';

// Reto 7
export class Contacts {

    constructor() {
        this.characters = [new Character()];
    }

    printCharacters() {
        this.characters.forEach(element => {
            console.log(element);
            console.log("***********");
        });
        
    }

}
