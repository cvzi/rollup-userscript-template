const fs = require('fs')

function changeName (fileName, name) {
  const data = JSON.parse(fs.readFileSync(fileName, 'utf8'))
  data.name = name
  fs.writeFileSync(fileName, JSON.stringify(data, null, 2))
}

process.argv.slice(3).forEach(fileName => changeName(fileName, process.argv[2]))
