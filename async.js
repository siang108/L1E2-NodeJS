var fs = require("fs");

console.log("Begin reading");
fs.readFile('input.txt',function(err, data) {
	if (err) return console.error(err);

	console.log(data.toString());
	//console.log("End reading");
})

console.log("End reading");

//async - while waiting finish reading file, line 10 is execute first then execute line 7