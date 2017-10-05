var playingTrack = 0;

$.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
}

$.preloadImages("assets/images/LosAngeles.png",
                "assets/images/SouthUtah.png",
                "assets/images/SaltLakeCity.png",
                "assets/images/CaliCar-pause.png",
                "assets/images/CaliCar.png",
                "assets/images/CaliCar-play.png",
                "assets/images/SoUtCar.png",
                "assets/images/utah-road.png",
                );

$(document).ready(function(){
  var widget  = SC.Widget($('#cloudplayer').attr('id'));
  var defaultPlayerOptions = {show_artwork: false, show_comments: false, auto_play: true, visual: false};
  var episodesAPI = {
    '1': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/330851792&amp;auto_play=true&amp;show_artwork=false&amp;color=7dddff&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false',
    '2': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/332070612&amp;auto_play=true&amp;show_artwork=false&amp;color=7dddff&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false',
    '3': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/333145049&amp;auto_play=true&amp;show_artwork=false&amp;color=7dddff&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false',
    '4': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/334143770&amp;auto_play=true&amp;show_artwork=false&amp;color=7dddff&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false',
    '5': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/335199742&amp;auto_play=true&amp;show_artwork=false&amp;color=7dddff&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false',
    '6': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/336211600&amp;auto_play=true&amp;show_artwork=false&amp;color=7dddff&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false',
    '7': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/337409771&amp;auto_play=true&amp;show_artwork=false&amp;color=7dddff&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false',
    '8': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340401333&amp;auto_play=true&amp;show_artwork=false&amp;color=7dddff&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false',
    '9': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/341418404&amp;auto_play=true&amp;show_artwork=false&amp;color=7dddff&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false',
    '10': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/342435561&amp;auto_play=true&amp;show_artwork=false&amp;color=7dddff&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false',
    '11': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/343485547&amp;auto_play=true&amp;show_artwork=false&amp;color=7dddff&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false'
  }
  var load = false;
  var loadedTrack = 0;
  $('.play').click(() => {
    var selectedTrack = $(".play").attr('id');
    if(selectedTrack == -1){
      showShareScreen();
      return;
    }
    if(loadedTrack != selectedTrack){
      $("#cloudplayer").attr("src", episodesAPI[selectedTrack]);
      loadedTrack = selectedTrack;

    } else {
      widget.bind(SC.Widget.Events.READY, function() {
        widget.bind(SC.Widget.Events.PLAY, function() {
          caricon.src = "assets/images/pause.png"
        });
        widget.bind(SC.Widget.Events.PAUSE, function() {
          caricon.src = "assets/images/play.png"
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
