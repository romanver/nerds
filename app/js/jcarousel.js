
$(function() {
	$('.jcarousel').jcarousel({
		wrap: 'circular',
		animation: 'slow'
	});

	// pagination

	$('.jcarousel-pagination')

	// триггер класса active

	.on('jcarouselpagination:active', '.jcarousel-pagination-link', function(){
		$(this).addClass('active');
	})
	.on('jcarouselpagination:inactive', '.jcarousel-pagination-link', function(){
		$(this).removeClass('active');
	})

	// pagination инициализация

	.jcarouselPagination({
		item: function(page) {
			return '<a class="jcarousel-pagination-link" href="#' + page +'"></a>';
		}
	});
	
	// autoscroll
	$('.jcarousel').jcarouselAutoscroll({
		interval: 5000,
		target: '+=1',
		autostart: true
	});
});