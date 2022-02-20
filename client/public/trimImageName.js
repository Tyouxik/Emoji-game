const fs = require('fs');

fs.readdir('images', function(err, files) {
  // handling error
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  // listing all files using forEach
  files.forEach(async function(file) {
    // Do whatever you want to do with the file

    if (file.includes(' ')) {
      await fs.promises.rename(`images/${file}`,
          `images/${file.replace(' ', '')}`);
    }
  });
});


