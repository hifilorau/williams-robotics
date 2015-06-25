app.fadeIn = function () {
	
	$(".p-2").hide();
	$('.flash').hide();
	$('.flash-3').hide();
	$('.robot-fobot').hide();
	
	
	setTimeout(function() {
		  $('.flash-3').toggle('pulsate', {times: 50}, 500);
//			$('.p-1').toggle('pulsate', {times: 40}, 600);
	}, 5500);

		setTimeout(function() {
			$('.robot-fobot').effect('pulsate', {times: 5, mode: 'show'}, 400);
		},5200)
	
//  $( ".flash" ).toggle( "pulsate" );

	setTimeout(function() {
 $( ".p-1" ).toggle( "pulsate" );
//		$( ".p-1" ).toggle( "pulsate" );
		setTimeout(function(){
		  $('.flash-3').toggle('pulsate', {times: 25}, 500);
		}, 200);
		 setTimeout(function() {
				$('.flash-3').hide()
				$('.flash-2').hide()
				$('.flash').show();
				$(".p-1").hide();
			}, 400);	   
	}, 3000);	    

//	         $('.robot-fobot').css('opacity', 0);
		setTimeout(function() {
		
			setTimeout(function() {
				$( ".p-2" ).toggle( "pulsate", {times: 10}, 100);
		    $('.robot-fobot').hide();
			  $('.flash').hide();
				$('.flash-3').hide();
//		    $('.p-2').show();
				$('.p-1').hide();
			}, 1000);
		
		}, 5000 );
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