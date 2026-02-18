const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);


  if (req.url === '/') {
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>coding</title></head>');
    res.write('<body><h1>enter detail:</h1>');
    res.write('<form action="/submit-detail" method="POST">');
    res.write('<input type="text" name="username" placeholder="enter name"><br>');
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" id="male" name="gender" value="male" />')
    res.write('<label for="female">female</label>')
    res.write('<input type="radio" id="female" name="gender" value="female" />')
    res.write('<br><input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } else if (req.url.toLowerCase() === "/submit-detail" &&
         req.method == "POST") {
          fs.writeFileSync('user.txt', 'Bedarshi');
          res.statusCode = 302;
          res.setHeader('Location', '/')
         }
         res.setHeader('Content-type', 'text/html');
         res.write('<html>');
         res.write('<head><title>coding</title></head>');
         res.write('<body><h1>bell icon</h1></body>');
         res.write('</html>');
         res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});