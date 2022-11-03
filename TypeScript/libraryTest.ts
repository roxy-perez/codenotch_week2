import { Library } from "./library";
import { Book } from "./book";
import { gabriel, viktor } from "./bookTest";

let anne = new Book(
  "Interview with the Vampire",
  346,
  "9780354040365",
  "Anne Rice",
  "Knopf"
);

let library = new Library([anne, gabriel, viktor], "Oficina de Las Palmas", "");
library.setManager("Roberto Pérez");
console.log("\n-------- LIBRARY --------\n");
console.log(`Cantidad de libros en la librería :: ${library.getNumberOfBooks()}\n`);
console.log("Libro encontrado :: ",library.findByAuthor("Anne Rice"));
console.log("\n-------- Todos los libros --------\n");
console.log(library.toString());
