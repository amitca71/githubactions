const http = require('http');
const url = require('url');
const hostname = '0.0.0.0';
const port = 3001;

const server = http.createServer((req, res) => {
  const name = url.parse(req.url,true).pathname ;
  console.log(name);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  response='Hello ';
  if (name == '/'){
      response=response.concat('world');
  }else{
      response=response.concat(name.substring(1));
  }

  res.end(response);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
