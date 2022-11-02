import { Person } from './person.js';

// Reto 7
export class Contacts {

    constructor() {
        this.persons = [new Person()];
    }

    printPersons() {
        this.persons.forEach(element => {
            console.log(element);
            console.log("***********");
        });
        
    }

}
