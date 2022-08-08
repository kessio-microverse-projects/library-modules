import { getLocalStorageBooks } from "./getLocalStorage.js";

export function RemoveBookFromLocalStorage(removeid) {
    const booksList = getLocalStorageBooks();
    const booksArray = booksList;
    const newlist = booksArray.filter((item) => parseInt(removeid, 10) !== item.myid);
    //console.log(newlist);
    localStorage.setItem('books', JSON.stringify(newlist));
  }