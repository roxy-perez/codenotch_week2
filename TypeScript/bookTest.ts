import { Book } from "./book";

let gabriel = new Book(
  "El Coronel No Tiene Quien Le Escriba",
  128,
  "9788439740728",
  "Gabriel García Márquez",
  "Literatura Random House"
);

let viktor = new Book(
  "Man's Search For Meaning",
  192,
  "9788425439896",
  "Viktor E. Frankl",
  "Heder"
);

console.log("\n-------- BOOKS --------\n")
console.log("-- :: Llamando métodos :: --")
viktor.setNPages(168);
console.log(viktor.toString());
//Haciendo get y set de algunas propiedades
gabriel.setTitle("Cien Años de Soledad");
gabriel.setIsbn("9788439732471");
gabriel.setNPages(400);
console.log(gabriel.getEditorial());
console.log(gabriel.getAuthor());

console.log("------------------")
console.log(gabriel.toString());

export { gabriel, viktor } 