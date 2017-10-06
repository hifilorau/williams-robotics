app.hamburger = function () {
	console.log('whatt');
    $( '.menu-btn' ).click(function(){
			  console.log("You have just encountered a bear. Would you like to stay and fight or run away?");
    	     $('.responsive-menu').toggleClass('expand');
					 $('.p-1').toggleClass('expand-2');
			     $('.p-2').toggleClass('expand-2');
						$('.hero-container').toggleClass('expand-3');
    	     });

};