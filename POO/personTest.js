/* Roxy Pérez - Codenotch - Day 6 
==================================*/
// Reto 6
import { Person } from './person.js';

// Testing class Character
let sephiroth = new Person("Sephiroth", "human", "male", 1.85, 80, "silver", "green", "Nibelheim", 1995, "soldier");
console.log(`Edad del personaje: ${sephiroth.calcAge(2022)}`);
sephiroth.hobbies = ['Fighting with long swords', 'Torturing Cloud', 'Devoting to Jenova'];
sephiroth.printAll(sephiroth);

let cloud = new Person("Cloud Strife", "human", "male", 1.73, 72, "blond", "blue", "Nibelheim", 1996, "Mercenary");
console.log(`Edad del personaje: ${cloud.calcAge(2022)}`);
cloud.hobbies = ['Swordsmanship', 'Persuiting Sephiroth', 'Focused Thrust'];
cloud.printAll(cloud);

export { sephiroth, cloud }

