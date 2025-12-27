const fs = require('fs');

//create a file -->
// fs.writeFileSync('one.pdf', 'this is dummy text')
// fs.writeFileSync('abc.js', 'let x = 10 \n let y = 5 \n console.log(x+y)')


// read a file or get a file -->

// let ans = fs.readFileSync('Notes.js','utf-8')
// console.log(ans)


// update a file  --> append method
// fs.appendFileSync('one.js', ' this is extra text')


// delete file -->
fs.unlinkSync('one.js')

