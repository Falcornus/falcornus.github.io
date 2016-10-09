$(document).ready(function(){

	$(".nav-bar").click(function(){
		$(".menu").animate({
			left: 0
		}, 200, "linear");
		$(".nav-over").addClass('nav-over-active');
		$('html,body').css('overflow-y', 'hidden');
	});
	$('.nav-over').click(function(){
		$(".menu").animate({
			left: "-250px"
		}, 200, "linear");
		$(".nav-over").removeClass('nav-over-active');
		$('html,body').css('overflow-y', 'visible');
	});

	var projectWidth = $(".project").width() - 80;
	$(".project").css({'height': projectWidth+'px'});
	$(window).resize(function(event) {
		var projectWidth = $(".project").width() - 80;
		$(".project").css({'height': projectWidth+'px'});
	});

	try{
		$("#quoteSlider").lightSlider({
			item: 1,
			loop: true,
			controls: false,
			onSliderLoad: function() {
	            $('#quoteSlider').removeClass('cS-hidden');
	        }
		});
	}catch(err){
		console.log('There is no lightSlider');
	};
	try{
		$("#phone").mask("+999 (99) 99-99-999");
	}catch(err){
		console.log('There is no mask');	
	};

	$(".to-top").click(function(){
		$('html,body').animate({scrollTop:0}, 500);
	});

	function scrolling(){

		// Hide Header on on scroll down
		var didScroll;
		var lastScrollTop = 0;
		var delta = 5;
		var navbarHeight = $('.header').outerHeight();

		$(window).scroll(function(event){
		    didScroll = true;
		});

		setInterval(function() {
		    if (didScroll) {
		        hasScrolled();
		        didScroll = false;
		    }
		}, 250);

		function hasScrolled() {
		    var st = $(this).scrollTop();
		    // Make sure they scroll more than delta
		    if(Math.abs(lastScrollTop - st) <= delta)
		        return;
		    console.log(st);
		    // If they scrolled down and are past the navbar, add class .nav-up.
		    // This is necessary so you never see what is "behind" the navbar.
		    if (st > lastScrollTop && st > navbarHeight){
		        // Scroll Down
		        // $('.header').addClass('nav-up');
		        $('.header').addClass('header_scrolled');
		        $('.header').addClass('header_hidden');
		    } else {
		        // Scroll Up
		        if(st + $(window).height() < $(document).height()) {
		            // $('.header').removeClass('nav-up');
		            $('.header').removeClass('header_hidden');
		        }
		        if(st < 10){
		        	$('.header').removeClass('header_scrolled');
		        }
		    }
		    
		    lastScrollTop = st;
		}
	};
	scrolling();
});

try{
	var app = angular.module('contactForm', ['ngMessages']);
	app.controller('Main' , ['$scope', function($scope){
		
	}]);
}catch(err){
	console.log('There is no angular');
}