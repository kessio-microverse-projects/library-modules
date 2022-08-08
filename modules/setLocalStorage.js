import getLocalStorageBooks from './getLocalStorage.js';

  const setLocalStorage = (book) => {
  const books = getLocalStorageBooks();
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
};

export default setLocalStorage;