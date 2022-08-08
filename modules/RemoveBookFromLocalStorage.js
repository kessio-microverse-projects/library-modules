import getLocalStorageBooks from './getLocalStorage.js';

 const RemoveBookFromLocalStorage = (removeid) => {
  const booksList = getLocalStorageBooks();
  const booksArray = booksList;
  const newlist = booksArray.filter((item) => parseInt(removeid, 10) !== item.myid);
  localStorage.setItem('books', JSON.stringify(newlist));
};

export default RemoveBookFromLocalStorage;