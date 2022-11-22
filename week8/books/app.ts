import { Book } from "./lib/Book";
import { Booklist } from "./lib/Booklist";

const book = new Book("Het Dolfijnenkind", "fsf", "fsdfsd");
const book1 = new Book("Het Dolfijnenkind 1", "fsf", "fsdfsd");
const book2 = new Book("Het Dolfijnenkind 2", "fsf", "fsdfsd");
const myBookList = new Booklist([book, book1, book2]);

console.log(myBookList.bookList[myBookList.currBook]);

myBookList.finishCurrentBook();
console.log(myBookList.currBook)
console.log(myBookList.bookList[myBookList.currBook]);
