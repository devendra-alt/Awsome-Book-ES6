import { book, bookListLoader, bookListSetter } from './modules/booklist.js';
import { dateTimeGenerater } from './modules/luxonDateTime.js';

bookListLoader();

window.addEventListener('load', bookListSetter);

book.add();

dateTimeGenerater();
