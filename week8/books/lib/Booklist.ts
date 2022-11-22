import { Book } from "./Book";

export class Booklist {
  nextBook : number;
  prevBook : number;
  currBook : number;
  bookList : Book[];
  constructor (booklist : Book[]){
    this.bookList = booklist;
    if(booklist[0] instanceof Book){
      this.currBook = 0;
    }
    if(booklist[1] instanceof Book){
      this.nextBook = 1;
    }
  }
  calcUnreadBooks() {
    this.bookList.filter((book)=> !book.read).length;
  }
  calcReadBooks(){
    this.bookList.filter((book)=> book.read).length;
  }

  add(book : Book){
    this.bookList = [...this.bookList, book];
  }

  finishCurrentBook() {
    this.bookList[this.currBook].read = true;
    this.bookList[this.currBook].readDate = new Date(Date.now());
    this.prevBook = this.currBook;
    this.currBook = this.nextBook;
    this.nextBook = -1;
  }
}