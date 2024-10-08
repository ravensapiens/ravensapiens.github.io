// variables: 
var pagetop = $("#page_top");
let index = 0;
let i = 0;
var aboutPic = ["images/about_crow.jpg", "images/about_crow2.jpg"];
var pcLight = ['images/about_dark.png', 'images/about_light1.png','images/about_dark.png', 'images/about_light2.png'];
const imgPic = document.querySelector(".about_photo");
const imgLight = document.querySelector(".about_photo img");
const imgSweat = document.querySelector(".working_crow img");
var sweatyCrow = ["images/workingcrowsweat1.png", "images/workingcrowsweat2.png", "images/workingcrowsweat3.png", "images/workingcrowsweat4.png","images/workingcrowsweat.png"];

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
	setInterval(workingCrowSweat, 50);
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
function workingCrowSweat() {
	if (i == 0) {
		$(".working_crow img").fadeIn(400).delay(800);
	}
	else if (i == 4) {
		$(".working_crow img").fadeOut(400).delay(2000);
	}
	else {
		imgSweat.src = sweatyCrow[i];
	}
	(i == 4) ? i = 0 : i++;
}
/* Go to top of the page */
$(document).scroll(function() {
	if ( $(document).scrollTop() >= 300 ) {
		$(".goTop").css("display", "block");
    } else {
		$(".goTop").css("display", "none");
	}
	
});
