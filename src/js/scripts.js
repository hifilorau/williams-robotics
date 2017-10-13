app.fadeIn = function () {

	var heroTextShow = function() {
	  var elements = $('.hero-item'),
	      total    = elements.length,
	      index    = 0;
	      time = 5000;

	  (function next() {
	    elements.eq(index)
	            .fadeIn(500)
	            .delay(time)
	            .fadeOut(500, function() {
	                index++;
	                time = 3000;
	                if (index >= total) { index = 0; time=3000; }
	                next();
	            });
	  })();
	};

	heroTextShow();


};
