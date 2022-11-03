import { Vector } from "./vector";

let ele = new Vector(5, 4);
let ele2 = new Vector(5, 6);
// Instanciamos un par de objetos para probar la clase Vector
console.log(":: Vector1 ::");
ele.print();
console.log(":: Vector2 ::");
ele2.print();
console.log("+ Suma de ambos :: \n", ele.add(ele2));
console.log("- Resta de ambos :: \n", ele.subs(ele2));
console.log("* Multiplicación x ambos :: \n", ele.mult(ele2));
console.log("** Multiplicación x 1 número :: \n", ele.multNumber(7));
