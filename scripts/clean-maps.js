const fs = require('fs');
const path = require('path');
const { consoleColor } = require('./console-colors');

const distPath = path.join(__dirname, '..', 'dist');

consoleColor(`Removing map files...`, 'green');

function deleteMapFiles(directory) {
  const elements = fs.readdirSync(directory);

  for (const element of elements) {
    const fullPath = path.join(directory, element);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      deleteMapFiles(fullPath);
    } else if (stat.isFile() && path.extname(fullPath) === '.map') {
      fs.unlinkSync(fullPath);
    }
  }
}

deleteMapFiles(distPath);
