import { Person } from './person.js';

// Reto 7
export class Contacts {

    constructor() {
        this.persons = [];
    }

    printPersons() {
        this.persons.forEach(element => {
            element.printAll();
        });
    }
}
