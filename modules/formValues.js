import { Books } from "./book.js";
export const formValues = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const myid = Math.floor(Math.random() * 100);
    const addedBooks = new Books(title, author, myid);
    return addedBooks;
    }