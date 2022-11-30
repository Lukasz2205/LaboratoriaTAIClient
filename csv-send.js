let input = document.getElementById('csv-file');
let snd_button = document.getElementById('send-csv');
var file = new FormData()
file.append('file', input.files[0])
file.append('user', 'hubot')


snd_button.addEventListener('click', function() {
  upload(input.file);
})

const upload = (file) => {
  fetch('http://127.0.0.1:3000/import_books', { // Your POST endpoint
    method: 'POST',
    headers: {
      "Content-Type": "text/csv"
    },
    body: file 
  }).then(
    response => response.json() 
  ).then(
    success => console.log(success)
  ).catch(
    error => console.log(error) 
  )
};