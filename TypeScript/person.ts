export class Person {
  constructor(
    public name: string,
    public age: number,
    private address: string
  ) {}

  // Methods
  public printName() {
    console.log(`Personaje: ${this.name}`);
  }

  public yearOfBirth(currentYear: number): number {
    return currentYear - this.age;
  }

  getAddress(): string {
    return this.address;
  }

  setAddress(address: string) {
    this.address = address;
  }
}

