const path = require('path')

//Path Seperator
console.log(path.sep)

//Spaja zadate putanje tako da se formira apsolutna putanja
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

//Vraća posljednji dio putanje, tj. ime datoteke
const base = path.basename(filePath)
console.log(base)

//Pravi apsolute pathname kroz citav pc dokle zelimo
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)