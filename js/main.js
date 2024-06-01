/* price wrapper slider */
$(document).ready(function () {
	$('.price-carousel').owlCarousel({
		loop: true,
		margin: 10,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			600: {
				items: 3,
				nav: false
			},
			1000: {
				items: 2,
				nav: true,
				loop: true,
				margin: 20
			}
		}
	})


	$(".price-carousel  .owl-prev").empty();
	$(".price-carousel  .owl-prev").html('<i class="fa-solid fa-arrow-left-long"></i>');
	$(".price-carousel  .owl-prev").css("color", "white");

	$(".price-carousel  .owl-next").empty();
	$(".price-carousel  .owl-next").html('<i class="fa-solid fa-arrow-right-long"></i>');
	$(".price-carousel  .owl-next").css("color", "white");

	/* client wrapper slider */

	$('.testimonial-carousel').owlCarousel({
		loop: true,
		margin: 10,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			600: {
				items: 1,
				nav: false
			},
			1000: {
				items: 1,
				nav: true,
				loop: true,
				margin: 20
			}
		}
	})

	$(".testimonial-carousel  .owl-prev").empty();
	$(".testimonial-carousel  .owl-prev").html('<i class="fa-solid fa-arrow-left-long"></i>');
	$(".testimonial-carousel  .owl-prev").css("color", "white");

	$(".testimonial-carousel  .owl-next").empty();
	$(".testimonial-carousel  .owl-next").html('<i class="fa-solid fa-arrow-right-long"></i>');
	$(".testimonial-carousel  .owl-next").css("color", "white");


});
/* twentytwenty effect in service wrapper */
$(function () {
	$(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({ default_offset_pct: 0.5 });

});

// for header wrapper
$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll <= 100) {
		$(".header-wrapper").removeClass("fixedtop");
	} else {
		$(".header-wrapper").addClass("fixedtop");

	}


	// for back to top button
	if (scroll <= 100) {
		$(".back-to-top").hide();
	} else {
		$(".back-to-top").show();
	}
});


$(document).ready(function () {
	$(".back-to-top").hide();
	$(".back-to-top").click(function () {
		$('html, body').animate({ scrollTop: 0 }, 'slow');
		return false;
	});

});