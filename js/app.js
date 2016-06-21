$(document).ready(function() {
	$(window).load(function(){
		$(".loader_inner").fadeOut();
		$(".loader").delay(400).fadeOut("slow");

		$(".top_wrapper").animated("zoomIn","zoomOut");
	});

	$(".section_header, .galaxy_wrapper img, .odometer").animated("zoomIn", "zoomOut");
	$(".our_planet").animated("flipInY", "flipOutY");
	$(".about_galaxy li, .about_galaxy h3").animated("fadeInRight","fadeOutRight");

	$(window).odometerOptions = {
		format: '( ddd),dd'
	}
	$(window).scroll(function() {
		setTimeout(function(){
    		$(".odometer").html(11061995);
		}, 300);
	});
	
});