import { User } from './user.js';

let loginInput = document.getElementById('login-input');
let passInput = document.getElementById('password-input');
let submit = document.getElementById('submit-form');

function formData() {
  let data = { login: loginInput.value, password: passInput.value }
  return data;
};

submit.addEventListener('click', function() {
  postData(formData());
})

function postData(data) {
  fetch('http://127.0.0.1:3000/api/login', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);    
    window.localStorage.setItem('user', JSON.stringify(data.user));
    window.localStorage.setItem('userRole', JSON.stringify(data.roles));
    window.localStorage.setItem('token', data.token);
    createUser(data);
    window.location.replace('/index.html');
  })
  .catch((error) => {
    console.error('Error:', error);
  })
}

function createUser(data) {
  let user = new User(data.login, data.roles[0]['name'], data.token)
}