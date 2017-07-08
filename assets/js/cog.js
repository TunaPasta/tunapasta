$(document).ready(function(){
   var div = $('#main');
   var bodyHeight = $('.hero').height();
   var scroller = $('.hero');
   var top = true;
   var deg = 0;
   var page = 1;
   $('.play').hide();
   var subtract = 50;
   var carPercentage = $('#SoCal').height()*0.4114;
   if($('body').width() < 770 ){
     subtract = subtract + 110;
     $('.play').css({"width": $('.location').width()*0.25});
   }
   var firstChange = $('.hero').height() + carPercentage - (bodyHeight - subtract);
   var secondChange = firstChange + $('#SoCal').height();
   var thirdChange = secondChange + $('#SoUtah').height();
  //  var changeHeight = $('.hero').height();
   var changeHeight = bodyHeight*0.75;


   div.scroll(function() {
     console.log("Change" + firstChange);
     console.log("Scroll" + div.scrollTop());


     if (div.scrollTop() < bodyHeight) {
       $("#cog").css({
        "margin-left": ""+div.scrollTop()-bodyHeight +"px",
       });
       $("#cog-right").css({
        "margin-right": ""+ div.scrollTop()-bodyHeight +"px",
       });
      //  deg = -(div.scrollTop()-firstChange)/(1+bodyHeight/1000)*(360/bodyHeight);

       $(".takashi").css({
         "margin-bottom": ""+ div.scrollTop()-bodyHeight +"px",
         "transform": "rotate("+(deg)+"deg)",
       });
       $(".nikhil").css({
         "margin-bottom": ""+ div.scrollTop()-bodyHeight +"px",
         "transform": "rotate(-"+(deg-10)+"deg)",
       });

      $('.play').hide();
       deg = 0;
       $('#navbar').css({
         "background-color": "#7DDFFF",
       });
     }
    //  console.log("Leftside");
      //Determine the amount to rotate by.
      // console.log(1+bodyHeight/980);

      // console.log("Page is " + page);
      if (div.scrollTop() > firstChange){
        page = 1;
        setPlayID(page);
        $('.play').show();
        $('.icon').show();
        car.src = "assets/images/CaliCar.png";
        $('#navbar').css({
          "background-color": "#5ADCFF",
        });
      }
      if (div.scrollTop() > secondChange) {
        page = 2;
        setPlayID(page);
        // $('.icon').hide();
        // $('.play').show();
        car.src = "assets/images/SoUtCar.png";
        // $(".play").css({
        //   "background-color": "blue",
        // });
      }
      if (div.scrollTop() > thirdChange) {
        page = -1;
        setPlayID(page);
        $('.icon').hide();
        $('.play').show();
        car.src = "assets/images/ShareCar.png";
        // $(".play").css({
        //   "background-color": "blue",
        // });
      }
      if (div.scrollTop() > secondChange - carPercentage + (bodyHeight - subtract)) {
        $("#cog").css({
         "margin-left": ""-div.scrollTop()+(secondChange - carPercentage + (bodyHeight - subtract)) +"px",
        });
        $("#cog-right").css({
         "margin-right": ""- div.scrollTop()+(secondChange - carPercentage + (bodyHeight - subtract)) +"px",
        });
      }
      if(div.scrollTop() >= bodyHeight){
        deg = -(div.scrollTop()-bodyHeight) * (360/( $('#SoCal').height()+$('#SoCal').height() ));
        // deg = -(div.scrollTop()-(bodyHeight))(360/($('#SoCal').height()));
        // if (window.scrollY < bodyHeight) {
        //   leftcog.src = "assets/images/leftcog.png";
        // }
        // if (window.scrollY > bodyHeight) {
        //   leftcog.src = "assets/images/SLCcogleft.png";
        // }
      }
      $("#cog").css({
        "transform": "rotate("+deg+"deg)",
      });
      $("#cog-right").css({
        "transform": "rotate("+-deg+"deg)",
      });


   });
});

function togglePlayShare(){

}

function setPlayID(id){
  $('.play').attr('id', id);
  if(playingTrack == id){
    caricon.src = "assets/images/pause.png"
  } else {
    caricon.src = "assets/images/play.png"
  }
}

// $(document).ready(function(){
//    var bodyHeight = $(window).height();
//    window.onscroll = function() {
//      console.log("Rightside");
//
//       //Determine the amount to rotate by.
//       var deg = +window.scrollY/1.7*(360/bodyHeight);
//       $("#cog-right").css({
//         "transform": "rotate("+deg+"deg)",
//       });
//
//    };
// });
