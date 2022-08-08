import { getLocalStorageBooks } from "./getLocalStorage.js";
export const setLocalStorage = (book) => {
    const books = getLocalStorageBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));

  }