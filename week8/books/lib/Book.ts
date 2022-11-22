export class Book {
  constructor(
    public title: string, 
    public genre: string, 
    public author: string, 
    public read : boolean = false, 
    public readDate : null | Date = null
    )
   {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = read;
    this.readDate = readDate;
  }
}

