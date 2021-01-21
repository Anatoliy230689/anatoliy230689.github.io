$(document).ready(function () {
	$('.icon-menu').click(function (event) {
		$('.icon-menu, .menu__body').toggleClass('active');
	});
});


$(document).ready(function () {
	if ($('.slider__body').length > 0) {
		$('.slider__body').slick({
			dots: true,
			arrows: false,
			accessibility: false,
			slidesToShow: 1,
			autoplaySpeed: 3000,
			/*adaptiveHeight: true,*/
			nextArrow: '<button type="button" class"slick-next"></button>',
			prevtArrow: '<button type="button" class"slick-prev"></button>',
			responsive: [{
				breakpoint: 768,
				settings: {}
			}]
		});
	}
});


function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();