$(document).on('ready', function() {
    $('.topo').on('click', function(){
        $('.marker')
            .css("display", "block")
            .offset({
                top: event.pageY,
                left: event.pageX
            });
    });
});

// use the .css to position the marker div
// make sure we're not applying the .offset to every .marker
// but instead just on the one we create when we click

// Goal 1 
// when click, add a .marker div somewhere (just have it show up)
// how to test selectors to make sure they aren't wrong / work as intended
// sometimes elements just might not be there yet 
// if the element isn't there yet, jquery won't report an error
// console log the $('selector').length
// 