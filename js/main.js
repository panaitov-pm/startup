;(function($){

	$(function(){
		var slider = $('.slider');
		slider.slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 3,
			speed: 1200,
			autoplay: true,
			autoplaySpeed: 2500,

			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 2,
						arrows: false,
					}
				},
			]
		});

		$('.clients-slider').slick({
			arrows: false,
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 1200,
			slide: '.clients-slide'
			//autoplay: true,
			//autoplaySpeed: 2500,
		});

	});



	$(window).load(function() {

		//--Work Isotop
		var $grid = $('.work-filter').isotope({
		    itemSelector: '.work-filter__item',
		    stagger: 30, // staggers after one another 
		    percentPosition: true,
		    layoutMode: 'masonry',
		    masonry: {
		    	columnWidth: '.work-filter__item',
		    }
		   
		});

		// filter items on link click
		
		$('.work__menu').on('click', '.menu__link', function(event) {
			event.preventDefault();
			var $this = $(this);
		    var filterValue = $this.attr('data-work-filter');
		    $grid.isotope({ filter: filterValue });
			
			// don't proceed if already selected
	        if ( !$this.hasClass('menu__link--active') ) {
            	$this.closest('.work__menu')
	          	 		.find('.menu__link--active')
	          			.removeClass('menu__link--active');

	            $this.addClass('menu__link--active');
	        }
	        
		});

		

	});

})(jQuery);
