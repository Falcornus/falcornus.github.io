var canvas = document.getElementById('curvedline');
var context = canvas.getContext('2d');

context.beginPath();
context.moveTo(0,2);
context.setLineDash([14]);
context.lineTo(10,2);
context.quadraticCurveTo(44, 18, 88, 2);
context.lineTo(92,2);
context.quadraticCurveTo(138,18, 180,2);
context.lineTo(190,2);

context.lineWidth = 1;

context.strokeStyle = 'white';
context.stroke();


$(document).ready(function(){


	$(window).load(function(){
		$(".loader .loader-ring-light").animate({
			boxShadow: "0 0 0 4px lighten(#0087bf, 10%) inset"
		}, 400);

		// $(".loader").delay(400).fadeOut("slow");
	});
	

	var burger = $("nav input");
	burger.click(function(){
		if(burger.prop('checked')){
			$('body').animate({
				right: "200px"
			},200);
			$('.menu').animate({
				right: "0"
			},200);
			$('html,body').css('overflow-y', 'hidden');
		}else{
			$('body').animate({
				right: "0"
			},200);
			$('.menu').animate({
				right: "-200px"
			},200);
			$('html,body').css('overflow-y', 'visible');
			$("nav input").prop("checked", false);
		}
	}).prop("checked", false);

	$("#image-gallery").lightSlider({
		item: 3,
		onSliderLoad: function() {
            $('#image-gallery').removeClass('cS-hidden');
        },
        slideMargin: 0
	});




});