import { book, bookListLoader, bookListSetter } from './modules/booklist.js';

bookListLoader();

window.addEventListener('load', bookListSetter);

book.add();
