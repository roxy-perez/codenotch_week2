
// Reto 1 
export class Person {
    constructor(name, race, gender, height, weight, hair, eyes, home, yearOfBirth, occupation, hobbies = []) {
        this.name = name;
        this.race = race;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
        this.hair = hair;
        this.eyes = eyes;
        this.home = home;
        this.yearOfBirth = yearOfBirth;
        this.occupation = occupation;
        this.IMC = Math.round(this.getIMC());
        this.hobbies = hobbies;

    }

    // Reto 2
    getIMC() {
        return (this.weight) / (this.height * this.height)
    }

    // Reto 3
    calcAge(year) {
        let age = Math.abs(this.yearOfBirth - year);
        return age;

    }

    // Reto 4
    printAll(person) {
        for (const key in person) {
            console.log(key + " - " + person[key]);
        }

    }

    // Reto 5
    printHobbies() {
        return this.hobbies;
    }

}


