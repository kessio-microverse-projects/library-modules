/* eslint-disable max-classes-per-file */
import toggleNavItems from './modules/toggleNavItems.js';
import getLocalStorageBooks from './modules/getLocalStorage.js';
import formValues from './modules/formValues.js';
import renderAllBooks from './modules/renderAllBooks.js';
import setLocalStorage from './modules/setLocalStorage.js';
import RemoveBookFromLocalStorage from './modules/RemoveBookFromLocalStorage.js';
import { dateTime } from './modules/dateTime.js';

getLocalStorageBooks();
toggleNavItems();
renderAllBooks();

const timeDate = dateTime();
const datetime = document.querySelector('.date-time');
datetime.innerHTML = timeDate;

// Event add books
const form = document.getElementById('add-book');
form.addEventListener('submit', () => {
  const addedBooks = formValues();

  // Validate form before creating book object
  const errorMsg = document.getElementById('error');
  if (addedBooks.title.length === 0 || addedBooks.author.length === 0) {
    errorMsg.textContent = 'All fields must be filled in!';
  } else {
    setLocalStorage(addedBooks);
  }
});

// Events Remove books
const removeBook = document.querySelectorAll('.delete-btn');
removeBook.forEach((element) => {
  element.addEventListener('click', (e) => {
    const button = e.target;
    const removeid = e.target.id;
    RemoveBookFromLocalStorage(removeid);
    button.parentElement.parentElement.remove();
  });
});
