console.log("main.js");

let radius = 300;

let container = document.getElementById("targetjavascript");

let html = document.createElement("div");
html.style.width = radius;
html.style.height = radius;
html.style['background-color'] = 'green';


container.appendChild(html);

let circle = document.createElement("div");
circle.setAttribute('class','circle');

// html.appendChild(circle);

let acc = '';

let start = "<div class='circle'>";
let end = "</div>";

for (let i = 0; i < 5; i++){
	acc = start + acc + end;
}


html.appendChild(circle);

html.innerHTML = acc;