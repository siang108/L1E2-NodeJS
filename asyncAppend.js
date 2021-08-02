var fs = require("fs")

console.log("Begin reading");
fs.appendFile('input.txt', 'adding new text here...', function(err, data) {
  if (err) return console.error(err);
  //console.log(data.toString());
  //console.log('The "adding new text here" was appended to file!');
  fs.readFile('input.txt',function(err, data) {
  if (err) return console.error(err);

  console.log(data.toString());
  //console.log("End reading");
})


})

console.log("End reading");