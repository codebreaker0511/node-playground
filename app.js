const {greet} = require('./utils/utils.js');

const {readJournal, writeJournal, appendJournal} = require('./utils/logger.js');

try {
  greet();
  const path = "./data/journal.txt";
  writeJournal('Hey!!!!!!!!!!!!', path)
  readJournal(path);
  appendJournal(path, "\nHow you are doing? ")
  readJournal(path)

} catch(error){ 

  console.log(`Error type: ${error.name}`)
  console.log(`Error message: ${error.message}`)
}
