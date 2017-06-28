$(document).ready(function(){
   var bodyHeight = $(window).height();
   var top = true;
   var deg = 0;
   var page = 1;
   $('#click1').hide();
   window.onscroll = function() {
     if (window.scrollY < bodyHeight*.75) {
       console.log("It worked here" + (window.scrollY-bodyHeight*.75));
       $("#cog").css({
        "margin-left": ""+window.scrollY-bodyHeight*.75 +"px",
       });
       $("#cog-right").css({
        "margin-right": ""+ window.scrollY-bodyHeight*.75 +"px",
       });
      $('#click1').hide();
       deg = 0;
     }
    //  console.log("Leftside");
      //Determine the amount to rotate by.
      // console.log(1+bodyHeight/980);
      if(window.scrollY >= (bodyHeight*.75*page)-210){
        page += 1;
        $('#click1').show();
      }
      if(window.scrollY >= bodyHeight*.75){
        deg = -(window.scrollY-bodyHeight*0.75)/(1+bodyHeight/1000)*(360/bodyHeight);
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


   };
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
