// variables:
var loopAnimation = new Image();
loopAnimation.src = "../007.gif";

$(document).ready(function() {
	setLoopAnimation();
})

function setLoopAnimation() {
	$('#sapiens_bond').css("background-image", "url(" + loopAnimation.src + ")");
}