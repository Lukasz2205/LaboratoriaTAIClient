import { Book } from "./book.js";

async function getBooks() {
  return fetch('http://127.0.0.1:3000/api/books_api', {
    method: "get",
    headers: {
      Authorization: window.localStorage.getItem('token'),
    }
    })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    })
}

async function renderBooks() {
  let container = document.querySelector('.content');
  let books = await getBooks();
  let html = '';
  let bks;
  if (!books.errors) {
      bks = books['books'].map(book => {
      return new Book(book.name, 
              book.description,
              book.author,
              book.price,
              book.pages);
    })
  } else {
    localStorage.removeItem('user');
    localStorage.removeItem('userRole');
    localStorage.removeItem('token');
    window.location.replace('/authorization.html');
  }
  
  bks.forEach(book => {
    html += book.renderCard();
  })

  container.innerHTML = html;
}

renderBooks();