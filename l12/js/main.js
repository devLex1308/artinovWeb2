// $("body").load(function(){
// 	console.log("Завантажено контент");
// });
let body = null;
let maxWidt = 1368;

$(document).ready(function(){
	// console.log("Test");

	let m = $('.header__bottom .nav__item');

	m.click(function(e){
		//e.preventDefaul();

		// let html = $(this).html();
		// let w = $(this).width();
		// let h = $(this).height();
		// console.log("html = ", html);
		// $(this).html("").width(w).height(h);
		console.log("Перший обробник");
	});

	// let mValue = m.width(100);

	// $(".block").hide(5000).show(5000);

	//m.css({'background-color': 'red'});

	// console.log("mValue = ", mValue);

	// console.log(m);


	// let headerMeny = $(".header__bottom nav");

	// headerMeny.before("<p>Використання методу before</p>");
	// headerMeny.prepend('<a class="nav__item" href="#">Елемент додано на початку 1</a>');
	// headerMeny.append('<a class="nav__item" href="#">Елемент додано в кінці</a>');
	// headerMeny.after("<p>Використання методу after</p>");

	// console.log("headerMeny = ", headerMeny);


	// let img = $('img');
	// img.each(function(){
	// 	$(this).width();
	// 	console.log("w = " + $(this).width() + " h = " + $(this).height());
	// });
	// //console.log(img);

	// body = $('body');
	// bodyOpacity();

	// m.attr("href","www.i.ua");
	//attr()
	//preventDefaul
	//.animate()
	//.fadeIn()
	//.fadeOut()
	//.find()
	//.parent()
	//hover()
	//addClass
	//removeClass
	//.children()

	let test = $('#test');
	let parent = test.parent().parent().parent().parent().parent().parent();
	let children = test.parent().find('p').css("color",'red');
	
	//$('.instruction__item:nth-item(2)').css("color",'red');
	console.log(test);
	console.log(parent);
	console.log(children);

	// let m = $('.header__bottom .nav__item');

	m.click(function(e){
		//e.preventDefaul();
		//$(this).toggleClass("active");
		console.log("Другий обробник");
	});

	m.click(function(e){
		//e.preventDefaul();
		//$(this).toggleClass("active");
		console.log("Третій обробник");
	});

	m.hover(function(){

		$(this).css('font-size', 1.5 * parseInt($(this).css('font-size')));
	}, function(){
		$(this).css('font-size', '');
	});

	let img = $('.main-img img')
		.css({"opacity":1,'top':'0px','display':'block','position':'relative'})
		.animate({"opacity":0.5,'top':'100px'},5000,function(){
			console.log('First anim');
		})
		.animate({"opacity":1,'top':'-100px'},5000, function(){
			console.log('Second anim');
			$(this).attr('style','')
		});

});

function bodyOpacity(){
	// let curentWidth = $( window ).width();
	// let opacity = curentWidth / maxWidt;
	// //console.log("Змінюєм розміри вікна " + $( window ).width())
	// body.css("opacity",opacity);
}


$(window).resize(function(){
	bodyOpacity();
});
