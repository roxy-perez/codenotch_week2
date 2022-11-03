export class Book {
  constructor(
    private title: string,
    private nPages: number,
    private isbn: string,
    private author: string,
    private editorial: string
  ) {}

  //Getters and setters
  public getTitle(): string {
    return this.title;
  }
  public getNPages(): number {
    return this.nPages;
  }
  public getIsbn(): string {
    return this.isbn;
  }
  public getAuthor(): string {
    return this.author;
  }
  public getEditorial(): string {
    return this.editorial;
  }
  
  public setTitle(title: string) {
    this.title = title;
  }
  public setNPages(nPages: number) {
    this.nPages = nPages;
  }
  public setIsbn(isbn: string) {
    this.isbn = isbn;
  }
  public setAuthor(author: string) {
    this.author = author;
  }
  public setEditorial(editorial: string) {
    this.editorial = editorial;
  }

  //Método toString()
  public toString(): string {
    return `Title - ${this.title} \nNumber of pages - ${this.nPages} \nAuthor - ${this.author} \nEditorial - ${this.editorial}`;
  }
}
