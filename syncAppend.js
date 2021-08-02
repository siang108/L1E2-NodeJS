var fs = require('fs')

fs.appendFileSync('input.txt', 'adding new text here...for sync');

var data = fs.readFileSync("input.txt");

console.log("Begin reading");
console.log(data.toString());
console.log("End reading");