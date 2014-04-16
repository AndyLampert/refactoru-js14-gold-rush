$(document).on('ready', function() {
    $('.topo').on('click', function() {
        var halfOfWidth = $('.marker').width() / 2;
        var halfOfHeight = $('.marker').height() / 2;
        $('.marker').css({
            "display": "block"
        }).offset({
            top: event.pageY - halfOfWidth,
            left: event.pageX - halfOfHeight
        });
        $(document).on('click', '.marker', function() {
            $(this).hide();
        })
    });
});