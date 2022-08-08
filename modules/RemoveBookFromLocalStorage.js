import { getLocalStorageBooks } from "./getLocalStorage.js";

export const RemoveBookFromLocalStorage = (removeid) => {
    const booksList = getLocalStorageBooks();
    const booksArray = booksList;
    const newlist = booksArray.filter((item) => parseInt(removeid, 10) !== item.myid);
    //console.log(newlist);
    localStorage.setItem('books', JSON.stringify(newlist));
  }