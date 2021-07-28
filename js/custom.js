// Wrap every letter in a span
var textWrapper = document.querySelector('.text');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.text .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 3500,
    delay: (el, i) => 95*i
})
  
  
// Trigger CSS animations on scroll
jQuery(function($) {
	var doAnimations = function() {
		
		var offset = $(window).scrollTop() + $(window).height(),
		$animatables = $('.animatable');

		if ($animatables.length == 0) {
		  $(window).off('scroll', doAnimations);
		}

			$animatables.each(function(i) {
		   var $animatable = $(this);
				if (($animatable.offset().top + $animatable.height() - 20) < offset) {
			$animatable.removeClass('animatable').addClass('animated');
				}
		});

	};
	
	$(window).on('scroll', doAnimations);
	$(window).trigger('scroll');

});  
