const fs = require('fs').promises;
const path = require('path');
const { consoleColor } = require('./console-colors');

const distPath = path.join(__dirname, '..', 'dist');

consoleColor(`Initiating build process`, 'yellow');

fs.access(distPath)
  .then(() => {
    return fs.rm(distPath, { recursive: true, force: true });
  })
  .then(() => {
    consoleColor(`Successfully deleted the directory: ${distPath}`, 'green');
  })
  .catch((error) => {
    if (error.code === 'ENOENT') {
      consoleColor(`No directory found at: ${distPath}`, 'red');
      consoleColor(`Directory will be created: ${distPath}`, 'blue');
    } else {
      console.error(error);
    }
  });
