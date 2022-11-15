import { User } from './user.js'

let roles = JSON.parse(localStorage.getItem('userRole')).map(x => x.name)
let data = document.querySelector('.data');
let aButton = document.querySelector('.a-role-button');
let bButton = document.querySelector('.b-role-button');
let user = new User(JSON.parse(localStorage.getItem('user')).login,
                    roles,
                    localStorage.getItem('token'));

if (!user) { 
  window.location.replace('/authorization.html');
} else {
  createAdminData(user);
}

aButton.addEventListener('click', function() {
  if (user.getRoles().includes('Administrator')) {
    alert('Rola A - OK');
  } else {
    alert('Brak uprawnien');
  }
});

bButton.addEventListener('click', function() {
  if (user.getRoles().includes('User')) {
    alert('Rola B - OK');
  } else {
    alert('Brak uprawnien');
  }
});

function createAdminData(user) {
  if (user.getRoles().includes('Administrator' && user.getRoles().includes('User'))) {
    data.innerHTML = 'Dane dla uzytkownika z rola B';
  } else if (user.getRoles().includes('User')) {
    data.innerHTML = 'Dane dla uzytkownika z rola B';
  } else {
    data.innerHTML = 'Nie widoczne dla tej roli';
  }
}
