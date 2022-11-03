import { Book } from "./book";
export class Library {
  constructor(
    private books: Book[],
    private address: string,
    private manager: string
  ) {}

  public getAddress(): string {
    return this.address;
  }
  public getManager(): string {
    return this.manager;
  }

  public setAddress(address: string) {
    this.address = address;
  }

  public setManager(manager: string) {
    this.manager = manager;
  }

  public getNumberOfBooks(): number {
    return this.books.length;
  }

  public findByAuthor(author: string): Book[] {
    return this.books.filter((book) => book.getAuthor() === author);
  }

  public toString(): string {
    let book: string = "";
    let count: number = 1;
    for (let index = 0; index < this.books.length; index++) {
      book += "Book" + count + "\n" + this.books[index].toString() + "\n\n";
      count++;
    }
    return book;
  }
  
}
