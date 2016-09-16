var main = function() {
  /*Виїзжающе меню, при розширені для телефонів та планшетів */
  var now = new Date().toLocaleString();
  //dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");

  $('#header .datetime').text(now);

  $('.open-button').click(function() {
    $('#leftBar').animate({
      left: "-3px"
    }, 200);
    if($(window).width()>=480){
    	$('.leftBarButtons').animate({
	    	left:"150px"
	    },200);
    }else{
	    $('.leftBarButtons').animate({
	    	left:"190px"
	    },200);
    }
    $('.leftBarButtons .open-button').animate({  borderSpacing: -90 }, {
	    step: function() {
	      $(this).css('-webkit-transform','rotateY(-180deg)'); 
	      $(this).css('-moz-transform','rotateY(-180deg)');
	      $(this).css('-o-transform','rotateY(-180deg)');
	      $(this).css('transform','rotateY(-180deg)');
	    },
	    duration:'slow'
	},'linear');
	$('.leftBarButtons .close-button').animate({  borderSpacing: -90 }, {
	    step: function() {
	      $(this).css('-webkit-transform','rotateY(0deg)'); 
	      $(this).css('-moz-transform','rotateY(0deg)');
	      $(this).css('-o-transform','rotateY(0deg)');
	      $(this).css('transform','rotateY(0deg)');
	    },
	    duration:'slow'
	},'linear');
  });
  $('.close-button').click(function(){
  	$('#leftBar').animate({
  		left:"-500px"
  	},200);
  	$('.leftBarButtons').animate({
    	left:"0"
    },200);
    $('.leftBarButtons .open-button').animate({  borderSpacing: -90 }, {
	    step: function() {
	      $(this).css('-webkit-transform','rotateY(0deg)'); 
	      $(this).css('-moz-transform','rotateY(0deg)');
	      $(this).css('-o-transform','rotateY(0deg)');
	      $(this).css('transform','rotateY(0deg)');
	    },
	    duration:'slow'
	},'linear');
	$('.leftBarButtons .close-button').animate({  borderSpacing: -90 }, {
	    step: function() {
	      $(this).css('-webkit-transform','rotateY(-180deg)'); 
	      $(this).css('-moz-transform','rotateY(-180deg)');
	      $(this).css('-o-transform','rotateY(-180deg)');
	      $(this).css('transform','rotateY(-180deg)');
	    },
	    duration:'slow'
	},'linear');
  });
  /*Виїзжающі пункти в меню*/
  $('.dropdown').click(function(){
  	//Если поле парментр transform равняется 90deg(Пришлось добыть это значение через алерт =)) 
  	if($(this).css('transform')!='matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)'){
  		$(this).css('transform','rotate(90deg)');
  		$('.dropdownlist').css('display','block');
  	}else{
  		$(this).css('transform','rotate(0deg)');
  		$('.dropdownlist').css('display','none');
  	}
  }); 

  
  //Слайдер
  var sliderspeed = 500; //Скорость перемотки слайдера в милисекундах
  var widthOfSlide=$('.active-slide').width(),
  	index = 0,
  	nextPosition = 0;
  $('.right-arrow').click(function(){
  	var currentSlide = $('.active-slide');
	var nextSlide = currentSlide.next();
  	nextPosition += widthOfSlide;
  	if(nextSlide.length===0){
  		nextPosition = 0 ;
  		nextSlide = $('.slider li').first();
  	}
  	$('.slider ul').animate({
  		marginLeft: "-" +nextPosition+"px"
  	},sliderspeed);
  	currentSlide.removeClass('active-slide');
  	nextSlide.addClass('active-slide');
  });
  $('.left-arrow').click(function(){
  	var currentSlide = $('.active-slide');
  	var prevSlide = currentSlide.prev();
  	nextPosition -= widthOfSlide;
  	if(prevSlide.length===0){
  		nextPosition = widthOfSlide*($('.slider li').length-1);
  		prevSlide = $('.slider li').last();
  	}
  	$('.slider ul').animate({
  		marginLeft: "-" +nextPosition+"px"
  	},sliderspeed);
  	currentSlide.removeClass('active-slide');
  	prevSlide.addClass('active-slide');
  });
};


$(document).ready(main);