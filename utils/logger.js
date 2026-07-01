const fs = require('fs');

function writeJournal(entry, path){
  fs.writeFileSync(path, entry);
}

function readJournal(fileName){
  console.log(fs.readFileSync(fileName,'utf-8'));
}

module.exports = {writeJournal, readJournal};