const readline = require('readline')
const { generateMeta } = require('./controllers/openaiController.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('test')
rl.question("YouTube Video Title: \n", (title) => generateMeta(title))