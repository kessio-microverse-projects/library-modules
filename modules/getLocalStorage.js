  const getLocalStorageBooks = () => {
  let bookks;
  if (localStorage.getItem('books') === null) {
    bookks = [];
  } else {
    bookks = JSON.parse(localStorage.getItem('books'));
  }
  return bookks;
};

export default getLocalStorageBooks;
