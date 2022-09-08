
// Every time user hovers over div "darkHover" it will be 10% darker
// When user clicks on div "darkHover" it will be 20% darker
// When user clicks on div "lightHover" it will be 10% lighter
// When user clicks on div "lightHover" it will be 20% lighter

//5 seconds after flash a color for 1 second

$(document).ready(function(){
    $(".darkHover").hover(function(){
        $(this).css("opacity", +($(this).css("opacity")) - 0.05);
    }, function(){
        $(this).css("background-color", "#d4f1f9 ");
    });

});

