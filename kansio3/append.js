var fs = require('fs');

fs.appendFile('./teksti/mynewfile1.txt', 'Hello sisältönä!', function (err) {
if (err) throw err;
console.log('Tallessa!');
});