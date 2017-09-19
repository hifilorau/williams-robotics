app.values = function() {
    $('.content-clicked').hide();

    $('.content-clickable').click(function(){
        $('.content-clicked').show();
    });

    $('.close').click(function(){
        $('.content-clicked').hide();
    });
}
