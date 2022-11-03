import { Person } from "./person";
export class Contacts {
  public persons: Person[];

  constructor() {
    this.persons = [];
  }

  public printCalendar() {
    this.persons.forEach((person) => {
      console.log(person);
    });
  }
}
