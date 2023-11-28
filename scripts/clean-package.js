const fs = require('fs');
const path = require('path');
const { consoleColor } = require('./console-colors');

function cleanPackageJson() {
  const originalPath = path.resolve(__dirname, '..', 'package.json');
  const distPath = path.resolve(__dirname, '..', 'dist', 'package.json');

  fs.readFile(originalPath, 'utf8', (err, data) => {
    if (err) throw err;

    consoleColor('Creating package.json for build', 'green');

    const packageJson = JSON.parse(data);

    delete packageJson.scripts;
    delete packageJson.devDependencies;

    if (!fs.existsSync(path.dirname(distPath))) {
      fs.mkdirSync(path.dirname(distPath), { recursive: true });
    }

    fs.writeFile(distPath, JSON.stringify(packageJson, null, 2), 'utf8', (writeErr) => {
      if (writeErr) throw writeErr;
    });
  });
}

cleanPackageJson();
