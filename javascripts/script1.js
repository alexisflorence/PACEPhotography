
$(document).ready(function(){ // waits until doc is fully loaded

    $("a").hover(function(){
        $(this).css("background-color", "lightblue");
    },
    function(){
        $(this).css("background-color","pink");
    });
});