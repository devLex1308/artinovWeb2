const http = require('http');
const path = require('path');
const fs = require('fs');

const html = `<html>
	<head>
		<meta charset="utf-8">
		<title>Заготовка</title>
		<link rel="stylesheet" href="style.css">
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
	<script src="main.js"></script>
</html>`;

const css = `button{
				background: green;
				color: white;
			}`;

const javascript = `
	console.log("File main.js");
`;



const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  
  const url = req.url
  console.log(url);

  if(url === '/'){

	fs.readFile(path.join('template', 'index.html'), 'utf-8', (error, data) => {
		if(error){
			console.log('Неможливо прочитати файл');
		}

		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');	
		res.end(data);
	});
  }else if (url.match(/.css$/)){ 
    	res.statusCode = 200;
  		fs.readFile(path.join('template', url), 'utf-8', (error, data) => {
		if(error){
			console.log('Неможливо прочитати файл');
			res.statusCode = 500;
			res.end('Server not work');
		}

		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/css');
		res.end(data);
	});
  } else if (url.match(/.png$/) || url.match(/.jpg$/)){ 
  	fs.readFile(path.join('template', url), 'utf-8', (error, data) => {
		if(error){
			console.log('Неможливо прочитати файл');
		}

		// console.log(url);
		// console.log(data.length);

		res.statusCode = 200;
		if (url.match(/.png$/)) {
			res.setHeader('Content-Type', 'image/png');
		}else{
			res.setHeader('Content-Type', 'image/jpeg');
			res.end(data);
		}
		
		res.end(data);
	});
  } else if (url.match(/.js$/)){ 

	fs.readFile(path.join('template', url), 'utf-8', (error, data) => {
		if(error){
			console.log('Неможливо прочитати файл');
		}

		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/javascript');
		res.end(data);
	});

	} else {
  	res.statusCode = 404;
  	res.setHeader('Content-Type', 'text/plain');
  	res.end('Page not found');
  }
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});