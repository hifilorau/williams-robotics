app.fadeIn = function () {
	

	$(".p-2").hide();
	$('.flash').hide();
	$('.flash-3').hide();
	$('.robot-fobot').hide();
//  $( ".flash" ).toggle( "pulsate" );

	setTimeout(function() {
 $( ".p-1" ).toggle( "pulsate" );
//		$( ".p-1" ).toggle( "pulsate" );
		setTimeout(function(){
		  $('.flash-3').toggle('pulsate');
		}, 200);
	 setTimeout(function() {
		  $('.flash-3').hide()
		  $('.flash-2').hide()
	    $('.flash').show();
	    $(".p-1").hide();
		   
		 setTimeout(function() {  
//		    $('.flash').fadeOut(5000);
//		    $('.p-2').fadeIn(5000);
			 	}, 2000);  
		 	}, 400);	
//      $(".p-1").hide();	    
	}, 5000);	    

		setTimeout(function() {
			$('.robot-fobot').toggle('pulsate');
		
			setTimeout(function() {
		  $('.robot-fobot').hide();
			 $('.flash').hide();
		    $('.p-2').show();
			}, 500);
		
		}, 8000 );
//	$(".p-1").hide();
	
 
	

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