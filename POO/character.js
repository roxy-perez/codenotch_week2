
// Reto 1 
export class Character {
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
        return console.log(`Edad del personaje: ${age} en el año ${year}`);

    }

    // Reto 4
    printAll(character) {
        for (const key in character) {
            console.log(key + " - " + character[key]);
        }

    }

    // Reto 5
    printHobbies() {
        return console.log(this.hobbies);
    }

}


