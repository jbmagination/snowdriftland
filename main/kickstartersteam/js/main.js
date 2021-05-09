$(document).ready(function() {
	
	if ('ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0) {
					$('html').addClass('touchevents');
	}
	else {
		$('html').addClass('no-touchevents');
	}
	
	
	// CAROUSEL KICKSTARTER
	
	$('.carousel-kickstarter-img').slick({
		asNavFor: '.carousel-kickstarter-info',
		// infinite: false,
		autoplay: true,
		autoplaySpeed: 4000,
		centerPadding: '0',
		dots: false,
		arrows: true,
		speed: 700,
		cssEase: 'cubic-bezier(0, 0.85, 0.5, 1)',
		draggable: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				draggable: true,
				arrows: false
			  }
			}
		]
	});
	$('.carousel-kickstarter-info').slick({
		asNavFor: '.carousel-kickstarter-img',
		// infinite: false,
		autoplay: true,
		autoplaySpeed: 4000,
		centerPadding: '0',
		dots: false,
		arrows: false,
		speed: 700,
		cssEase: 'cubic-bezier(0, 0.85, 0.5, 1)',
		draggable: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnFocus: false,
		pauseOnHover: false,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				draggable: true
			  }
			}
		]
	});
	
	// CAROUSEL GAME
	
	$('.carousel-game-img').slick({
		asNavFor: '.carousel-game-headline, .carousel-game-info',
		infinite: false,
		centerPadding: '0',
		dots: true,
		speed: 700,
		cssEase: 'cubic-bezier(0, 0.85, 0.5, 1)',
		draggable: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				draggable: true,
				arrows: false
			  }
			}
		]
	});
	$('.carousel-game-headline').slick({
		asNavFor: '.carousel-game-img, .carousel-game-info',
		infinite: false,
		centerPadding: '0',
		dots: false,
		arrows: false,
		speed: 700,
		cssEase: 'cubic-bezier(0, 0.85, 0.5, 1)',
		draggable: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnFocus: false,
		pauseOnHover: false,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				draggable: true
			  }
			}
		]
	});
	$('.carousel-game-info').slick({
		asNavFor: '.carousel-game-img, .carousel-game-headline',
		infinite: false,
		centerPadding: '0',
		dots: false,
		arrows: false,
		speed: 700,
		cssEase: 'cubic-bezier(0, 0.85, 0.5, 1)',
		draggable: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				draggable: true
			  }
			}
		]
	});
	
	
});