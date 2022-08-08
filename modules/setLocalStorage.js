import { getLocalStorageBooks } from "./getLocalStorage.js";
export function setLocalStorage(book) {
    const books = getLocalStorageBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));

  }