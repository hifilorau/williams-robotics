app.productOverlay = function () {


$( '.landing-products-list li' ).hover(
  function() {
    console.log('yo');
    $(this).find('.product-overlay').show();
  }, function() {
    $(this).find('.product-overlay').hide();
  }
);

};
