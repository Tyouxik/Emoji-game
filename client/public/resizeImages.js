const fs = require('fs');
const sharp = require('sharp');

fs.readdir('images', function(err, files) {
  // handling error
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  // listing all files using forEach
  files.forEach(async function(file) {
    // Do whatever you want to do with the file
    try {
      await sharp(`images/${file}`)
          .resize({
            width: 300,
          })
          .toFile(`images-sm/${file}`);

      console.log('Successfully resized an image!');
    } catch (err) {
      console.log('Sharp error', {file, err});
    }
  });
});


