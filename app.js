const {size, greet} = require('./utils/utils.js');

if(size > 3){
  console.log("Enter valid argument");
  process.exit(1);
}

try {
  greet();
} catch(error){ 

  console.log(`Error type: ${error.name}`)
  console.log(`Error message: ${error.message}`)
}
