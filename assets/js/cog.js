$(document).ready(function(){
   var bodyHeight = $(window).height();
   window.onscroll = function() {
     console.log("Leftside");
      //Determine the amount to rotate by.
      var deg = -window.scrollY/1.7*(360/bodyHeight);
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
