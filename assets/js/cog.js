$(document).ready(function(){
   var div = $('#main');
   var bodyHeight = div.height();
   var top = true;
   var deg = 0;
   var page = 1;
   $('.play').hide();

   div.scroll(function() {
     if (div.scrollTop() < bodyHeight*.75) {
       console.log("It worked here" + (div.scrollTop()-bodyHeight*.75));
       $("#cog").css({
        "margin-left": ""+div.scrollTop()-bodyHeight*.75 +"px",
       });
       $("#cog-right").css({
        "margin-right": ""+ div.scrollTop()-bodyHeight*.75 +"px",
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

      console.log("Page is " + page);
      if (div.scrollTop() > (bodyHeight*.75)-210){
        page = 1;
        $('.play').show();
        car.src = "assets/images/CaliCar.png";

        $('#navbar').css({
          "background-color": "#5ADCFF",
        });
        //
        // $('.navbar').css({
        //   "margin-top": "-100px",
        // });
      }
      if (div.scrollTop() > (2*bodyHeight*.75)-150) {
        page = 2;
        $('.play').show();
        car.src = "assets/images/ShareCar.png";
        // $(".play").css({
        //   "background-color": "blue",
        // });
      }
      if(div.scrollTop() >= bodyHeight*.75){
        deg = -(div.scrollTop()-bodyHeight*0.75)/(1+bodyHeight/1000)*(360/bodyHeight);
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
