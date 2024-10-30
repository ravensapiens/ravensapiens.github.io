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

$(document).scroll(function() {

	if ( $(document).scrollTop() >= 300 ) {
		$(".goTop").css("display", "block");
    } else {
		$(".goTop").css("display", "none");
	}
});

/************* top navigation menu (mobile)  ***************/
$(function(){
	$(".nav").on( "click", function() {
		if(!$(".nav").hasClass('active')){
		  $(".nav_list").animate( { width: 'toggle' }, '200');
		  $(".nav").css("background-image","url('../images/menu_close.png')");
		  $(".nav").addClass('active')
	  	}else {
		  $(".nav_list").animate( { width: 'hide' }, '50');
		  $(".nav").css("background-image","url('../images/menu.png')");
		  $(".nav").removeClass('active')
		}
	});
});
$(function () {
  $(window).scroll(function() {
  	showElementAnimation();
  });
});

function showElementAnimation() {
	var element = document.getElementsByClassName('scrollShow');
	if(!element) return;

	var showTiming = window.innerHeight > 300;
	var scrollY = window.pageYOffset;
	var windowH = window.innerHeight;

	for(var i=0;i<element.length;i++) { 
		var elemClientRect = element[i].getBoundingClientRect();
		var elemY = scrollY + elemClientRect.top;
		if(scrollY + windowH - showTiming > elemY) { 
			element[i].classList.add('is-show');
		} else if(scrollY + windowH < elemY) {
			element[i].classList.remove('is-show');
		}
	}
}
