(function($) {
	$(function() {
		var jcarousel = $('.jcarousel');

		jcarousel
		.on('jcarousel:reload jcarousel:create', function () {
			var carousel = $(this),
			width = carousel.innerWidth();

			if (width >= 600) {
				width = width / 6;
			} else if (width >= 350) {
				width = width / 2;
			}

			carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
		})
		.jcarousel({
			wrap: 'circular'
		});

		jcarousel.jcarouselAutoscroll({
			interval: 3000,
			target: '+=1',
			autostart: true
		});

		$('.jcarousel-control-prev')
		.jcarouselControl({
			target: '-=6'
		});

		$('.jcarousel-control-next')
		.jcarouselControl({
			target: '+=6'
		});

		$('.jcarousel-pagination')
		.on('jcarouselpagination:active', 'a', function() {
			$(this).addClass('active');
		})
		.on('jcarouselpagination:inactive', 'a', function() {
			$(this).removeClass('active');
		})
		.on('click', function(e) {
			e.preventDefault();
		})
		.jcarouselPagination({
			perPage: 6,
			item: function(page) {
				return '<a href="#' + page + '">' + page + '</a>';
			}
		});
	});
})(jQuery);