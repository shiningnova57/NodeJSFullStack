var array = process.argv;
var answer = 0;

for (var x= 0; x < array.length; x++) {
	if (!isNaN(+array[x])) {
		answer += +array[x];
	} 
}

console.log(answer);