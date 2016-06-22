$(document).ready(function() {
	$(window).load(function(){
		$(".loader_inner").fadeOut();
		$(".loader").delay(400).fadeOut("slow");

		$(".top_wrapper").animated("zoomIn","zoomOut");
	});

	$(".section_header, .galaxy_wrapper img, .odometer, .solar_system").animated("zoomIn", "zoomOut");
	$(".our_planet").animated("flipInY", "flipOutY");
	$(".text_about_galaxy li, .text_about_galaxy h3").animated("fadeInRight","fadeOutRight");
	$(".text_about_system li, .text_about_system h3").animated("fadeInLeft","fadeOutLeft");

	$(window).scroll(function() {
		setTimeout(function(){
    		$(".odometer").html(5350);
		}, 300);
	});
	$(".solar_system div").hover(function(){
		$(".solar_system h1").text($("div", this).attr("class"));
	}, function(){
		$(".solar_system h1").text("");
	})
	
});