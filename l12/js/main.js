// $("body").load(function(){
// 	console.log("Завантажено контент");
// });
let body = null;
let maxWidt = 1368;

$(document).ready(function(){
	console.log("Test");

	let m = $('.header__bottom .nav__item');

	m.click(function(){
		let html = $(this).html();
		let w = $(this).width();
		let h = $(this).height();
		console.log("html = ", html);
		$(this).html("").width(w).height(h);
	});

	let mValue = m.width(100);

	$(".block").hide(5000).show(5000);

	//m.css({'background-color': 'red'});

	console.log("mValue = ", mValue);

	console.log(m);


	let headerMeny = $(".header__bottom nav");

	// headerMeny.before("<p>Використання методу before</p>");
	// headerMeny.prepend('<a class="nav__item" href="#">Елемент додано на початку 1</a>');
	// headerMeny.append('<a class="nav__item" href="#">Елемент додано в кінці</a>');
	// headerMeny.after("<p>Використання методу after</p>");

	console.log("headerMeny = ", headerMeny);


	let img = $('img');
	img.each(function(){
		$(this).width();
		console.log("w = " + $(this).width() + " h = " + $(this).height());
	});
	//console.log(img);

	body = $('body');
	bodyOpacity();
});

function bodyOpacity(){
	let curentWidth = $( window ).width();
	let opacity = curentWidth / maxWidt;
	//console.log("Змінюєм розміри вікна " + $( window ).width())
	body.css("opacity",opacity);
}


$(window).resize(function(){
	bodyOpacity();
});
