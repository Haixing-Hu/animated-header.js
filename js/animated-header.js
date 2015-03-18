/**
 * animated-header.js v1.0.0
 * https://github.com/Haixing-Hu/animated-header.js
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops, http://www.codrops.com
 * Copyright 2015, Haixing Hu, https://github.com/Haixing-Hu/
 */
(function($) {

	var docElem = document.documentElement,
		header = $('.animated-header'),
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		window.addEventListener('scroll', function(event) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if (sy >= changeHeaderOn) {
			header.addClass('animated-header-scroll');
		} else {
			header.removeClass('animated-header-scroll');
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();
})(jQuery);