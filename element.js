import { verifyUserData } from './verify.js'
import { User } from './user.js'

let navbarUserName = document.querySelector('.navbar-items');

if (!verifyUserData()) { 
  window.location.replace('/authorization.html');
} else {
  let user = new User(JSON.parse(localStorage.getItem('user')).login,
                    JSON.parse(localStorage.getItem('userRole'))[0]['name'],
                    localStorage.getItem('token'));
  displayUserName(user);
}

function displayUserName(user) {
  navbarUserName.innerHTML = user.getName();
}