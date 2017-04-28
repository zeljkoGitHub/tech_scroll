"use strict"; 

//test
var addition = 1 + 1;
console.log(addition);

//Easy scroll animations for web and mobile browsers - https://github.com/jlmakes/scrollreveal
//Navbar animation
window.sr=ScrollReveal();
sr.reveal('.navbar', {
	duration: 2000,
	origin: 'bootom'
});

//Section showcase animation
sr.reveal('.showcase-left', {
	duration: 2000,
	origin: 'top',
	distance: '300px'
});
sr.reveal('.showcase-right', {
	duration: 2000,
	origin: 'right',
	/*If distance is set to more then 50px, it creates on page load an empty horizontal scroll bar to the right side. Witch disappears after the 'distance' animation is executed.*/
	// distance: '300px'
});

//Section showcase button animation
sr.reveal('.showcase-btn', {
	duration: 2000,
	delay: 2000,
	origin: 'bootom'
});
//Testimonial div animation
sr.reveal('#testimonial div', {
	duration: 2000,
	origin: 'bootom'
});
//Section info animation
sr.reveal('.info-left', {
	duration: 2000,
	origin: 'left',
	// distance: '300px',
	viewFactor: 0.2
});
sr.reveal('.info-right', {
	duration: 2000,
	origin: 'right',
	// distance: '300px',
	viewFactor: 0.2
});

// jQuery
$(function() {
	// Page Smooth Scrolling 
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'')== this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

