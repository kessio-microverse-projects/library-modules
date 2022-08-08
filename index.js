import { getLocalStorageBooks } from "./modules/getLocalStorage.js";
import {formValues} from "./modules/formValues.js";

getLocalStorageBooks();
const form = document.getElementById('add-book');
 form.addEventListener('submit', (e) => {
   e.preventDefault();
   //console.log("Cliked");
  const addedBooks = formValues();
 // console.log(addedBooks);
 // setLocalStorage(addedBooks);
  //renderAddedBook(addedBooks);
  
});
  

/*function getLocalStorageBooks() {
    let bookks;
    if (localStorage.getItem('books') === null) {
      bookks = [];
    } else {
      bookks = JSON.parse(localStorage.getItem('books'));
    }
    return bookks;
  }

  function setLocalStorage(book) {
    const books = getLocalStorageBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));

  }
   function generateID() {
    return Math.floor(Math.random() * 100);
  }

  function formValues() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const myid = generateID();
  const addedBooks = new Books(title, author, myid);
  return addedBooks;
  }
  function renderAllBooks() {
    const booksContainer = document.querySelector('.book-details');
    const allBooks = getLocalStorageBooks();
    allBooks.forEach(book => { 
       booksContainer.innerHTML += `
      <tr>
      <td colspan="2">      
          "${book.title}" by ${book.author}
      </td>
      <td>
          <button class="delete-btn" id="${book.myid} ">Remove</button>
      </td>
  </tr>`;  
        
       });
    
  }
  renderAllBooks();

  function renderAddedBook(book) {
    const booksContainer = document.querySelector('.added-book');
    booksContainer.innerHTML += `
      <tr>
      <td colspan="2">
          "${book.title}" by ${book.author}
      </td>
  </tr>`;  
  }

   // Remove book from local storage
   function RemoveBookFromLocalStorage(removeid) {
    const booksList = getLocalStorageBooks();
    const booksArray = booksList;
    const newlist = booksArray.filter((item) => parseInt(removeid, 10) !== item.myid);
    //console.log(newlist);
    localStorage.setItem('books', JSON.stringify(newlist));
  }
  
// Events
function addBookButton () {
 const form = document.getElementById('add-book');
 form.addEventListener('submit', (e) => {
   e.preventDefault();
    const addedBooks = formValues();
  setLocalStorage(addedBooks);
  renderAddedBook(addedBooks);
  
});

  }
  addBookButton ();

  // Events Remove books
const removeBook = document.querySelectorAll('.delete-btn');
removeBook.forEach((element) => {
  element.addEventListener('click', (e) => {
   // e.preventDefault();
    const button = e.target;
    const removeid = e.target.id;
    RemoveBookFromLocalStorage(removeid);
    button.parentElement.parentElement.remove();
  });
});

const menuItems = document.querySelectorAll('.menu-items');
const container = document.querySelectorAll('.container');

menuItems.forEach((navLink) => {
  navLink.addEventListener('click', (e) => {
    const linkID = e.target.className
    container.forEach((section) => {
      section.classList.remove('active');
      if (section.id === linkID) {
        section.classList.add('active');
      }
    });
  });
});
*/