$(window).scroll(function()
{
    if ($(window).scrollTop() > 0) 
    {
        $('.heading').addClass('scroll');
    }
    else 
    {
        $('.heading').removeClass('scroll');
    }
});

$(document).ready(function()
{
    $('.go_to').click(function()
    {
        var scroll_el = $(this).attr('href');
        if(scroll_el.length != 0)
        {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top - 145}, 1000);
        }
        return false;
    });
});

// var anchors = [];
// var currentAnchor = -1;
// var isAnimating  = false;

// $(function(){
    
//     function updateAnchors() {
//         anchors = [];
//         $('.anchor').each(function(i, element){
//             anchors.push( $(element).offset().top - 75);
//         });
//     }
    
//     $('body').on('mousewheel', function(e){
//         e.preventDefault();
//         e.stopPropagation();
//         if( isAnimating ) {
//             return false;
//         }
//         isAnimating  = true;
//         // Increase or reset current anchor
//         if( e.originalEvent.wheelDelta >= 0 ) {
//             currentAnchor--;
//         }else{
//             currentAnchor++;
//         }
//         if( currentAnchor > (anchors.length - 1) 
//            || currentAnchor < 0 ) {
//             currentAnchor = 0;
//         }
//         isAnimating  = true;
//         $('html, body').animate({
//             scrollTop: parseInt( anchors[currentAnchor] )
//         }, 500, 'swing', function(){
//             isAnimating  = false;
//         });
//     });

//     updateAnchors();   
    
// });