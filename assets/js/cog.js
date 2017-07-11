$(document).ready(function(){
   var div = $('#main');
   var scroller = $('.hero');
   var top = true;
   var deg = 0;
   var page = 1;
   $('.play').hide();
   var subtract = 50;
   var heightSoCal = $('#SoCal').height();
   var heightSoUtah = $('#SoUtah').height();
   var heightHero = $('.hero').height()

   var checkExist = setInterval(function() {
      if ($('#SoCal').height != 0 && heightSoCal == 0) {
         console.log("Exists!");
         heightSoCal = $('#SoCal').height();
      } else if ($('#SoUtah').height != 0 && heightSoUtah == 0) {
         console.log("Exists!");
         heightSoUtah = $('#SoUtah').height();
      } else if ($('.hero').height != 0 && heightHero == 0) {
         console.log("Exists!");
         heightHero = $('.hero').height();
      } else {
        console.log("GREAT!");
        clearInterval(checkExist);
      }
   }, 100);

   var carPercentage = heightSoCal*0.4114;
   console.log("SoCal height " +  heightSoCal);
   console.log("SoUtah height " +  heightSoUtah);
   console.log("Hero height " +  heightHero);




   if($('body').width() < 770 ){
     subtract = subtract + 110;
     $('.play').css({"width": $('.location').width()*0.25});
   }
   var firstChange = $('.hero').height() + carPercentage - (heightHero - subtract);
   var secondChange = firstChange + heightSoCal;
   var thirdChange = secondChange + heightSoUtah;
  //  var changeHeight = $('.hero').height();
   var changeHeight = heightHero*0.75;


   div.scroll(function() {
    //  console.log("Change" + firstChange);
    //  console.log("Scroll" + div.scrollTop());


     if (div.scrollTop() < heightHero) {
       $("#cog").css({
        "margin-left": ""+div.scrollTop()-heightHero +"px",
       });
       $("#cog-right").css({
        "margin-right": ""+ div.scrollTop()-heightHero +"px",
       });
      //  deg = -(div.scrollTop()-firstChange)/(1+heightHero/1000)*(360/heightHero);

       $(".takashi").css({
         "margin-bottom": ""+ div.scrollTop()-heightHero +"px",
         "transform": "rotate("+(deg)+"deg)",
       });
       $(".nikhil").css({
         "margin-bottom": ""+ div.scrollTop()-heightHero +"px",
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
      // console.log(1+heightHero/980);

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
      if (div.scrollTop() > secondChange - carPercentage + (heightHero - subtract)) {
        $("#cog").css({
         "margin-left": ""-div.scrollTop()+(secondChange - carPercentage + (heightHero - subtract)) +"px",
        });
        $("#cog-right").css({
         "margin-right": ""- div.scrollTop()+(secondChange - carPercentage + (heightHero - subtract)) +"px",
        });
      }
      if(div.scrollTop() >= heightHero){
        deg = -(div.scrollTop()-heightHero) * (360/( heightSoCal+heightSoCal ));
        // deg = -(div.scrollTop()-(heightHero))(360/(heightSoCal));
        // if (window.scrollY < heightHero) {
        //   leftcog.src = "assets/images/leftcog.png";
        // }
        // if (window.scrollY > heightHero) {
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
//    var heightHero = $(window).height();
//    window.onscroll = function() {
//      console.log("Rightside");
//
//       //Determine the amount to rotate by.
//       var deg = +window.scrollY/1.7*(360/heightHero);
//       $("#cog-right").css({
//         "transform": "rotate("+deg+"deg)",
//       });
//
//    };
// });
