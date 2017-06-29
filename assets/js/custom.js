$(document).ready(function(){
  var widget  = SC.Widget($('#cloudplayer').attr('id'));
  var defaultPlayerOptions = {show_artwork: false, show_comments: false, auto_play: true, visual: false};
  var episodes = {
    'mixtape': 'https://soundcloud.com/user-162103925/views-from-the-swamp',
    'promo': 'https://soundcloud.com/tunapastapodcast/coming-soon',
    'ep1': ''
  };
  var load = false;
  var loadedTrack = 0;
  var playingTrack = 0;

  $('.play').click(() => {
    // console.log(widget.getCurrentSoundIndex());
    console.log($(".play").attr('id'));
    var selectedTrack = $(".play").attr('id');
    if(loadedTrack != selectedTrack){
      $("#cloudplayer").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293371157&amp;auto_play=true&amp;show_artwork=false&amp;color=7dddff&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false");
      loadedTrack = selectedTrack;

    } else {
      widget.toggle();
    }
    if(playingTrack == selectedTrack){
      playingTrack = 0;
    } else {
      playingTrack = selectedTrack;
    }

    if(playingTrack != selectedTrack){
      caricon.src = "assets/images/play.png"
    } else {
      caricon.src = "assets/images/pause.png"
    }

    $('.foot-player').css({
      "bottom": "0",
    });
  });
});

jQuery(function($) {
  var options = {
  $menu: false,
  menuSelector: 'a',
  panelSelector: '> section',
  namespace: '.panelSnap',
  directionThreshold: 50,
  slideSpeed: 300,
  delay: 0,
  easing: 'linear',
  offset: 0,
  };
  $('.main').panelSnap(options);
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    console.log('yeeee234');
    $('.main').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
  })
});
