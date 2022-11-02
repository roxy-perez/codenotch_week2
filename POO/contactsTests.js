import { Contacts } from "./contacts.js";
import { sephiroth, cloud } from './personTest.js';

// Reto 8
let contacts = new Contacts();
contacts.persons = [sephiroth, cloud];
contacts.printPersons();