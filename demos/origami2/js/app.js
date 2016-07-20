$(document).ready(function(){
	$('nav li a').click(function(e){
		e.preventDefault();
		$('section').css('top','200%');
		var target = this.hash;
  		var $target = $(target);
		$(target).css('top','0');
	});
	$('.logo_container svg').click(function(){
		$('section').css('top','200%');
	});
});