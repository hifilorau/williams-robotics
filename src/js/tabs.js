app.tabs = function() {
	var prodTab = $('.production-tab');
	var compTab = $('.components-tab');
	var multiTab = $('.multi-tab');
	var framerTab = $('.framer-tab');
	var prod = $('.production-builder');
	var comp = $('.components');
	var multi = $('.multi-family');
	var framer = $('.framer');
	var placeholder =$('.placeholder');
	
	
	
var hideAll = function () {	
	prod.hide();
	comp.hide();
	multi.hide();
	framer.hide();
	placeholder.hide();
};
	
var removeActive = function () {
	prodTab.removeClass('active-tab');
	compTab.removeClass('active-tab');
	multiTab.removeClass('active-tab');
	framerTab.removeClass('active-tab');

};

	hideAll();
	placeholder.show();
	
	
	prodTab.click(function() {
		removeActive();
		$(this).addClass('active-tab');
  	hideAll();
		prod.show();	
	});
	
	compTab.click(function() {
		removeActive();
		$(this).addClass('active-tab')
  	hideAll();
		comp.show();	
	});
	
	framerTab.click(function() {
		removeActive();
		$(this).addClass('active-tab')
  	hideAll();
		framer.show();	
	});
	
	multiTab.click(function() {
		removeActive();
		$(this).addClass('active-tab')
  	hideAll();
		multi.show();	
	});
	

 
	
	
	
};