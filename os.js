const os = require('os');
const path = require('path');

console.log('OS Platform:', os.platform());
console.log('CPU Architecture:', os.arch());

const filePath = path.join(__dirname, 'student.txt');

const myUrl = new URL('http://www.google.com/?name=Aryan');

console.log('Full URL:', myUrl.href);
console.log('Protocol:', myUrl.protocol);
console.log('Host:', myUrl.host);
console.log('Hostname:', myUrl.hostname);
console.log('Path:', myUrl.pathname);
console.log('Query String:', myUrl.search);
console.log('Name Param:', myUrl.searchParams.get('name'));