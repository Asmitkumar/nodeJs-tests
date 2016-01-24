var fs = require('fs')

var contents = fs.readFileSync(process.argv[2])
// To print lines in the file
//var lines = contents.toString()
// To print the number of lines in a file
var lines = contents.toString().split('\n').length - 1
console.log(lines)
