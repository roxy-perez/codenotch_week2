/* Roxy Pérez - Codenotch - Day 6 
==================================*/
// Reto 6
import { Character } from './character.js';

// Testing class Character
let sephiroth = new Character("Sephiroth", "human", "male", 1.85, 80, "silver", "green", "Nibelheim", 1995, "soldier");
sephiroth.calcAge(2022);
sephiroth.hobbies = ['Fighting with long swords', 'Torturing Cloud', 'Devoting to Jenova'];
sephiroth.printAll(sephiroth);


