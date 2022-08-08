import { getLocalStorageBooks } from "./getLocalStorage.js";

export const renderAllBooks = () => {
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