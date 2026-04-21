const fs = require('fs');

const fileName = 'student.txt';

fs.writeFileSync(fileName, 'Student Log Start\n');
console.log('File created and written.');

const data = fs.readFileSync(fileName, 'utf-8');
console.log('Reading file:\n', data);

fs.appendFileSync(fileName, 'New activity added\n');
console.log('Data appended.');

const updatedData = fs.readFileSync(fileName, 'utf-8');
console.log('Updated file:\n', updatedData);

// Delete (optional)
// fs.unlinkSync(fileName);
// console.log('File deleted.');