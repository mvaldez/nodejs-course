const fs = require('fs')


const dataBuffer = fs.readFileSync('./1-json.json')
const user = JSON.parse(dataBuffer.toString())

user.name = 'Mark'
user.age = 47

fs.writeFileSync('1-json.json', JSON.stringify(user))
