const http = require('http') // built in node module

const server = http.createServer((req, res) => {
  console.log("A request arrived");
  res.write("Hi!! I am Prashant");
  res.end();
})

server.listen(3000, () => {
  console.log('Server is listening');
})