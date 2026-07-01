const {greet} = require('./utils/utils.js');

const {readJournal, writeJournal} = require('./utils/logger.js');

try {
  greet();
  const path = "./data/journal.txt";
  writeJournal('Hey!!!!!!!!!!!!', path)
  readJournal(path);

} catch(error){ 

  console.log(`Error type: ${error.name}`)
  console.log(`Error message: ${error.message}`)
}
