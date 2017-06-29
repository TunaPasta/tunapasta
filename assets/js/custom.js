$(document).ready(function(){
  var widget  = SC.Widget($('#cloudplayer').attr('id'));
  var defaultPlayerOptions = {show_artwork: false, show_comments: false, auto_play: true, visual: false};
  var episodes = {
    'mixtape': 'https://soundcloud.com/user-162103925/views-from-the-swamp',
    'promo': 'https://soundcloud.com/tunapastapodcast/coming-soon',
    'ep1': ''
  };
  var load = false;

  $('#click1').click(() => {
    // console.log(widget.getCurrentSoundIndex());
    if($("#click1").val() == ""){
      console.log("INCREDIBLE!");
    }
    console.log("Hey there" + $("#click1").val());
    if(load == false){
      $("#cloudplayer").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293371157&amp;auto_play=false&amp;show_artwork=false&amp;color=7dddff&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false");
    }
    load = true;
    // widget.load(episodes['mixtape'], defaultPlayerOptions);
    $('.foot-player').css({
      "bottom": "0",
    });
    car.src = "assets/images/CaliCar-pause.png";
    widget.toggle();
  });

  $('#click2').click(() => {
    $("#cloudplayer").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/329615571&amp;auto_play=false&amp;hide_related=false&amp;color=7dddff&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false&amp;show_artwork=false");
    // widget.load(episodes['promo'], defaultPlayerOptions);
  });
});
