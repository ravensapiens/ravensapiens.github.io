// variables: 
var pagetop = $("#page_top");
let index = 0;
let i = 0;
var aboutPic = ["images/about_crow.jpg", "images/about_crow2.jpg"];
var pcLight = ['../images/about_dark.png', '../images/about_light1.png','../images/about_dark.png', '../images/about_light2.png'];
const imgPic = document.querySelector(".about_photo");
const imgLight = document.querySelector(".about_photo img");

$(document).ready(function() {
		
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			pagetop.fadeIn();
		} 
		else {
			pagetop.fadeOut();
		}
	});
	
	$(function() {
	    $("img").on('contextmenu', function(e) {
	        return false;
	    });
	});    

	$(function() {
		$('a[href^="#"]').click(function() {
			var velocidad = 400;
			var href = $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top;
			$('body,html').animate({scrollTop:position}, velocidad, 'swing');
			/*if (href == "#about") {
				reset_about();
			}*/
			return false;
		});
	});
	setInterval(workingCrowLight, 2000);
})

function workingCrowLight() {
	if (index == 0) {
		$('.about_photo').css("background-image", "url(" + aboutPic[0] + ")");
	}
	if (index == 2) {
		$('.about_photo').css("background-image", "url(" + aboutPic[1] + ")");
	}
	imgLight.src = pcLight[index];
	
	(index == 3) ? index = 0 : index++;
}

/************* top navigation menu (mobile)  ***************/
$(function(){
	$(".nav").on( "click", function() {
		if(!$(".nav").hasClass('active')){
		  $(".nav_list").animate( { width: 'toggle' }, '200');
		  $(".nav").css("background-image","url('../images/menu_close.png')");
		  $(".nav").addClass('active')
	  	}else {
		  $(".nav_list").animate( { width: 'hide' }, '30');
		  $(".nav").css("background-image","url('../images/menu.png')");
		  $(".nav").removeClass('active')
		}
	});
});