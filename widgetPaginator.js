
(function( $ ){
  $.fn.widgetPaginator = function(options) {
	var container = this;
	
	var widget_settings = $.extend( {
		'controlsContainer' : 'a',
		'start' : 0
    }, options);
	
	var n = $(this).find('ul').size();
	if(n > 1) {
		$(this).find('ul').eq(0).addClass('first');
		$(this).find('ul').eq(0).addClass('here');
		$(this).find('ul').eq(n - 1).addClass('last');
		$(this).find('ul').not(':first-child').hide();
		$(''+widget_settings.controlsContainer+'').show();
	}
	var h = $(this).find('ul.here').index();
	$(''+widget_settings.controlsContainer+'').find('li #prev').addClass('not-prev');
	$(''+widget_settings.controlsContainer+'').find('li a').live('click', function(a){
		//console.log(container);
		//console.log(widget_settings.controlsContainer);
		a.preventDefault();
		
		var where = $(this).attr('id');
		if(where == 'next' && ((h+1) < n)) {
			$(''+widget_settings.controlsContainer+'').find('li #prev').removeClass('not-prev');
			$(container).find('ul').hide();
			$(container).find('ul').removeClass('here');
			$(container).find('ul').eq(h+1).addClass('here').show();
			h = h + 1;
			//console.log(h);
			//console.log(n);
			if((h+1) >= n) {
				$(''+widget_settings.controlsContainer+'').find('li #next').addClass('not-next');
			}
		} else if(where == 'prev' && h > 0){
			$(''+widget_settings.controlsContainer+'').find('li #next').removeClass('not-next');
			$(container).find('ul').hide();
			$(container).find('ul').removeClass('here');
			$(container).find('ul').eq(h-1).addClass('here').show();
			h = h - 1 ;
			if(h <= 0) {
				$(''+widget_settings.controlsContainer+'').find('li #prev').addClass('not-prev');
			}
		}
	})
	
  };
})( jQuery );