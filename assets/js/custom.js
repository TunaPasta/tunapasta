$(document).ready(function(){
  var widget  = SC.Widget($('#cloudplayer').attr('id'));
  var defaultPlayerOptions = {show_artwork: false, show_comments: false, auto_play: true, visual: false};
  var episodes = {
    'mixtape': 'https://soundcloud.com/user-162103925/views-from-the-swamp',
    'promo': 'https://soundcloud.com/tunapastapodcast/coming-soon',
    'ep1': 'https://soundcloud.com/tunapastapodcast/episode-1-southern-california'
  };
  var load = false;
  var loadedTrack = 0;
  var playingTrack = 0;

  $('.play').click(() => {
    var selectedTrack = $(".play").attr('id');
    if(selectedTrack == -1){
      showShareScreen();
      return;
    }
    if(loadedTrack != selectedTrack){
      $("#cloudplayer").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/330851792&amp;auto_play=false&amp;hide_related=false&amp;color=7dddff&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false");
      loadedTrack = selectedTrack;

    } else {
      widget.bind(SC.Widget.Events.READY, function() {
        // console.log('ye');
        widget.bind(SC.Widget.Events.PLAY, function() {
          caricon.src = "assets/images/pause.png"
          // console.log('yee');
        });
        widget.bind(SC.Widget.Events.PAUSE, function() {
          caricon.src = "assets/images/play.png"
          // console.log('yeesssss');
        });
      });
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

function showShareScreen(){
  // console.log("SHARE!");
  $("#sharemodal").trigger('openModal');
  // window.open('#sharemodal');
}

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
  $('a[href*="#"]:not([href="#"]):not([href="#contactmodal"]):not([href="#subscribemodal"]):not([href="#sharemodal"])').click(function() {
    // console.log('yeeee234');
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('.main').animate({
        scrollTop: target.offset().top
      }, 700);
    // $('.main').animate({
    //     scrollTop: $( $(this).attr('href')).offset().top
    // }, 500);
    return false;
    }
  })
});

$(function() {
  $('.modal').easyModal({
    top: 200,
    overlayOpacity: .3
  });

  $('.modal-open').click(function(e) {
    var target = $(this).attr('href');
    $(target).trigger('openModal');
    e.preventDefault();
  });

  $('.modal-close').click(function(e) {
    $('.modal').trigger('closeModal');
  });
});
