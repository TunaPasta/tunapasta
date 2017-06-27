$(document).ready(function(){
   var bodyHeight = $(window).height();
   window.onscroll = function() {
     console.log("Leftside");
      //Determine the amount to rotate by.
      console.log(1+bodyHeight/980);
      var deg = -window.scrollY/(1+bodyHeight/1000)*(360/bodyHeight);
      if (window.scrollY < bodyHeight) {
        console.log("HEY");
        leftcog.src = "assets/images/leftcog.png";
      }
      if (window.scrollY > bodyHeight) {
        console.log("HEY");
        leftcog.src = "assets/images/SLCcogleft.png";
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
