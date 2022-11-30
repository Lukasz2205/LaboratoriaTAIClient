let button = document.getElementById('download-csv');

button.addEventListener('click', function() {
  download('export_books.csv', 'http://127.0.0.1:3000/export_books.csv');
})

function download(filename, urldata) {
  var aLink = document.createElement('a');
  var evt = document.createEvent("HTMLEvents");
  aLink.download = filename;
  aLink.href = urldata;
  aLink.click();
}
