const http = require('http');

const html = `<html>
	<head>
		<meta charset="utf-8">
		<title>Заготовка</title>
		<link rel="stylesheet" href="style.css">
		<style>
			button{
				background: green;
				color: white;
			}
		</style>
	</head>
	<body>
		<header>
		</header>
		<div>
			<button onclick="alert('Hello')">Say Hello</button>
		</div>
		<footer>
		</footer>
	</body>
</html>`;





const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  
  const url = req.url

  if(url === '/'){
  	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end(html);
  }else{
  	res.statusCode = 404;
  	res.setHeader('Content-Type', 'text/plain');
  	res.end('Page not found');
  }
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});