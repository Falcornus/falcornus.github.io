$(document).ready(function() {
	//LOADER
	$(window).load(function(){
		$(".loader_inner").fadeOut();
		$(".loader").delay(400).fadeOut("slow");

		$(".top_wrapper").animated("zoomIn","zoomOut");
	});
	ANIMATE.CSS
	$(".section_header, .galaxy_wrapper img, .odometer, .solar_system").animated("zoomIn", "zoomOut");
	$(".our_planet").animated("flipInY", "flipOutY");
	$(".text_about_galaxy li, .text_about_galaxy h3").animated("fadeInRight","fadeOutRight");
	$(".text_about_system li, .text_about_system h3").animated("fadeInLeft","fadeOutLeft");
	$(".s_property .row .col-sm-6").animated("bounceIn","bounceOut");
	//HOVER ON PLANET IN SYSTEM
	$(".solar_system div").hover(function(){
		$(".solar_system h1").text($("div", this).attr("class"));
	}, function(){
		$(".solar_system h1").text("");
	})
	//SLIDER SETTINGS 
	$("#image-gallery").lightSlider({
		gallery:true,
        item:1,
        thumbItem:9,
        slideMargin: 0,
        speed:700,
        auto:true,
        loop:true,
        onSliderLoad: function() {
            $('#image-gallery').removeClass('cS-hidden');
        },
		responsive: [
			{
				breakpoint:800,
				settings: {
					thumbItem: 6
				}
			},
			{
				breakpoint: 480,
				settings: {
					thumbItem: 3
				}
			}
		]  
	});

	//JBOOTSTRAPVALIDATION
	$("input, select, textarea").jqBootstrapValidation();

	//PHONE MASK
	$("#phone").mask("+999 (99) 99-99-999");

	

});
