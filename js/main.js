// variables:
var introAnimation = new Image();
var loopAnimation = new Image();
introAnimation.src = "007-min.gif";
loopAnimation.src = "007-loop-min.gif";

$(document).ready(function() {
	setIntroAnimation();
	setTimeout(setLoopAnimation, 6800);
})

function setIntroAnimation() {
	$('#sapiens_bond').css("background-image", "url(" + introAnimation.src + ")");

}
function setLoopAnimation() {
	$('#sapiens_bond').css("background-image", "url(" + loopAnimation.src + ")");
}
