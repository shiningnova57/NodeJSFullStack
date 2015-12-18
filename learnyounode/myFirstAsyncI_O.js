/*********************  My Solution ********************/

var fs = require ("fs");
var answer = 0;



fs.readFile(process.argv[2],"utf8", function (err, fileContents) {
	answer = fileContents.split("\n").length - 1;
	console.log(answer);
});

/*********************  Solution  ***********************/

// var fs = require('fs');
// var file = process.argv[2];

// fs.readFile(file,function(err,contents) {
// 	//fs.readFile(file,"utf8", callback) can be used?
// 	var lines = contents.toString().split('\n').length -1;
// 	console.log(lines);
// }

/************* Solution using callback *****************/

// var fs = require('fs');
// var file = process.argv[2];

// function callback(err,contents) {
// 	var lines = contents.split('\n').length -1;
// 	console.log(lines);
// }

// fs.readFile(file,"utf8",callback);