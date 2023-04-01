const fs = require('fs');

// Get the file path from the command line arguments
const filePath = process.argv[2];

// Read the file contents and print them to the console
fs.readFile("./file.txt", 'utf8', function(err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
