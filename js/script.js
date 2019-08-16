var val1;
var val2;
var val3;

  
  $( document ).ready(function() {
  


    $("#contactButton").click(function(){

        event.preventDefault();

      $("#popup").toggle( "up" );
});




$("#closeContact").click(function(){
      
  event.preventDefault();

  $("#popup").toggle( "down" );

});



$("video").each(function () {

    var player = videojs(this.id, {});


    $("#rewindButton").click(function () {

        event.preventDefault();

        player.currentTime(player.currentTime()-10);
    });


    $("#playButton").click(function () {

        event.preventDefault();

        if (!player.paused()) {
            player.pause();
            $("#playButton").find('h2').html("▶");
            $("#playButton h2").css("margin-left", "11px");
            $("#playButton h2").css("margin-top", "3px");
            //positionering play button aangezien die andere positie heeft dan pauze knop, ondanks dat het gewoon symbolen zijn



        } else {
            player.play();
            $("#playButton").find('h2').html("||");
            $("#playButton h2").css("margin-left", "0px");
            $("#playButton h2").css("margin-top", "0px");


        }
    });

});





$(".sliderImage:gt(0)").hide();

setInterval(function() {
  $('.sliderImage:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.sliderCanvas');
}, 3000);




$( function() {
    $( "#slider1").slider({
      range: "max",
      min: 0,
      max: 100,
      value: 5,
      slide: function( event, ui ) {
        val1 = ui.value;
        console.log(val1);
        offsetAchtergrondKleur = val1;
      }
    });


  } ); 



$( function() {
  $( "#slider2").slider({
    range: "max",
    min: 0,
    max: 2,
    value: 1,
    slide: function( event, ui ) {
      val2 = ui.value;
      console.log(val2);
      driehoekFill = val2;
    }
  });


} );


$( function() {
  $( "#slider3").slider({
    range: "max",
    min: 0,
    max: 25,
    value: 5,
    slide: function( event, ui ) {
      val3 = ui.value;
      console.log(val3);
      richtingx = val3;
    }
  });
}); 

}); 
