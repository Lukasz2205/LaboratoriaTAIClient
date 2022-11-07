import { Book } from "./book.js";

async function getBooks() {
  let url = 'https://glacial-cliffs-17238.herokuapp.com/api/books_api';
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderBooks() {
  let books = await getBooks();
  let html = '';
  let booksArray = [];
  
  books['books'].forEach(book => {
    booksArray.push(new Book(book.name, book.description, book.author, book.price, book.pages));
  })

  booksArray.forEach(book => {
    console.log(book.renderCard())
    html += book.renderCard();
  })

  let container = document.querySelector('.container');
  container.innerHTML = html;
}

renderBooks();