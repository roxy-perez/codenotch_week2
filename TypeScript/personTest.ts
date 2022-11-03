import { Person } from "./person";

let rinoa = new Person("Rinoa Heartilly", 17, "Deling City");
console.log(rinoa);
rinoa.setAddress("Timber");
console.log(`Nueva dirección: ${rinoa.getAddress()}`);
rinoa.printName();
console.log(`Año de nacimiento: ${rinoa.yearOfBirth(2022)}`);