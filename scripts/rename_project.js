const fs = require('fs');
const path = require('path');

const rootDir = process.argv[2] || '.';
const oldName1 = /The Notchernest/g;
const newName1 = 'Nuture Nest';
const oldName2 = /Notchernest/g;
const newName2 = 'Nuture Nest';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (!['node_modules', '.git', '.next'].includes(f)) {
        walkDir(dirPath, callback);
      }
    } else {
      callback(path.join(dir, f));
    }
  });
}

const filesToProcess = [];
walkDir(rootDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.js') || filePath.endsWith('.json') || filePath.endsWith('.md')) {
    filesToProcess.push(filePath);
  }
});

filesToProcess.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content.replace(oldName1, newName1).replace(oldName2, newName2);
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
});
