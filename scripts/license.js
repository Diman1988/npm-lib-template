const fs = require('fs');
const path = require('path');
const { consoleColor } = require('./console-colors');

function addLicense() {
  const originalPath = path.resolve(__dirname, '..', 'LICENSE');
  const distPath = path.resolve(__dirname, '..', 'dist', 'LICENSE');

  if (!fs.existsSync(path.dirname(distPath))) {
    fs.mkdirSync(path.dirname(distPath), { recursive: true });
  }

  fs.copyFile(originalPath, distPath, (err) => {
    if (err) throw err;
    consoleColor('LICENSE copied for build', 'green');
  });
}

addLicense();
