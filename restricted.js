import { verifyUserData } from './verify.js'
import { User } from './user.js'

let data = document.querySelector('.data');

console.log(data)

if (!verifyUserData()) { 
  window.location.replace('/authorization.html');
} else {
  let user = new User(JSON.parse(localStorage.getItem('user')).login,
                    JSON.parse(localStorage.getItem('userRole'))[0]['name'],
                    localStorage.getItem('token'));
  createAdminData(user);
  console.log(user.getRole())
}

function createAdminData(user) {
  if (user.getRole() === 'Administrator') {
    data.innerHTML = 'Dane dla uzytkownika z rola A';
  } else if (user.getRole() === 'User') {
    data.innerHTML = 'Dane dla uzytkownika z rola B';
  } else {
    data.innerHTML = 'Dane dla uzytkownika bez roli';
  }
}
