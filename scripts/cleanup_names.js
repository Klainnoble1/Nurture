const fs = require('fs');
const path = require('path');

const rootDir = process.argv[2] || '.';
const searchPatterns = [
  /The The The Nurture Nest/g,
  /The The Nurture Nest/g
];
const replacement = 'The Nurture Nest';

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
  let newContent = content;
  searchPatterns.forEach(pattern => {
    newContent = newContent.replace(pattern, replacement);
  });
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Cleaned up: ${filePath}`);
  }
});
