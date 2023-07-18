const readline = require('readline')
const { generateMeta, generateImage } = require('./controllers/openaiController.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

//rl.question("YouTube Video Title: \n", (title) => generateMeta(title))
rl.question("Thumbnail description: \n", (desc) => generateImage(desc))