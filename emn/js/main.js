
/************* bxslider ***************/

$(function(){
	$('#slider1').bxSlider({
		auto:true,
		speed:5000,
		pause:5000
	});
});


/************* scroll ***************/

$(function(){
	$('a[href^=#]').click(function(){
		var speed = 400;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == ""? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
});

/************* rollover fabe ***************/

$(function(){
	$('a img').hover(function(){
		$(this).stop().fadeTo(200,0.6);
	},function(){
		$(this).stop().fadeTo(200,1.0);
	});
});


$(document).scroll(function() {

	if ( $(document).scrollTop() >= 463 ) {
		$(".sideNav_initial").css("display","none");
		$(".sideNav_sticky").css("display","block");
		$(".goTop").css("display","block");
    } else {
       	$(".sideNav_sticky").css("display","none");
		$(".sideNav_initial").css("display","block");
		$(".goTop").css("display","none");
	}
});

/************* top navigation menu  ***************/
$(function(){
	$(".nav").on( "click", function() {
		if(!$(".nav").hasClass('active')){
		  /*$(".nav_list").css("display","block");*/
		  $(".nav_list").slideToggle(200);
		  $(".nav").css("background-image","url('images/menu_close.png')");
		  $(".nav").addClass('active')
	  	}else {
		  /*$(".nav_list").css("display","none");*/
		  $(".nav_list").slideUp(200);
		  $(".nav").css("background-image","url('images/menu.png')");
		  $(".nav").removeClass('active')
		}
	});
});
