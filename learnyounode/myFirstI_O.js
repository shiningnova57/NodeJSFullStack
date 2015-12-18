/***************** my solution *********************/

var fs = require("fs");
var string = fs.readFileSync(process.argv[2]).toString().split("\n");
var total = 0;

for (var x = 0; x < string.length - 1; x++) {
	total += 1;
}

console.log(total);


/****************  easier method *******************/
/*

var fs = require('fs');
var contents = fs.readFileSync(process.argv[2]);
var lines = contents.toString().split('\n').length -1;
console.log(lines);

*/
/*************** easiest method ********************/
/*

var fs = require('fs');
var lines = fs.readFileSync(process.argv[2], "utf8").split('\n').length - 1;
console.log(lines);

*/
/***************************************************/

