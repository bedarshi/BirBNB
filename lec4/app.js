// simple NodeJS server
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<heade><title>coding</title></head>');
  res.write('<body><h1>welcome to home</h1></body>');
  res.write('<html>');
  return res.end();
  } else if (req.url === '/products') {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>coding</title></head>');
  res.write('<body><h1>checkout our product</h1></body>');
  res.write('<html>');
  return res.end();
  } 
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<heade><title>coding</title></head>');
  res.write('<body><h1>like/bell icon</h1></body>');
  res.write('<html>');
  res.end();
  

});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});