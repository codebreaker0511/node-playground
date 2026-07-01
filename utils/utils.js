const size = process.argv.length;
console.log('greet function loaded');
const greet = () =>{
  if(size < 3){
    throw new Error("Please Enter a valid name");
  }
  const name = process.argv[2];
  const now = new Date();
  console.log(`Hello! ${name}`);
  console.log('Welcome to the backend World');
  console.log(`Date: ${now.toLocaleDateString()}`);
  console.log(`Time: ${now.toLocaleTimeString()}`);
};

module.exports = {size, greet};
