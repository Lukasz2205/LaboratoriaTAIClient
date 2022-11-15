import { User } from './user.js'

let navbarUserName = document.querySelector('.navbar-item');
let logoutButton = document.querySelector('#Logout');

let user = new User(JSON.parse(localStorage.getItem('user')).login,
                    JSON.parse(localStorage.getItem('userRole'))[0]['name'],
                    localStorage.getItem('token'));

if (!user) { 
  window.location.replace('/authorization.html');
} else {
  displayUserName(user);
}
console.log(logoutButton)
logoutButton.addEventListener('click', function() {
  window.location.replace('/authorization.html');
  localStorage.removeItem('user');
  localStorage.removeItem('userRole');
  localStorage.removeItem('token');
})

function displayUserName(user) {
  navbarUserName.innerHTML = user.getName();
}