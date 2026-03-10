const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'public', 'Nurture nest');
const destDir = path.join(__dirname, 'public', 'gallery');

const rooms = ['baby-room', 'toddler-room', 'preschool-room', 'garden'];
rooms.forEach(room => {
  const roomDir = path.join(destDir, room);
  if (!fs.existsSync(roomDir)) {
    fs.mkdirSync(roomDir, { recursive: true });
  }
});

const files = fs.readdirSync(srcDir).filter(f => f.toLowerCase().endsWith('.jpeg') || f.toLowerCase().endsWith('.jpg'));
// Sort to keep some consistency
files.sort();

files.forEach((file, index) => {
  // divide into 4 roughly equal groups
  const groupSize = Math.ceil(files.length / 4);
  let roomIdx = Math.floor(index / groupSize);
  if (roomIdx > 3) roomIdx = 3;
  
  const room = rooms[roomIdx];
  const destFile = path.join(destDir, room, `${index + 1}.jpeg`);
  console.log(`Copying ${file} to ${room}/${index + 1}.jpeg`);
  fs.copyFileSync(path.join(srcDir, file), destFile);
});
console.log('Done!');
