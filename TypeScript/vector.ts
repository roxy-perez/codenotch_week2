export class Vector {
  private elements: number[];

  constructor(public n: number, public k: number) {
    this.elements = [];
    for (let i = 0; i < n; i++) {
      this.elements.push(Math.round(Math.random() * k));
    }
  }

  public print() {
    this.elements.forEach((ele) => console.log(ele));
  }

  public add(v1: Vector): Vector {
    let temp = new Vector(0, 0);
    for (let i = 0; i < this.elements.length; i++) {
      temp.elements[i] = v1.elements[i] + this.elements[i];
    }
    return temp;
  }

  public subs(v1: Vector): Vector {
    let temp = new Vector(0, 0);
    for (let i = 0; i < this.elements.length; i++) {
      temp.elements[i] = v1.elements[i] - this.elements[i];
    }
    return temp;
  }

  public mult(v1: Vector): Vector {
    let temp = new Vector(0, 0);
    for (let i = 0; i < this.elements.length; i++) {
      temp.elements[i] = v1.elements[i] * this.elements[i];
    }
    return temp;
  }

  public multNumber(n: number): Vector {
    let temp = new Vector(0, 0);
    for (let i = 0; i < this.elements.length; i++) {
      temp.elements[i] = n * this.elements[i];
    }
    return temp;
  }
}
