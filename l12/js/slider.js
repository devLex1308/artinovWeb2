function Slider(){
	let currentImages;
	let countSlides;
	let slides;

	this.init = function(){

		slides = $('.gallery li');
		countSlides = slides.length;
		console.log(countSlides);
		currentImages = 0;
		let i = 0;
		slides.each(function(){
			$(this).attr('id','slider_'+i);
			i++;
		});
		let img = $('#slider_0').addClass('active');
		// let h = img.height();
		// let w = img.width();
		// let windowWidth = $(window).width();
		// let t = $('.gallery li img').css({'width':windowWidth, 'height': h * windowWidth / w});
		// console.log(t);
		// $('.gallery li').css({'position':'absolute'});
		// alert();
	}

	this.update = function(){
		 $('#slider_'+ currentImages).removeClass('active');
		 currentImages++;
		 if(currentImages>=countSlides){
		 	currentImages = 0;
		 }
		 $('#slider_'+ currentImages).addClass('active');
	}

	this.init();
}

$(document).ready(function(){
	let slider = new Slider();
	

	setInterval(function(){
		slider.update();
	}, 1000);
});

