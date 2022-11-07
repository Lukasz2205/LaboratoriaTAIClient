

let loginInput = document.getElementById('login-input');
let passInput = document.getElementById('password-input');
let submit = document.getElementById('submit-form');

function formData() {
  let data = { login: loginInput.value, password: passInput.value, authentication_api: { login: loginInput.value, password: passInput.value } }
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
  })
  .catch((error) => {
    console.error('Error:', error);
  })
}