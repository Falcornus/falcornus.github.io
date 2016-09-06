$(document).ready(function(){

	var menuheight = $(document).height() - 60
	$(".menu").height(menuheight);

	$(".nav-bar").click(function(){
		$(".menu").animate({
			left: 0
		}, 200, "linear");
		$(".nav-over").addClass('nav-over-active');
	});
	$('.nav-over').click(function(){
		$(".menu").animate({
			left: "-250px"
		}, 200, "linear");
		$(".nav-over").removeClass('nav-over-active');
	});

	var projectWidth = $(".project").width() - 80;
	$(".project").css({'height': projectWidth+'px'});
	$(window).resize(function(event) {
		var projectWidth = $(".project").width() - 80;
		$(".project").css({'height': projectWidth+'px'});
	});

	$("#quoteSlider").lightSlider({
		item: 1,
		loop: true,
		controls: false,
		onSliderLoad: function() {
            $('#quoteSlider').removeClass('cS-hidden');
        }
	});
});