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
	                time = 2000;
	                if (index >= total) { index = 0; time=5000; }
	                next();
	            });
	  })();
	};

	heroTextShow();
//	$(".p-1").hide();


//	setTimeout(function() {
//		$( ".p-2" ).toggle( "pulsate", {times: 25}, 500);
//	},5000);
//setTimeout(function() {
//      $(".p-1").fadeIn(4000);
//}, 2000);


//	    $('.flash').show();



//setTimeout(function() {
//	   $('.p-2').fadeIn(9000);
//	   $('.flash').hide();
//////       $('.p-2').burn({
////  k: 10,
////  w: 10
////});
//}, 6000);

//	  var i = 0;
//  function pulsate() {
//    $(".p-1").
//      animate({opacity: 0.2}, 100, 'linear').
//      animate({opacity: .8}, 100, 'linear', pulsate);
//
//  }


};
