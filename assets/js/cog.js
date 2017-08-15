$(document).ready(function(){

    var allLoaded = false


   var div = $('#main');
   var scroller = $('.hero');
   var top = true;
   var deg = 0;
   var page = 1;
   $('.play').hide();
   var subtract = 50;
   var heightSoCal = 500
   var heightSoUtah = $('#SoUtah').height();
   var heightSLC = $('#SLC').height();
   var heightHero = $('.hero').height()

   var carPercentage = heightSoCal*0.4114;

   if($('body').width() < 770 ){
     subtract = subtract + 110;
     $('.play').css({"width": $('.location').width()*0.25});
   }
   var firstChange = $('.hero').height() + carPercentage - (heightHero - subtract);
   var roadHeight = heightSoUtah
   var secondChange = firstChange + heightSoCal;
  //  var changeHeight = $('.hero').height();
   var changeHeight = heightHero*0.75;


    var checkExist = setInterval(function() {

       if ($('#SoCal').height() > 30 && heightSoCal == 0) {
          heightSoCal = $('#SoCal').height();
       } else if ($('#SoUtah').height() > 30 && heightSoUtah == 0) {
          heightSoUtah = $('#SoUtah').height();
       } else if ($('#SLC').height() > 30 && heightSLC == 0) {
          heightSLC = $('#SLC').height();
       } else {
         if(heightSoCal == 20 || heightSoUtah == 20 || heightSoCal == 20){
           if(heightSoCal == 20){
             heightSoCal = 0
           }
           if(heightSoUtah == 20){
             heightSoUtah = 0
           }
           if(heightSLC == 20){
             heightSLC = 0
           }
         } else {
           carPercentage = heightSoCal*0.4114;
           firstChange = $('.hero').height() + carPercentage - (heightHero - subtract);
           secondChange = firstChange + heightSoCal;
           thirdChange = secondChange + heightSoUtah;
           fourthChange = thirdChange + heightSLC;
           clearInterval(checkExist);
           allLoaded = true;
         }
       }
    }, 100);

   div.scroll(function() {
    //  console.log("Scroll" + div.scrollTop());
    if(allLoaded){
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

     let page = parseInt(div.scrollTop()/roadHeight - 0.2) + 1
     if (div.scrollTop() < firstChange){
       page = 0;
     }
     setPlayID(page)

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
      }
      $("#cog").css({
        "transform": "rotate("+deg+"deg)",
      });
      $("#cog-right").css({
        "transform": "rotate("+-deg+"deg)",
      });

    } else {
      checkExist();
    }
   });
});

function togglePlayShare(){

}

function setPlayID(id){
  let episodeCount = 8
  if(id >= 1)
    firstPageChange()
  if(id == episodeCount){
    lastPageChange()
    id = -1
  }
  $('.play').attr('id', id);
  if(playingTrack == id){
    caricon.src = "assets/images/pause.png"
  } else {
    caricon.src = "assets/images/play.png"
  }
}

function firstPageChange(){
  $('.play').show();
  $('.icon').show();
  car.src = "assets/images/PlayCar.png";
  $('#navbar').css({
    "background-color": "#5ADCFF",
  });
}

function lastPageChange(){
  $('.icon').hide();
  $('.play').show();
  car.src = "assets/images/ShareCar.png";
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
