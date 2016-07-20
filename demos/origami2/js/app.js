$(document).ready(function(){
	$('nav li a').click(function(e){
		e.preventDefault();
		$('#about').css('top','0');
		$('header .row').css('background','#fff');
	});
});