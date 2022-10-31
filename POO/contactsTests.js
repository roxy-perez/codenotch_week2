import { Contacts } from "./contacts.js";
import { sephiroth, cloud } from './characterTest.js';

// Reto 8
let contacts = new Contacts();
contacts.characters = [sephiroth, cloud];
contacts.printCharacters();