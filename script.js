import { Book } from "./book.js";
import { User } from './user.js'
let roles = JSON.parse(localStorage.getItem('userRole')).map(x => x.name)
let user = new User(JSON.parse(localStorage.getItem('user')).login,
                    roles,
                    localStorage.getItem('token'));
                    
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
  }
  
  bks.forEach(book => {
    html += book.renderCard();
  })

  container.innerHTML = html;
}

if (user) { 
  renderBooks();
}