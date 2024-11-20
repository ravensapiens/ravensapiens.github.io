// variables:
var introAnimation = ["../007_3-min.gif"];

$(document).ready(function() {
	setIntroAnimation();
})

function setIntroAnimation() {
		$('#sapiens_bond').css("background-image", "url(" + introAnimation[0] + ")");
}