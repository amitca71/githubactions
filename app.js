const http = require('http');
const url = require('url');
const hostname = '0.0.0.0';
const port = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url,true).query;
  console.log("name" in queryObject);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  response='Hello ';
  if ("name" in queryObject){
      response=response.concat(queryObject.name);
  }else{
      response=response.concat('world');
  }

  res.end(response);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
