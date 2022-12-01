let input = document.getElementById('csv-file').files[0];
let send_button = document.getElementById('send-csv');

const file = new FormData();
file.append('books_file', input, 'books_file.csv');


send_button.addEventListener('click', function() {
  fetch('http://127.0.0.1:3000/import_books', {
    method: 'POST',
    body: file 
  }).then(
    response => response.json() 
  ).then(
    success => console.log(success)
  ).catch(
    error => console.log(error) 
  );
})

