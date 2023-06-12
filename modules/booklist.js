import Book from './book.js';

export const book = new Book();

export const bookListLoader = () => {
  if (document.location.hash === '' || document.location.hash === '#')
    document.location.hash = '#books';
};

export const bookListSetter = () => {
  if (book.bookList.length === 0) {
    const bookList = document.querySelector('#book-list');
    bookList.innerHTML = 'No recorded book list found';
  } else {
    book.bookListUI();
  }
};
