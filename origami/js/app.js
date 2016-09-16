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

	$(".menu .profile ul li").click(function(){
		alert($(this).stringify);
	});

});

try{
	var app = angular.module('contactForm', ['ngMessages']);
	app.controller('Main' , ['$scope', function($scope){
		
	}]);
}catch(err){
	console.log('There is no angular');
}