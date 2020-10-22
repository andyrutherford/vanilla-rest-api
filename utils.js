const fs = require('fs');

function writeToFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
    if (err) {
      console.error(err);
    }
  });
}

module.exports = { writeToFile };
