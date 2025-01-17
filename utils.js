const fs = require('fs');

function writeToFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
    if (err) {
      console.error(err);
    }
  });
}

function getPostData(req) {
  return new Promise((resolve, reject) => {
    try {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString();
      });

      req.on('end', () => {
        resolve(body);
      });
    } catch (error) {
      reject(err);
    }
  });
}

module.exports = { writeToFile, getPostData };
